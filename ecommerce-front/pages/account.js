import Button from "@/components/Button";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Input from "@/components/Input";
import ProductBox from "@/components/ProductBox";
import Spinner from "@/components/Spinner";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { RevealWrapper } from "next-reveal";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const ColsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  margin: 40px 0;
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

const WishedProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

export default function AccountPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const { data: session } = useSession();
  const [addressLoaded, setaddressLoaded] = useState(false);
  const [wishedProducts, setWishedProducts] = useState([]);
  const [wishlistLoaded, setwishlistLoaded] = useState(false);
  async function logout() {
    await signOut();
  }

  async function login() {
    await signIn("google");
  }
  function saveAddress() {
    const data = { name, email, city, streetAddress, postalCode, country };
    axios.put("/api/address", data);
  }

  useEffect(() => {
    axios.get("/api/address").then((response) => {
      setName(response.data.name);
      setEmail(response.data.email);
      setCity(response.data.city);
      setCountry(response.data.country);
      setPostalCode(response.data.postalCode);
      setStreetAddress(response.data.streetAddress);
      setaddressLoaded(true);
    });
    axios.get("/api/wishlist").then((response) => {
      setWishedProducts(response.data.map((wp) => wp.product));
      setwishlistLoaded(true);
    });
  }, []);

  function productRemovedFromWishlist(idToRemove) {
    setWishedProducts((products) => {
      return [...products.filter((p) => p._id.toString() !== idToRemove)];
    });
  }

  return (
    <>
      <Header />
      <Center>
        <ColsWrapper>
          <div>
            <RevealWrapper delay={0}>
              <WhiteBox>
                <h2>Wishlist</h2>
                {!wishlistLoaded && <Spinner fullWidth={true} />}
                {wishlistLoaded && (
                  <WishedProductsGrid>
                    {wishedProducts.length > 0 &&
                      wishedProducts.map((wp) => (
                        <ProductBox
                          key={wp._id}
                          {...wp}
                          wished={true}
                          onRemoveFromWishlist={() => {
                            productRemovedFromWishlist;
                          }}
                        />
                      ))}
                    {wishedProducts.length === 0 && (
                      <>
                        <p>Your Wishlist is Empty</p>
                      </>
                    )}
                  </WishedProductsGrid>
                )}
              </WhiteBox>
            </RevealWrapper>
          </div>
          <div>
            <RevealWrapper delay={100}>
              <WhiteBox>
                <h2>Account Details</h2>
                {!addressLoaded && <Spinner fullWidth={true} />}
                {addressLoaded && (
                  <>
                    <Input
                      type="text"
                      placeholder="Name"
                      value={name}
                      name="name"
                      onChange={(ev) => setName(ev.target.value)}
                    />
                    <Input
                      type="text"
                      placeholder="Email"
                      value={email}
                      name="email"
                      onChange={(ev) => setEmail(ev.target.value)}
                    />
                    <CityHolder>
                      <Input
                        type="text"
                        placeholder="City"
                        value={city}
                        name="city"
                        onChange={(ev) => setCity(ev.target.value)}
                      />
                      <Input
                        type="text"
                        placeholder="Postal Code"
                        value={postalCode}
                        name="postalCode"
                        onChange={(ev) => setPostalCode(ev.target.value)}
                      />
                    </CityHolder>
                    <Input
                      type="text"
                      placeholder="Street Address"
                      value={streetAddress}
                      name="streetAddress"
                      onChange={(ev) => setStreetAddress(ev.target.value)}
                    />
                    <Input
                      type="text"
                      placeholder="Country"
                      value={country}
                      name="country"
                      onChange={(ev) => setCountry(ev.target.value)}
                    />

                    <Button black block onClick={saveAddress}>
                      Save
                    </Button>

                    <hr />
                  </>
                )}

                {session && (
                  <Button primary onClick={logout}>
                    LogOut
                  </Button>
                )}
                {!session && (
                  <Button primary onClick={login}>
                    Login
                  </Button>
                )}
              </WhiteBox>
            </RevealWrapper>
          </div>
        </ColsWrapper>
      </Center>
    </>
  );
}
