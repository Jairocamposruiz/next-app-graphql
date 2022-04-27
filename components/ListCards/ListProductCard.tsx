import { ProductCard } from '@components/Cards/ProductCard';

interface Props {
  products: TProduct[];
}

export const ListProductCard = ({ products }: Props) => {

  return (
    <div
      className={`grid grid-cols-2 gap-8 max-w-5xl`}
    >
      {
        products.map((product: TProduct) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      }
    </div>
  );
};
