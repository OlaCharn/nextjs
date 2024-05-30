import Heading from "@/components/Heading";
import styles from "../styles/Home.module.scss"
import Head from "next/head";
import Image from "next/image";
import logoPic from "../public/90.png"


//это специальная функция NEXT для API. Обязательно передать сформированный пропс в компонент!!!
//тут я получаю на уровне страницы props.socials *важно, т.к. getStaticProps работает только на уровне страниц, а не компонентов
//и передаю в компонент Layout объект socials
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

    <Heading text = ""/>
      <h1>My NEXT.js Application with API jsonplaceholder</h1>
      <Image
          src={logoPic}
          width={300}
          height={300}
          alt="bigPicture"
          placeholder="blur"

          />

    
    </div>
  )
}
export default Home;