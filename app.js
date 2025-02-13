
const express = require('express');
const app = express();
const postsRouter = require('./routers/posts');


app.use(express.json());


app.use('/api', postsRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
