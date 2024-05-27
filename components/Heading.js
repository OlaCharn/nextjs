
const Heading = ({tag, text}) =>{

    //если tag не задан, то пусть будет заголовк h1
    const Tag = tag || "h1"
    return(
        <>
        <Tag> {text} </Tag>
        </>
    )
}
export default Heading;