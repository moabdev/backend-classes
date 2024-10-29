import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "Hello!"
  );
});

app.get("/users", (req, res) => {
  res.send("Lista de usuários!")
});

app.listen("3000", () => {
  console.log("Servidor iniciado na porta 3000" + " http://localhost:3000");
});