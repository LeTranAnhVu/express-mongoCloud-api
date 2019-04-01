import express from 'express';
import v1 from './v1';
const apis = express.Router();
apis.use('/v1', v1);
// v2
// v3
export default apis;
