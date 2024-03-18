import Image from "next/image";
import { GetStaticProps } from "next";
import { useRouter } from "next/navigation";
import styles from "../../styles/mealrecipe.module.scss";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  const data = await res.json();
  console.log(data);

  if (!data || !data.meals) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = data.meals.map((meal) => ({
    params: { id: meal.idMeal.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  console.log(context);
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
  const data = await res.json();
  return {
    props: { meal: data.meals },
  };
};

export default function MealRecipe({ meal }) {
  console.log(meal);
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
