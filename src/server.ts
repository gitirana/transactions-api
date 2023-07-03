import fastify from "fastify";
import { env } from "../env";
import { knex } from "./database";

const app = fastify();

app.get("/hello", async () => {
  const transaction = await knex("transactions").select("*");

  return transaction;
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });
