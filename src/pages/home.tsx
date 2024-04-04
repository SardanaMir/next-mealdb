import { useRef } from 'react';
import Meals from '@/components/Meals';
import axios from 'axios';
import useLazyImageObserver from '@/hooks/useLazyImageObserver';
import { getSeafoodMeals } from '@/api/api';

type Meal ={
  strMeal: string
  strMealThumb: string
  idMeal: string
}
type HomePageProps = {
  meals: Meal[]
}
export const getServerSideProps = async () => {
  const res = await getSeafoodMeals()
  const data:{meals: Meal[]} = res.data;
  return {
    props:  { meals: data } ,
  };
};

export default function Home( { meals } : HomePageProps) {
  // const imageRefs = meals.map(() => useRef<HTMLImageElement>(null));
  // useLazyImageObserver(meals)
  console.log(meals)
  return (
    // <Meals meals={meals} />
    <></>
  );
}
