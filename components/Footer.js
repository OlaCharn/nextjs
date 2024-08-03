import Heading from "@/components/Heading";
import Socials from "@/components/Socials";

const Footer = ({socials}) => {
    return(
        <footer>
            <Heading  text="" />
            <Socials socials={socials}/>
        </footer>
    )
}
export default Footer;