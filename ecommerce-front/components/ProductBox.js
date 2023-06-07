import { styled } from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";

const WhiteBox = styled.div`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const ProductWrapper = styled.div``;

const Title = styled.h2`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

export default function ProductBox({ _id, title, description, price, images }) {
  return (
    <ProductWrapper>
      <WhiteBox>
        <div>
          <img src={images[0]} />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title> {title}</Title>

        <PriceRow>
          <Price>${price}</Price>

          <Button primary outline>
            Add To Cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
