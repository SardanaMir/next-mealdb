import Image from "next/image";
import styles from "@/styles/categories.module.scss";

export default function CategoriesContent({ categories }: any) {
  return (
    <main className={styles.root}>
      {categories.map(({ idCategory, strCategory, strCategoryThumb }: any) => (
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
