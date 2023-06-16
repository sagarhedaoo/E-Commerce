import Fetaured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { WishedProduct } from "@/models/WishedProduct";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export default function HomePage({
  featuredProduct,
  newProducts,
  wishedNewProducts,
}) {
  console.log({ newProducts });
  // console.log(product);
  return (
    <div>
      <Header />
      <Fetaured product={featuredProduct} />
      <NewProducts products={newProducts} WishedProduct={wishedNewProducts} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const featuredProductId = "647f392a2124019f5d89aabd";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });
  const { user } = await getServerSession(ctx.req, ctx.res, authOptions);
  const wishedNewProducts = await WishedProduct.find({
    userEmail: user.email,
    product: newProducts.map((p) => p._id.toString()),
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      wishedNewProducts: wishedNewProducts.map((i) => i.product.toString()),
    },
  };
}
