import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "@/components/CartContext";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body{
  padding:0;
  background-color: #eee;
  margin:0;
  font-family: 'Roboto', sans-serif;
}
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />

      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
