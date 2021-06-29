import { Router } from 'express';
import { createDatabaseConnection } from './database';
import { getCreateUserDependencies } from './useCases/CreateUser';
import { getListUserDependencies } from './useCases/ListUser';
import { getListUsersDependencies } from './useCases/ListUsers';

async function setupRouter(): Promise<Router> {
  await createDatabaseConnection();
  const router = Router();
  const { createUserController } = getCreateUserDependencies();
  const { listUsersController } = getListUsersDependencies();
  const { listUserController } = getListUserDependencies();

  router.get('/users/:id', (request, response) => listUserController.handle(request, response));
  router.get('/users', (request, response) => listUsersController.handle(request, response));
  router.post('/users', (request, response) => createUserController.handle(request, response));
  

  return router;
}


export { setupRouter };
