
const express = require('express');
const app = express();
const postsRouter = require('./routers/posts');


app.use(express.json());

// Usa il router dei post
app.use('/api', postsRouter);

// Avvia il server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
