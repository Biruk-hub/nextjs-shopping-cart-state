import useCart from "../hook/useCart";

type ProductProps = {
  id: string;
  name: string;
  price: number;
};

const Product = ({ id, name, price }: ProductProps) => {
  const { addProductToCart, removeProductFromCart, totalCart, getSingleProductQnt } = useCart();

  const onButtonClick = () => {
    addProductToCart(id);
  };

  return (
    <div className="w-1/2 p-3 flex flex-col bg-blue-200 m-2">
      <h2>Product: {name}</h2>
      <p>Price: {price}</p>
      <p>ID: {id}</p>
      <button
        onClick={onButtonClick}
        className="bg-black text-white w-fit mt-5 p-5"
      >
        AddToCart
      </button>

      <h2> Quantity you selected </h2>
      <div>
        <button
          onClick={() => removeProductFromCart(id)}
          className="bg-black text-white w-fit mt-5 p-5"
        >
          -
        </button>
        <span className="bg-black text-white w-fit mt-5 p-5">
          {getSingleProductQnt(id)}
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

export default Product;
