import Image from "next/image";
import useLazyImageObserver from "@/hooks/useLazyImageObserver";
import styles from "@/styles/Meals.module.scss";

type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

type MealProps = {
  meal: Meal;
};

export default function Meals({ meal }: MealProps) {
  const { imgRef } = useLazyImageObserver()
  return (
    <div className={styles.block}>
      <p>{meal.strMeal}</p>
      <Image
        ref={imgRef}
        src={meal.strMealThumb}
        width={200}
        height={200}
        alt={meal.strMeal}
      />
    </div>
  );
}
