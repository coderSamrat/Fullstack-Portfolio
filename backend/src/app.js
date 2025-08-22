import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
      origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
      methods: process.env.CORS_METHODS || 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: process.env.CORS_CREDENTIALS === 'true' || true,
}));
app.use(express.json());
app.use(express.urlencoded());

export { app };