import { FastifyInstance } from "fastify";
import { randomUUID } from "node:crypto";
import { z } from "zod";
import { knex } from "../database";
import { checkIfSessionIdExists } from "../middleware/checkIfSessionIdExists";

export async function transactionsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [checkIfSessionIdExists],
    },
    async (request) => {
      const { sessionId } = request.cookies;

      const transactions = await knex("transactions").where("session_id", sessionId).select();

      return { transactions };
    },
  );

  app.get(
    "/:id",
    {
      preHandler: [checkIfSessionIdExists],
    },
    async (request) => {
      const getTransactionsParamsSchema = z.object({
        id: z.string().uuid(),
      });

      const { sessionId } = request.cookies;

      const { id } = getTransactionsParamsSchema.parse(request.params);

      const transaction = await knex("transactions")
        .where("id", id)
        .andWhere("session_id", sessionId)
        .first();

      return { transaction };
    },
  );

  app.get(
    "/summary",
    {
      preHandler: [checkIfSessionIdExists],
    },
    async (request) => {
      const sessionId = request.cookies.sessionId;

      const summary = await knex("transactions")
        .sum("amount", { as: "amount" })
        .first()
        .where("session_id", sessionId);

      return { summary };
    },
  );

  app.post("/", async (request, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(["credit", "debit"]),
    });

    const { title, amount, type } = createTransactionBodySchema.parse(request.body);

    let sessionId = request.cookies.sessionId;

    if (!sessionId) {
      sessionId = randomUUID();

      reply.cookie("sessionId", sessionId, {
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      });
    }

    await knex("transactions")
      .insert({
        id: randomUUID(),
        title,
        amount: type === "credit" ? amount : amount * -1,
        session_id: sessionId,
      })
      .where("session_id", sessionId);

    return reply.status(201).send();
  });
}
