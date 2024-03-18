import Image from 'next/image'
import Layout from '@/components/Layout'

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  const data = await res.json();
  return {
    props: { meals: data.meals },
  };
};

export default function Home({ meals }) {
  console.log('Seafood', meals);
  return <h1>Home</h1>;
}
