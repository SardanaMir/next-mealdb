import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  const data = await res.json();
  return {
    props: { meals: data.meals },
  };
};

export default function Home({ meals }) {
  console.log("Seafood", meals);
  return (
    <>
      {meals.map((meal) => (
        <div key={meal.idMeal}>
          <p>{meal.strMeal}</p>
          <Link href={`/recipe/${meal.idMeal}`}>
            <Image src={meal.strMealThumb} width={200} height={200} alt={meal.strMeal} />
          </Link>
        </div>
      ))}
    </>
  );
}
