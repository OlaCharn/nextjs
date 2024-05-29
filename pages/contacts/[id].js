import Head from "next/head";
import ContactsInfo from "@/components/ContactsInfo";

//getServerSideProps используем эту команду для SSR 
//SSR - Server Site Rendering - динамический роутинг, при котором при build не формируется
//статичные страницы, а каждый раз при закпросе рендерятся

export const getServerSideProps = async (context) => {
    //context - это спец параметр, просмотрев который можно сформировать адрес для responce 
    //когда мы выводим console.log(context), то в терминале видим эти данные!
    /*
    query: { id: '${id}' },
    resolvedUrl: '/contacts/%24%7Bid%7D',
    params: { id: '${id}' },
    locales: undefined,
    locale: undefined,
    defaultLocale: undefined
    */
    //console.log(context)
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    //если данные не пришли с сервера, то возвращается 404.js
    if(!data){
        return{
            notFound: true
        }
    }

    return{
        props: { contact: data},
    }
}


const Contact = ( {contact} ) => {
    return(
        <>
            <Head>
                <title>Contact</title>
            </Head>

            <h1>Olga</h1>
            <p>это путь contacts/contact</p>

            <ContactsInfo contact={contact} />
        </>
        )
    }
export default Contact;