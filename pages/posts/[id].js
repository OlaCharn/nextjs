import Head from "next/head";
import PostInfo from "../../components/PostsInfo"

//SSG - Server Static Generation - после команды build будет сгенерировано много страниц для постов.
//т.е. это статичная генерация.
// каждый раз возвращается готовая страница.
//при SSR каждый раз обрабатывается запрос и формируется страница

//getStaticPaths - фунуия, которая определяет, сколько статичных страниц надо генерировать
export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await response.json();

    const paths = data.map(({ id }) => ({
        params: { id: id.toString() }
    }));

    return {
        paths,
        fallback: false, //404 , если ошибка
    }
    };

    //эти статичные страницы наполняем конктентом с плмлщью
    export const getStaticProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    if (!data) {
        return {
        notFound: true,
        }
    }

    return {
        props: { post: data },
    }
    };

    const Post = ({ post }) => (
    <>
        <Head>
        <title>Contact page</title>
        </Head>
        <PostInfo post={post} />
    </>
);

export default Post;