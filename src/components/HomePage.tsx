import axios from 'axios';

export const getServerSideProps = async () => {
  try{
    const res = await axios("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    console.log('res', res)
    const data = res.data;
    return {
      props: { meals: data.meals },
    };
  }catch(error){
    return{
      notFound: true
    }
  }

};

export default function HomePage() {

  return (
    <h1>HOME</h1>
  );
}
