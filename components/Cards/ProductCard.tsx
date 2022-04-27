import Image from 'next/image';
import Link from 'next/link';

interface Props {
  product: TProduct;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <Link
      href={`/product/${product.id}`}
    >
      <div
        className={ `border-2 border-gray-200 rounded-md w-full cursor-pointer` }>
        <Image
          width={ 333 }
          height={ 333 }
          src={ product.image }
        />
        <div
          className={`p-4 border-t-4 border-gray-200`}
        >
          <h3
            className={`text-xl font-semibold`}
          >{product.name}</h3>
          <p
            className={`text-gray-600 mt-2`}
          >
            {product.price} $
          </p>
        </div>
      </div>
    </Link>
  );
};
