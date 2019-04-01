import express from 'express'

import apis from './api'
import home from './home'

const router = express.Router()
router.get('/', home)
router.use('/api', apis)

export default router
