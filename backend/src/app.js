import express from 'express';
import cors from 'cors';
import { heroRouter } from './routes/hero.routes.js';
import { aboutRouter } from './routes/about.routes.js';
import { educationRouter } from './routes/education.routes.js';
import { skillRouter } from './routes/skills.routes.js';
import { projectRouter } from './routes/project.routes.js';
import { servicesRouter } from './routes/services.routes.js';
import { contactRouter } from './routes/contact.routes.js';

const app = express();

app.use(cors({
      origin: process.env.CORS_ORIGIN,
      methods: process.env.CORS_METHODS,
      credentials: process.env.CORS_CREDENTIALS,
      headers: process.env.CORS_HEADERS,
}));
app.use(express.json());
app.use(express.urlencoded());

app.use('/api/v1/hero', heroRouter);
app.use('/api/v1/about', aboutRouter);
app.use('/api/v1/education', educationRouter);
app.use('/api/v1/skills', skillRouter);
app.use('/api/v1/projects', projectRouter);
app.use('/api/v1/services', servicesRouter);
app.use('/api/v1/conatct', contactRouter);

export { app };