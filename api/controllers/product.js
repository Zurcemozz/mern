import Product from '../models/Product.js'

export const addProduct = async (req, res) => {
  const product = req.body
  const newProduct = new Product(product)
  try {
    await newProduct.save()

    res.status(200).json(newProduct)
  } catch (error) {
    next(error)
  }
}

export const getProduct = async (req, res, next) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json('Product Deleted')
  } catch (error) {
    next(error)
  }
}

export const updateProduct = async (req, res, next) => {
  try {
    //$set meaning, i-uupdate nya ung mismmong content nung req.body
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updateProduct)
  } catch (error) {
    next(error)
  }
}
