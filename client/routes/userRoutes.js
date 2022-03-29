import express from 'express';
import service from '../services/userService.js';

const routes = express.Router();

routes.get('/users', service.getAllUser);
routes.post('/users', service.addUser);
routes.put('/users/:userId', service.updatedUser);
routes.delete('/users/:userId', service.deleteUser);

export default routes;
