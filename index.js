const express = require('express');
const app = express();
app.use(express.json());

app.post('/mensagem', (req, res) => {
  const mensagem = req.body.mensagem || req.body.message || "";
  res.json({ resposta: `Bubuzinho diz: você perguntou: ${mensagem}` });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
