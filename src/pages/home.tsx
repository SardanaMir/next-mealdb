import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Meals from '@/components/Meals';
import axios from 'axios';
import useLazyImageObserver from '@/hooks/useLazyImageObserver';

export const getServerSideProps = async () => {
  const res = await axios("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
  const data = res.data;
  return {
    props: { meals: data.meals },
  };
};

export default function Home({ meals }:any) {
  const imageRefs = meals.map(() => useRef<HTMLImageElement>(null));
  useLazyImageObserver(meals, imageRefs)
  return (
    <Meals meals={meals} imageRefs={imageRefs}/>
  );
}
