import type { NextPage } from "next";
import CartIcon from "../components/cart_icon";
import PageWrapper from "../components/page_wraper";
import Product from "../components/product";
import { ProductData } from "../data/product_data";
import CartProvider from "../provider";

const Home: NextPage = () => {
  const products = ProductData;
  return (
    <CartProvider>
      <PageWrapper>
        <CartIcon />
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </PageWrapper>
    </CartProvider>
  );
};

export default Home;
