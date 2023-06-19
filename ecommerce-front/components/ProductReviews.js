import { styled } from "styled-components";

const Title = styled.h2`
  font-size: 1.2rem;
`;
const SubTitle = styled.h3`
  font-size: 1rem;
`;

export default function ProductReviews({ product }) {
  return (
    <div>
      <Title>Reviews</Title>
      <SubTitle>Add Reviews</SubTitle>
      <SubTitle>All Reviews</SubTitle>
    </div>
  );
}
