import Image from 'next/image';

import { CartItemType, useCartMutations } from '@store/Cart';

interface Props {
  item: CartItemType;
}

export const ItemCart = ({ item }: Props) => {
  const { addToCart, removeFromCart } = useCartMutations();

  const handleAddToCart = () => {
    addToCart(item);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item);
  };

  return (
    <div className={`flex w-full justify-between`}>
      <Image src={item.image} width={180} height={180}/>
      <div
        className={`flex flex-col w-full p-4 justify-center`}
      >
        <h3
          className={`text-xl font-bold mb-2`}
        >{item.name}</h3>
        <p>
          {item.quantity} x {item.price} = {(item.quantity * item.price).toFixed(2)} $
        </p>
      </div>
      <div className={`flex gap-2 items-center`}>
        <button
          onClick={handleRemoveFromCart}
          className={`bg-red-400 h-10 w-10 hover:bg-red-500 active:bg-red-600 text-white font-bold py-2 px-4 rounded`}
        >
          -
        </button>
        <button
          onClick={handleAddToCart}
          className={`bg-green-400 h-10 w-10 hover:bg-green-500 active:bg-green-600 text-white font-bold py-2 px-4 rounded`}
        >
          +
        </button>
      </div>
    </div>
  )
}
