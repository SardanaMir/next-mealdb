import dynamic from 'next/dynamic';
import { getSeafoodMeals } from "@/api/api";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type MealProps = {
  meals: Meal[];
};

const Meals = dynamic(() => import('@/components/Meals'));

export const getServerSideProps = async () => {
  try {
    const res = await getSeafoodMeals();
    const data = res.meals;
    if (data) {
      return {
        props: { meals: data },
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

export default function Recipe({ meals }: MealProps) {
  return (
    <div style={{ display: "flex", width: "100vw", flexWrap: "wrap" }}>
      {meals.map((meal: Meal) => (
        <Meals meal={meal} key={meal.idMeal}/>
      ))}
    </div>
  );
}
