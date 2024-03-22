import Image from "next/image";
import axios from "axios";
import styles from "@/styles/MealRecipe.module.scss";

export const getStaticPaths = async () => {
  try{
    const res = await axios("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    const data = res.data;
  
    if (!data || !data.meals) {
      return {
        paths: [],
        fallback: false,
      };
    }
  
    const paths = data.meals.map((meal:any) => ({
      params: { id: meal.idMeal.toString() },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }catch(error){
    return{
      notFound: true
    }
  }

};

export const getStaticProps = async (context: any) => {
  const { id } = context.params;
  const res = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = res.data;
  return {
    props: { meal: data.meals },
  };
};

export default function MealRecipe({ meal }:any) {
  meal = meal[0]
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={200}
          height={200}
        />
      </div>
      <h2 className={styles.title}>{meal.strMeal}</h2>
      <h4>Category: {meal.strCategory}</h4>
      <h4>Country: {meal.strArea}</h4>
      <p>{meal.strInstructions}</p>
    </div>
  );
}
