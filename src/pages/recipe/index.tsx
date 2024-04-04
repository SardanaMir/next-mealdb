import { useRef } from "react";
import Meals from "@/components/Meals";
import useLazyImageObserver from "@/hooks/useLazyImageObserver";
import  {getSeafoodMeals} from '@/api/api'

export const getServerSideProps = async () => {
  try {
    const res = await getSeafoodMeals();
    const data = res.data;
    if (data && data.meals) {
      return {
        props: { meals: data.meals },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default function Recipe({ meals }: any) {
  const imageRefs = meals.map(() => useRef<HTMLImageElement>(null));
  useLazyImageObserver(meals, imageRefs)
  return (
    <Meals meals={meals} imageRefs={imageRefs}/>
  );
}
