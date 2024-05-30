//это глобальный компонент, общий компонент для всех страниц, который будет оборачивать
//все страницы
//children - длчерние компоненты страницы, которые Layout оборачивает

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