import Link from "next/link";
import { styled } from "styled-components";
import { ButtonStyle, StyledButton } from "@/components/Button";

const StyledLink = styled(Link)`
  ${ButtonStyle}
`;

export default function ButtonLink(props) {
  return <StyledLink {...props} />;
}
