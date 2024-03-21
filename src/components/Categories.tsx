import Image from "next/image"
import Link from "next/link"
import { useRef } from "react";
import placeholder from "@/assets/img/placeholder.jpg";

export default function Categories({meals}:any){
  return (
    <>
      {meals.map((meal: any) => (
        <div key={meal.idMeal}>
          <p>{meal.strMeal}</p>
          <Link href={`/recipe/${meal.idMeal}`}>
            <Image
              className="lazy-image"
              src=''
              data-src={meal.strMealThumb}
              width={200}
              height={200}
              alt={meal.strMeal}
            />
          </Link>
        </div>
      ))}
    </>
  )
}
