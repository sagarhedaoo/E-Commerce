import Center from "@/components/Center";
import { styled } from "styled-components";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

export default function Fetaured() {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Title>Pro anywhere</Title>
              <Desc>
                The MacBook Pro 15” (4th Generation) is the current high-end
                professional offering of laptop computers designed by Apple Inc.
                The largest and highest performing of the current MacBook
                family, the Apple MacBook Pro 15” (4th Generation) includes a
                Touch Bar and can be customized to maximize computing power and
                specifications. The MacBook Pro 15” (4th Generation) has a 15.4”
                diagonal Retina display with a resolution of 2880 x 1800 and is
                available in Space Gray and Silver.
              </Desc>
            </div>
          </Column>
          <Column>
            <img src="https://images.macrumors.com/t/Au-OUIb73hHvx2w8CirAir5bNbM=/1600x/article-new/2013/09/macbook-air-m2-roundup-header.png" />
          </Column>
        </Wrapper>
      </Center>
    </Bg>
  );
}
