import Meals from '@/components/Meals';
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
  const data = res.meals;
  return {
    props:  { meals: data } ,
  };
};

export default function Home( { meals } : HomePageProps) {
  return (
    <div style={{ display: "flex", width: "100vw", flexWrap: "wrap" }}>
      {meals.map((meal: Meal) => (
        <Meals meal={meal} key={meal.idMeal}/>
      ))}
    </div>
  );
}
