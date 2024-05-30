import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Navbar.module.scss"

//когда у нас большие проекты, то формируем переменную с данными
const navigation = [
    {id:1, title: "Home", path: "/"},
    {id:4, title: "Photos", path: "/photos"},
    {id:2, title: "Posts", path: "/posts"},
    {id:3, title: "Contacts", path: "/contacts"}

]
//таким образом мы можем заменить статичную разметку страницы
// вот эту:
/*
return(
    <div className={styles.nav}>
        <div className={styles.logo}>
            webdev
        </div>
        <div className={styles.links}>
            <Link href="/" >Home</Link>
            <Link href="/posts" >Posts</Link>
            <Link href="/contcts">Contacts</Link>
        </div>

    </div>
)
*/
//на map - смотри внизу!

const Navbar = () =>{

    //из хука import { useRouter } from "next/router"
    //чтобы содержал путь текущей страницы
    //для того, чтобы подсвечивалось активная ссылка
    const {pathname} = useRouter();

    return(
        <div className={styles.nav}>
            <div className={styles.logo}>
                <Image src="/logoInsta.png" width={50} height={50} alt="logo" />
            </div>
            <div className={styles.links}>
                {navigation.map(({id, title, path}) => (
                    <Link key={id} href={path} className={pathname === path ? styles.active : null}  >{title}</Link>
                ))}
            </div>

        </div>
    )
}
export default Navbar