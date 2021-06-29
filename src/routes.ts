import { Router } from 'express';
import { createDatabaseConnection } from './database';
import { getCreateUserDependencies } from './useCases/CreateUser';

async function setupRouter(): Promise<Router> {
  await createDatabaseConnection();
  const router = Router();
  const { createUserController } = getCreateUserDependencies();
  
  router.post('/users', (request, response) => createUserController.handle(request, response));

  return router;
}


export { setupRouter };
