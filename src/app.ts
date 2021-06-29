import express from 'express';
import 'reflect-metadata';
import { setupRouter } from './routes';

async function initApp(): Promise<any> {
  const app = express();
  const router = await setupRouter();
  app.use(express.json());
  app.use(router);

  return app;
}

export { initApp };
