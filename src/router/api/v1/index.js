import express from 'express';
import todos from './todos';
import users from './users';
const v1 = express.Router();

v1.use('/todos', todos);
v1.use('/users', users);

export default v1;
