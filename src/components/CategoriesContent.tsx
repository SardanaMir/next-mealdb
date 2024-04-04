import Image from "next/image";
import styles from "@/styles/categories.module.scss";

type TCategory = {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
};
type CategoriesProps = {
  categories: TCategory[]
}

export default function CategoriesContent({ categories }: CategoriesProps) {
  return (
    <main className={styles.root}>
      {categories.map(({idCategory, strCategory, strCategoryDescription, strCategoryThumb}) => (
        <div className={styles.block} key={idCategory}>
          <Image
            className={styles.image}
            src={strCategoryThumb}
            alt={strCategory}
            width={200}
            height={200}
          />
          <p className={styles.title}>{strCategory}</p>
        </div>
      ))}
    </main>
  );
}
