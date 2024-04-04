import Image from "next/image";
import styles from "@/styles/MealRecipe.module.scss";
import { getMealData, getSeafoodMeals } from "@/api/api";

type Meal = Record<`strIngredient${number}` | `strMeasure${number}`, string> & {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strSource: string;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
};

type SeafoodMeal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

type ContextProps = {
  params: { id: string };
  locales: undefined;
  locale: undefined;
  defaultLocale: undefined;
};
export const getStaticPaths = async () => {
  try {
    const { data } = await getSeafoodMeals();

    if (!data || !data.meals) {
      return {
        paths: [],
        fallback: false,
      };
    }
    const paths = data.meals.map((meal: SeafoodMeal) => ({
      params: { id: meal.idMeal.toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticProps = async (context: ContextProps) => {
  const { id } = context.params;
  const res = await getMealData(id);
  const { data } = res;
  return {
    props: { meal: data.meal[0] },
  };
};

export default function MealRecipe(meal: Meal) {
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
