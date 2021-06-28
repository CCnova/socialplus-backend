import express from 'express';
import 'reflect-metadata';
import { createDatabaseConnection } from './database';

createDatabaseConnection();

const app = express();

export default app;
