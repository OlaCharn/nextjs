import Layout from "@/components/Layout";
import Head from "next/head";
import "@/styles/globals.scss";

//здесь я определяю, что Layout будут доступны все свойства объекта , которые хранятся в pageProps
//это нужно для того, чтобы в компонент Footer передать иконки из API

const MyApp = ({ Component, pageProps }) => {

    
  return(
    <Layout {...pageProps}>
      <Head>
        <title>My NEXT APP</title>
      </Head>   
        <main>
        <Component {...pageProps} />
      </main>

    </Layout>

  )
}

export default MyApp;