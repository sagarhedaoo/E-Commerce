import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default function CategoryPage({}) {
  return (
    <>
      <Header />
      <Center>
        <Title>Category Page</Title>
        {/* <ProductsGrid products={products} /> */}
      </Center>
    </>
  );
}
