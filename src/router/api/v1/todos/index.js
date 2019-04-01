import express from 'express';
import all from './all';
import single from './single';
import create from './create';

// import bodyParser from 'body-parser';
// const jsonParser = bodyParser.json();

const todos = express.Router();
todos.get('/',all);
todos.post('/',create);
todos.get('/:id',single);


export default todos;
