const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/mensagem', (req, res) => {
  const pergunta = req.body.mensagem;
  console.log('Mensagem recebida:', pergunta);

  const resposta = `Olá! Aqui é o *Buburezinho 🤖*. Você perguntou: _${pergunta}_`;
  return res.json({ resposta });
});

const PORTA = process.env.PORT || 8080;
app.listen(PORTA, () => {
  console.log(`Rodando na porta ${PORTA}`);
});
