import express from 'express'
import all from './all'
import single from './single'
import create from './create'
import deleteUsers from './delete'
import update from './update'

const todos = express.Router()
todos.get('/', all)
todos.post('/', create)
todos.delete('/', deleteUsers)

todos.get('/:id', single)
todos.put('/:id', update)
todos.delete('/:id', deleteUsers)


export default todos
