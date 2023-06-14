import Center from "@/components/Center";
import { styled } from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import FlyingButton from "./FlyingButton";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 2rem;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
    text-align: left;
  }
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  gap: 40px;
  img {
    max-width: 100%;
    max-height: 300px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
    }
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 10px;
    margin-top: 25px;
    justify-content: left;
  }
`;

export default function Fetaured({ product }) {
  const { addProduct } = useContext(CartContext);

  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonsWrapper>
                <ButtonLink
                  href={"/product/" + product._id}
                  outline={1}
                  white={1}
                >
                  Read More
                </ButtonLink>

                <FlyingButton white id={product._id} src={product.images?.[0]}>
                  <CartIcon />
                  Add to cart
                </FlyingButton>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img src="https://images.macrumors.com/t/Au-OUIb73hHvx2w8CirAir5bNbM=/1600x/article-new/2013/09/macbook-air-m2-roundup-header.png" />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
