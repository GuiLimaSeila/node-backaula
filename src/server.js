import express from 'express'; // Serve para escutar as requisições
import { config } from 'dotenv'; // Serve para ler o arquivo .env

config(); // lê o arquivo .env

const port = process.env.PORT || 5000; // Pega a porta do arquivo .env ou usa a porta 5000

const app = express(); // Cria o servidor
app.use(express.json()); // Faz o servidor entender JSON

app.get('/', (req, res) => {
    // Rota inicial
  res.status(200).json({ message: 'Hello, GET!' });
});

app.post('/', (req, res) => {
    // Rota inicial
  res.status(200).json({ message: 'Hello, POST!' });
});

app.put('/', (req, res) => {
    // Rota inicial
  res.status(200).json({ message: 'Hello, PUT!' });
});

app.delete('/', (req, res) => {
    // Rota inicial
  res.status(200).json({ message: 'Hello, DELETE!' });
});

app.listen(port, () => {
    // Inicia o servidor
  console.log(`Server started on http://localhost:${port}`);
});