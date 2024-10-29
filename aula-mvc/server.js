// Arquitetura MVC
// Arquitetura é uma estrutura que utilizaremos para organizar o código e separar responsabilidades.

// M -> Model -> É responsável pela lógica de dados da aplicação.
// V -> View -> É responsável por exibir os dados na tela.
// C -> Controller -> É o intermediário que faz a ligação entre a Visualização e o Módulo de dados.

// Mongoose é uma biblioteca de modelagem de dados de objetos (ODM) baseada em Node.js para MongoDB.

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const methodOverride = require("method-override");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();

const app = express();
app.set("view engine", "ejs"); // Configura o EJS como view engine
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method")); // Para métodos PUT e DELETE
app.use("/", todoRoutes); // Usar as rotas

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
