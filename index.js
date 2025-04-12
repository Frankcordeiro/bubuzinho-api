const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/mensagem', (req, res) => {
  const pergunta = req.body.mensagem;
  console.log('Mensagem recebida:', pergunta);

  const resposta = `Bubuzinho diz: você perguntou: ${pergunta}`;
  return res.json({ resposta });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
