import express from 'express';
import all from './all';
import single from './single';
const users = express.Router();

users.get('/', all);
users.get('/:id',single);

export default users;
