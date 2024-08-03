import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children, socials }) =>{
    return(
        <>
        <Header socials={socials} />
            {children}
        <Footer socials={socials} />
        </>
    )
}
export default Layout;