import Layout from "@/components/Layout";
import Image from "next/image";
import Head from "next/head";
import "@/styles/globals.scss";
import logoPic from "../public/logoInsta.png"

const MyApp = ({ Component, pageProps }) => {
  
  return(
    <Layout>
      <Head>
        <title>My NEXT APP</title>
      </Head>   
        <main>
        <Component {...pageProps} />
      </main>
          <Image
          src={logoPic}
          width={300}
          height={300}
          alt="bigPicture"
          placeholder="blur"

          />

    </Layout>

  )
}

export default MyApp;