import CategoriesContent from "@/components/CategoriesContent";
import { getAllCategories } from "@/api/api";

type TCategory = {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
};
type CategoriesProps = {
  categories: TCategory[]
}

export const getServerSideProps = async () => {
  try {
    const res = await getAllCategories();
    const data = res.data;
    if (data && data.categories) {
      return {
        props: { categories: data.categories },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default function Categories({ categories }: CategoriesProps) {
  return (
    <>
      <CategoriesContent categories={categories} />
    </>
  );
}
