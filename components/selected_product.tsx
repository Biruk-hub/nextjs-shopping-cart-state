import useCart from "../hook/useCart";

type SelectedProductProps = {
  id: string;
};

const SelectedProduct = ({ id }: SelectedProductProps) => {
  const { totalCart, addProductToCart, removeProductFromCart } = useCart();

  return (
    <div className="w-1/2 p-3 flex flex-col bg-blue-200 m-2">
      <h2 className="line-through">ID: {id}</h2>
      <div>
        <button
          onClick={() => removeProductFromCart(id)}
          className="bg-black text-white w-fit mt-5 p-5"
        >
          -
        </button>
        <span className="bg-black text-white w-fit mt-5 p-5">
          {totalCart()}
        </span>
        <button
          onClick={() => addProductToCart(id)}
          className="bg-black text-white w-fit mt-5 p-5"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SelectedProduct;
