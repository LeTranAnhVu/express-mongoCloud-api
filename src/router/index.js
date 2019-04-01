import express from 'express';

const router = express.Router();

import home from './home';

import apis from './api';

router.get('/',home);
router.use('/api',apis);
export default router;
