import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import Layout from "@/components/Layout";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if (!data) {
        return {
        notFound: true,
        }
    }

    return {
        props: { posts: data },
    }
};

const Posts = ({ posts , socials}) => { 
    return (
        <>
        <Head>
            <title>Posts</title>
        </Head>
        <Heading text="Posts list:" />
        <ul>
            {posts && posts.map(({ id, title }) => (
            <li key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
            </li>
            ))}
        </ul>
        </>
    );
};

export default Posts;