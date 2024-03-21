import { useEffect } from "react";
import axios from "axios";
import Categories from "@/components/Categories";

export const getServerSideProps = async () => {
  try {
    const res = await axios("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    const data = res.data;
    if (data && data.meals) {
      return {
        props: { meals: data.meals },
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

export default function Recipe({ meals }: any) {
  useEffect(() => {
    const options = {
      threshold: 0.5,
    };
    const imageObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement;
        image.src = image.dataset.src as string;
        imageObserver.unobserve(image);
      }
    }, options);

    document.querySelectorAll<HTMLImageElement>(".lazy-image").forEach((img) => {
        imageObserver.observe(img);
      });

    return () => {
      imageObserver.disconnect();
    };
  }, []);
  return (
    <Categories meals={meals}/>
  );
}
