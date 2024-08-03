import PhotoInfo from "@/components/PhotoInfo"
import Head from "next/head"

//getServerSideProps используем эту команду для SSR 
//SSR - Server Site Rendering - динамический роутинг, при котором при build не формируется
//статичные страницы, а каждый раз при закпросе рендерятся
export const getServerSideProps = async(context)=>{
    //console.log(context)
    const { id } = context.params;
    const responce = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const data = await responce.json()

    if(!data){
        return{
            notFound:true,
        }
    }
    return{
        props:{photo:data}
    }
}

const Photo = ({photo}) =>{
    return(
        <>
        <Head>
            <title>Photo</title>
        </Head>
        <PhotoInfo photo={photo} />

        </>
    )
}
export default Photo