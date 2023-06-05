import mongoose from "mongoose";
import clientPromise from "../../lib/mongodb";
import { mongooseConnect } from "../../lib/mongoose";
import { Product } from "../../models/Product";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  mongoose.Promise = clientPromise;
  if (method === "POST") {
    const { title, description, price } = req.body;
    const productDoc = await Product.create({
      title,
      description,
      price,
    });

    res.json(productDoc);
  }
}
