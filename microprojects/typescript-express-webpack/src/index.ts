import express from "express";
import { createConnection, Connection } from "typeorm";

const app = express();

async function database() {
  const connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "test"
  });
  return connection;
}

database();

app.use("/", (req, res) => {
  res.json("Hello World");
});

app.listen(3600);
