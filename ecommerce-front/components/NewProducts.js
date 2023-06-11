import { styled } from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
  }
  /* padding-top: 20px; */
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 20px 0 20px;
  font-weight: normal;
`;

export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid>
        {products?.length > 0 &&
          products.map((product) => <ProductBox {...product} />)}
      </ProductsGrid>
    </Center>
  );
}
