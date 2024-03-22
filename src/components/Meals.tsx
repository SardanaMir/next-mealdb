import Image from "next/image";
import Link from "next/link";
import {useRef} from 'react'
import placeholder from "@/assets/img/placeholder.jpg";
import styles from "@/styles/Meals.module.scss";

export default function Meals({ meals, imageRefs }: any) {
  return (
    <div className={styles.root}>
      {meals.map((meal: any, index: number) => (
        <div className={styles.block} key={meal.idMeal}>
          <p>{meal.strMeal}</p>
          <Link href={`/recipe/${meal.idMeal}`}>
            <Image
              ref={imageRefs[index]}
              className="lazy-image"
              src=""
              data-src={meal.strMealThumb}
              width={200}
              height={200}
              alt={meal.strMeal}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
