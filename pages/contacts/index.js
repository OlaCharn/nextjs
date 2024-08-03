import Heading from "@/components/Heading";
import Head from "next/head";
import Link from "next/link";

//это специальная функция NEXT для API. Обязательно передать сформированный пропс в компонент!!!
export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    //если данные не пришли с сервера, то возвращается 404.js
    if(!data){
        return{
            notFound: true
        }
    }

    return{
        props: { contacts: data},
    }
}

const Contacts = ( {contacts} ) => {

    return (
        <>
          <Head>
            <title>Contacts</title>
          </Head>
          <Heading text="Contacts list:" />
          <ul>
            {contacts && contacts.map(({ id, name }) => (
              <li key={id}>
                <Link href={`/contacts/${id}`}>{name}</Link>
              </li>
            ))}
          </ul>
        </>
      );
        }
export default Contacts;