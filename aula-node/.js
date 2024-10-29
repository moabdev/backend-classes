// Importa o módulo http
const http = require("http");

// Define a porta onde o servidor vai escutar
const PORT = 3005;

// Cria o servidor HTTP
const server = http.createServer((req, res) => {
  // Define o cabeçalho padrão da resposta
  res.setHeader("Content-Type", "text/plain");

  // Rotas
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200); // Status OK
    res.end("Bem-vindo à página inicial!");
  } else if (req.url === "/sobre" && req.method === "GET") {
    res.writeHead(200);
    res.end("Esta é a página Sobre.");
  } else if (req.url === "/contato" && req.method === "GET") {
    res.writeHead(200);
    res.end("Esta é a página de Contato.");
  } else {
    // Rota não encontrada
    res.writeHead(404);
    res.end("Página não encontrada");
  }
});

// Servidor escutando na porta definida
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
