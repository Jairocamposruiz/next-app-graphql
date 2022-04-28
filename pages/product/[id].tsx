import { ProductSummary } from '@components/Cards/ProductSummary';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Layout } from '@components/Layout/Layout';

export const getStaticPaths: GetStaticPaths = async () => {
  const url = process.env.HOST;
  const response = await fetch(`${url}/api/avo`);
  const { data }: TAPIAvoResponse = await response.json();

  const paths = data.map(({ id }) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`http://localhost:3000/api/avo/${ params?.id }`);
  const product = await response.json();

  return {
    props: {
      product,
    },
  };
};

interface Props {
  product: TProduct;
}

const ProductDetail = ({ product }: Props) => {
  return (
    <Layout>
      {product === null ? null : <ProductSummary product={product} />}
    </Layout>
  );
};

export default ProductDetail;
