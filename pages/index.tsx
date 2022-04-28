import { GetStaticProps } from 'next';
import fetch from 'isomorphic-unfetch'

import { Header } from '@components/Header/Header';
import { Layout } from '@components/Layout/Layout';
import { ListProductCard } from '@components/ListCards/ListProductCard';

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/avo');
  const { data: productList }: TAPIAvoResponse = await response.json();

  return {
    props: {
      productList
    }
  }
}

interface Props {
  productList: TProduct[];
}

const Home = ({productList}: Props) => {

  return (
    <Layout>
      <Header />
      <ListProductCard products={productList} />
    </Layout>
  )
}

export default Home;
