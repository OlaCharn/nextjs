import Heading from "@/components/Heading";
import Head from "next/head";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState , useEffect} from "react";

//это специальная функция NEXT для API. Обязательно передать сформированный пропс в компонент!!!
export const getStaticProps = async () => {
    const responce = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await responce.json();

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

    //ЭТО РЕАКТ БЕЗ NEXT.js
    //const [contacts, setContacts] = useState(null);
    /*
    Это для полноценного реакта, но когда мы хотим посмотреть все эти данные через
    консоль-> Network, то мы не видим возвращаемых данных. 
    Для того, чтобы их видеть, мы 
    переписываем все на next.js
    useEffect(()=>{
        const fetchData = async() => {
            const responce = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await responce.json();
            setContacts(data);
            console.log(data)
        }
        fetchData(); // Вызываем функцию fetchData здесь
    },[])
    */

    return(
        <>
            <Head>
                <title>contacts</title>
            </Head>

            <h1>Мы создали путь</h1>
            <p>это путь contacts/contact для того, чтобы не было ошибки 404 при переходе localhost3000/contacts мы создали в папке contacts файл index.js и в нем лежит эта разметка</p>
            <h2>
                а тут сейчас будет API из JSONPlaceholder.
            </h2>

            <Heading  text= "Contacts list:" />
            <ul> {contacts && contacts.map(({id, name}) =>(
            <li key={id} >
                <Link href={"/contacts/${id} "} > {name} </Link> 
            </li> 
            ))}
            </ul>


        </>
        )
    }
export default Contacts;