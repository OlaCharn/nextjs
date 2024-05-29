import Heading from "@/components/Heading";
import styles from "../styles/Home.module.scss"
import Head from "next/head";
import Socials from "@/components/Socials";

//это специальная функция NEXT для API. Обязательно передать сформированный пропс в компонент!!!
export const getStaticProps = async () => {
try {
  const response = await fetch(`${process.env.API_HOST}/socials`);
  const data = await response.json();

  //если данных нет, возвращаем 404
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { socials: data },
  }
} catch {
  return {
    props: { socials: null },
  }
}
};

const Home = ( {socials} ) => {
  return(
    <div className={styles.wrapper}>
        <Head>
            <title>Home</title>
        </Head>

    <Heading text = "from Component Heading"/>
      <h1>Hello World!</h1>
    <Socials socials={socials} />

    
    </div>
  )
}
export default Home;