import { Router } from 'express';
import { createDatabaseConnection } from './database';
import { getAuthUserDependencies } from './useCases/AuthUser';
import { getCreateUserDependencies } from './useCases/CreateUser';
import { getDeleteUserDependencies } from './useCases/DeleteUser';
import { getListUserDependencies } from './useCases/ListUser';
import { getListUsersDependencies } from './useCases/ListUsers';
import { getUpdateUserDependencies } from './useCases/UpdateUser';

async function setupRouter(): Promise<Router> {
  await createDatabaseConnection();
  const router = Router();
  const { createUserController } = getCreateUserDependencies();
  const { listUsersController } = getListUsersDependencies();
  const { listUserController } = getListUserDependencies();
  const { updateUserController } = getUpdateUserDependencies();
  const { deleteUserController } = getDeleteUserDependencies();
  const { authUserController } = getAuthUserDependencies();

  router.get('/users/:id', (request, response) => listUserController.handle(request, response));
  router.get('/users', (request, response) => listUsersController.handle(request, response));
  router.post('/users', (request, response) => createUserController.handle(request, response));
  router.put('/users/:id', (request, response) => updateUserController.handle(request, response));
  router.delete('/users/:id', (request, response) => deleteUserController.handle(request, response));
  router.post('/auth', (request, response) => authUserController.handle(request, response));

  return router;
}


export { setupRouter };
