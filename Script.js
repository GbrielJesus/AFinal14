const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Configurar o limite de taxa (apenas uma solicitação por hora)
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 1, // Apenas uma solicitação permitida
  message: 'Limite de taxa excedido. Tente novamente mais tarde.' // Mensagem de erro exibida ao atingir o limite
});

// Aplicar o limite de taxa a todas as rotas
app.use(limiter);

// Restante das rotas e configurações do seu servidor

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

