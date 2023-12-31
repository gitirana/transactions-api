# Transactions API

In this repository you will find the API for this application.

The api is already deployed in this [link](https://transactions-api-16ki.onrender.com/)

## Application

Transactions is an application to facilitate your transactions management

## Features

Below are the features added to application:

Route: `http://localhost:3333/transactions`
- [x] Create a transaction with title, amount and type (credit or debit).
- [x] List the transations 

Route: `http://localhost:3333/transactions/:id`
- [x] Get the specific transaction by id


Route: `http://localhost:3333/summary`
- [x] Summary the user transactions amount 

## How to Setup

These instructions will get you a copy of the full project up and running on your local machine for development and testing purposes.

The project can be built with npm or yarn, so choose one of the approach bellow in case you don't have any installed on your system.

* **Npm** is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer. [Download Node.js](https://nodejs.org/en/download/)

* **Yarn** is a package manager built by Facebook Team and seems to be faster than npm in general.  [Download Yarn](https://yarnpkg.com/en/docs/install)

To run this server you will need a node version 12.0.0 (minimum) 

## Setting up Databases and Services

The project uses [PostgreSQL](https://www.postgresql.org).

I recommend use [Docker](https://www.docker.com) to install and run the databases and services above.

## How to Install

### Backend (API)

* To download the project follow the instructions bellow:


1. `git clone https://github.com/gitirana/transactions-api.git`
2. `cd transactions-api`


* Install the dependencies and start the server:


3. `npm install`
4. `npm run knex -- migrate:latest`
5. `npm run dev` 🥳

### Author
---

<img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/61708182?s=460&u=e3d31df35b1e4e8095aa2538a17a872e7e85bc6b&v=4" width="80px;" alt="" />

<sub><b>Thayná Luiza Gitirana</b></sub>

Made with ❤️ by Thayná Luiza Gitirana

[![Linkedin Badge](https://img.shields.io/badge/-@gitirana-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gitirana/)](https://www.linkedin.com/in/gitirana/) [![Gmail Badge](https://img.shields.io/badge/-thaynalgc@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thaynalgc@gmail.com)](mailto:thaynalgc@gmail.com)

