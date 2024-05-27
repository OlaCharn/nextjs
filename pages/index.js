import Heading from "@/components/Heading";
import styles from "../styles/Home.module.scss"
import Head from "next/head";


const Home = () => {
  return(
    <div className={styles.wrapper}>
        <Head>
            <title>Home</title>
        </Head>

    <Heading text = "from Component Heading"/>
      <h1>Hello World!</h1>
    </div>
  )
}
export default Home;