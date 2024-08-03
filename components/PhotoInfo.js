import Heading from "@/components/Heading"
import Image from "next/image"

const PhotoInfo = ({photo}) =>{
    const {title, url} = photo || {}

    if (!photo) {
        return <Heading tag="h3" text="Empty contact" />
    }


    return(
    <>
        <Heading text="here your photo"/>
        <div>
            <p> {title} </p>

            <Image src={url}
                    width={300}
                    height={300}
                    alt="bigPicture"
            />  
        </div>

    </>
)
}
export default PhotoInfo;