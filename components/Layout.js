//это глобальный компонент, общий компонент для всех страниц, который будет оборачивать
//все страницы
//children - длчерние компоненты страницы, которые Layout оборачивает

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) =>{
    return(
        <>
        <Header/>
            {children}
        <Footer/>
        </>
    )
}
export default Layout;