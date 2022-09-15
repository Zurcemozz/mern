import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    productName: { type: String },
    productDescription: { type: String },
    productPrice: { type: Number },
    productCategory: [{ type: String }],
    productStock: { type: Number, default: 0 },
    productImage: { type: String },
  },
  { timestamps: { createdAt: true } }
)

export default mongoose.model('Product', productSchema)
