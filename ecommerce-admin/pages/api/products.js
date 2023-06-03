import clientPromise from "@/lib/mongodb";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import mongoose, { mongo } from "mongoose";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "GET") {
    res.json(await Product.find());
  }

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
