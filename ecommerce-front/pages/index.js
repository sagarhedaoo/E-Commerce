import Fetaured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import mongoose from "mongoose";

export default function HomePage({ product }) {
  console.log(product);
  return (
    <div>
      <Header />
      <Fetaured />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "647f392a2124019f5d89aabd";
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
}
