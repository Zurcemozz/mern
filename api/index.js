import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
const PORT = 8800
const app = express()

//Routers

import postRoutes from './routes/product.js'

//Databases
const dbmongodb = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:admin@tua.nqbq2xi.mongodb.net/Ecom?retryWrites=true&w=majority'
    )
  } catch (error) {
    throw error
  }
}

//Middlewares
app.use(cors())
app.use(express.json())

//Route handlers
app.use('/api/products', postRoutes)

//This one will run after routes are loaded
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errormessage = err.message || 'Something went wrong'
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errormessage,
    stack: err.stack,
  })
})

app.listen(8800, () => {
  dbmongodb()
  console.log(
    `Connected to Backend, Running on port : http://localhost:${PORT}`
  )
})
