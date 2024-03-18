import Image from "next/image";
import { GetStaticProps } from "next";
import { useRouter } from "next/navigation";
import styles from '../styles/categories.module.scss'

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await res.json();
  return {
    props: { categories: data.categories },
  };
};

export default function Categories({ categories }) {
  return (
    <main className={styles.root}>
      {categories.map(({ idCategory, strCategory, strCategoryThumb }) => (
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
