import { ProductCard } from '@components/Cards/ProductCard';

interface Props {
  products: TProduct[];
}

export const ListProductCard = ({ products }: Props) => {

  return (
    <div
      className={`grid grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 max-w-5xl`}
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
