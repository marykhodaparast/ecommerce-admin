import { model, Schema, models } from 'mongoose'

const ProductsSchema = new Schema({
    title: {type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    images: { type: [String]}
});

export const Product = models.Product || model('Product', ProductsSchema)