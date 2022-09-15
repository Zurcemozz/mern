import express from 'express'
const router = express.Router()

import {
  addProduct,
  deleteProduct,
  getProduct,
} from '../controllers/product.js'

router.get('/', getProduct)
router.post('/', addProduct)
router.delete('/:id', deleteProduct)

export default router
