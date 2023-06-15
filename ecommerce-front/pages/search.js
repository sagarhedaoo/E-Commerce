import Center from "@/components/Center";
import Header from "@/components/Header";
import Input from "@/components/Input";
import ProductsGrid from "@/components/ProductsGrid";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { debounce } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const SerachInput = styled(Input)`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1.4rem;
`;

const InputWrapper = styled.div`
  position: sticky;
  top: 68px;
  margin: 25px 0;
  padding: 5px 0;
  background-color: #eeeeeeaa;
`;

export default function SearchPage() {
  const [phrase, setPhrase] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const deboucedSearch = useCallback(
    debounce((phrase) => searchProducts(phrase), 500),
    []
  );
  useEffect(() => {
    if (phrase.length > 0) {
      //search
      setIsLoading(true);
      deboucedSearch(phrase);
    } else {
      setProducts([]);
    }
  }, [phrase]);

  function searchProducts(phrase) {
    axios
      .get("/api/products?phrase=" + encodeURIComponent(phrase))
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      });
  }
  return (
    <>
      <Header />
      <Center>
        <InputWrapper>
          <SerachInput
            value={phrase}
            autoFocus
            onChange={(ev) => setPhrase(ev.target.value)}
            placeholder="Search for Products..."
          />
        </InputWrapper>

        {!isLoading && phrase !== "" && products.length === 0 && (
          <h2>No Products found for your query "{phrase}"</h2>
        )}
        {!isLoading && products.length > 0 && (
          <ProductsGrid products={products} />
        )}
        {isLoading && <Spinner fullWidth={true} />}
      </Center>
    </>
  );
}
