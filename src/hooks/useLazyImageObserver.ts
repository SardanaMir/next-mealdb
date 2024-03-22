import { useEffect } from "react";

export default function useLazyImageObserver(meals: any, imageRefs: any) {
  useEffect(() => {
    const options = {
      threshold: 0.5,
    };
    const imageObservers = imageRefs.map(() => {
      return new IntersectionObserver(([entry], observer) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          image.src = image.dataset.src as string;
          observer.unobserve(image);
        }
      }, options);
    });
    imageRefs.forEach((imageRef: any, index: number) => {
      if (imageRef.current) {
        imageObservers[index].observe(imageRef.current);
      }
    });
    return () => {
      imageRefs.forEach((imageRef: any, index: number) => {
        if (imageRef.current) {
          imageObservers[index].disconnect();
        }
      });
    };
  }, [meals]);
}
