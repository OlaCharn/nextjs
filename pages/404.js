import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";


const Error = () => {

    const router = useRouter();

    useEffect(()=> {
        setTimeout(()=> {
            router.push("/");
        } , 3000)
    }, [router])

    return(
        <>
            <Head>
                <title>Error</title>
            </Head>

            <h1>Этот компонент для обработки ошибки несуществующих страниц</h1>
            <p>ошибка 404</p>
            <p>создаем в папка pages компонент 404.js</p>
            <p>Something is going wrong ... </p>
        </>
        )
    }
export default Error;