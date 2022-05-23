import { useContext } from "react";
import { CartContext } from "../../provider";
import PageWrapper from "../../components/page_wraper";
// import useCart from "../../hook/useCart";
import SelectedProduct from "../../components/selected_product";

const ShoppingCart = () => {
  //   const { getCartItems } = useCart();
  const { cartItems } = useContext<any>(CartContext);
  console.log(cartItems);
  return (
    <PageWrapper>
      {/* {cartItems.map((item) => {
                return <SelectedProduct key={item.id} {...item} />;
            })} */}
    </PageWrapper>
  );
};

export default ShoppingCart;
