import Image from 'next/image';
import { useState, ChangeEvent } from 'react';

import { useCartMutations } from '@store/Cart';

interface Props {
  product: TProduct;
}

export const ProductSummary = ({ product }: Props) => {
  const { image, name, sku, price, attributes } = product;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartMutations();


  const onChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const onAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className={`w-full max-w-5xl`}>
      <div
        className={`flex gap-4`}
      >
        <Image
          src={image}
          width={400}
          height={400}
        />
        <div
          className={`flex flex-col justify-center`}
        >
          <h1 className={`text-2xl font-bold mb-4`}>{name}</h1>
          <p className={`text-xl text-gray-600 mb-2`}>{price}$</p>
          <p className={`text-md bg-gray-200 rounded w-40 text-center p-1`}>SKU: {sku}</p>
          <div className={`flex`}>
            <input
              type={'number'}
              min={1}
              value={quantity}
              onChange={onChangeQuantity}
              className={`w-full mt-4 border-y-2 border-l-2 border-gray-200 p-2 rounded-l outline-none focus:border-green-400`}
            />
            <button
              onClick={onAddToCart}
              className={`w-full mt-4 bg-green-400 text-white p-2 rounded-r font-semibold hover:bg-green-500 active:bg-green-600`}
            >Add to cart</button>
          </div>
        </div>
      </div>
      <div>
        <h3
          className={`text-xl font-bold mb-4`}
        >About this avocado</h3>
        <p className={`text-lg text-gray-600 pb-4 mb-4 border-b-2 border-gray-200`}>{attributes.description}</p>
        <table className={`table-auto w-full rounded border-2 border-gray-200`}>
          <thead className={`bg-gray-100`}>
            <tr>
              <th className={`px-4 py-4 text-left`}>Attributes</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`border p-4 w-80`}>Shape</td>
              <td className={`border p-4`}>{attributes.shape}</td>
            </tr>
            <tr>
              <td className={`border p-4 w-80`}>Hardiness</td>
              <td className={`border p-4`}>{attributes.hardiness}</td>
            </tr>
            <tr>
              <td className={`border p-4 w-80`}>Taste</td>
              <td className={`border p-4`}>{attributes.taste}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
