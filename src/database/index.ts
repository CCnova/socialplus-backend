import { createConnection } from "typeorm";

const createDatabaseConnection = async () => {
  return await createConnection();
};

export { createDatabaseConnection };
