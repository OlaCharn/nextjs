const { default: Heading } = require("./Heading");

const ContactsInfo = ( {contacts} ) =>{

    const {name, email, adress} = contacts || {};
    const {street, suite, city, zipcode} = adress || {};

    if (!contacts){
        return <Heading tag="h3" text="Empty contact" />
    }
    return(
        <>
        <Heading tag="h3" text={name} />
        <div> 
            <strong>Email:</strong>
            {email}
        </div>
        <div> 
            <strong>Adress:</strong>
            {`${street}, ${suite}, ${city}, ${zipcode}`}
        </div>

        </>
    )
}
export default ContactsInfo;