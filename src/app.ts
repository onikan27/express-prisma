import express from 'express';

const app: express.Express = express();

app.get("/", (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("Hello Express\n")
})

export default app
