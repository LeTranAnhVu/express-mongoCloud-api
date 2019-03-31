import express from 'express';

const router = express.Router();

import home from './home';
import users from './users';
import todos from './todos';

router.get('/',home);
router.use('/users',users);
router.use('/todos', todos);
export default router;