import axios from "axios";
import CategoriesContent from "@/components/CategoriesContent";

export const getServerSideProps = async () => {
  try{
    const res = await axios("https://www.themealdb.com/api/json/v1/1/categories.php");
    const data = res.data;
    if(data && data.categories){
      return {
        props: { categories: data.categories },
      };
    }else{
      return {
        notFound: true,
      };
    }
  }catch(error){
    return {
      notFound: true,
    };
  }
};

export default function Categories({categories}:any) {
  return (
    <>
      <CategoriesContent categories={categories}/>
    </>
  );
}
