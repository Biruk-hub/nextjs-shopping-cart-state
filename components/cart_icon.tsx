import Link from "next/link";
import useCart from "../hook/useCart";

const CartIcon = () => {
  const { totalCart } = useCart();
  return (
    <Link href="/shopping-cart">
      <a>
        <div className="rounded-full w-fit px-4 py-2 shadow-md absolute top-0 right-0">
          Total Items: {totalCart()}
        </div>
      </a>
    </Link>
  );
};

export default CartIcon;
