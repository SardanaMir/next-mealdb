import axios from "axios";

type SeafoodMeal ={
  strMeal: string
  strMealThumb: string
  idMeal: string
}
type SeafoodMealsProps = {
  meals: SeafoodMeal[]
}

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
  strCreativeCommonsConfirmed: string | null
  dateModified: string | null
};
type MealProps = {
  meal: Meal[]
}
type TCategory = {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
};
type CategoriesProps = {
  categories: TCategory[]
}
export const getSeafoodMeals = async () => {
  const res = await axios.get<{ data: SeafoodMealsProps}>("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
  return res.data; 
};

export const getAllCategories = async () => {
    const res = await axios.get<{data:CategoriesProps}>("https://www.themealdb.com/api/json/v1/1/categories.php");
    return res.data;
  };

  export const getMealData = async (id:string) => {
    const res = await axios.get<{data: MealProps}>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    return res.data;
  };
