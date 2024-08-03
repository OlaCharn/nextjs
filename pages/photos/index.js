import Heading from "@/components/Heading";
import Head from "next/head"
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async() =>{
    const responce = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");
    const data = await responce.json();

    if(!data){
        return{
            notFound:true,
        }
    }

    return{
        props: {photos: data}
    }
};



const Photos = ( {photos} ) =>{
    return(
        <>
        <Head>
            <title>Photos</title>
        </Head>
        <Heading text="first 10 your fake photos"/>

        <ul>
            {photos && photos.map(({id,title,url})=> (
                <li key={id} > 
                    <Link href={`/photos/${id}`}><p>{title}</p></Link>
                
                    <Image src={url}
                            width={300}
                            height={300}
                            alt="bigPicture"
                    />  
                </li>
                
            ))}
        </ul>

        </>
    )
}
export default Photos;