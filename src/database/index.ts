import { createConnection } from "typeorm";

export const createDatabaseConnection = async () => await createConnection();
