import { Post } from '@/models'
import { getPostList } from '@/utils'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import * as React from 'react'

export interface BlogPageProps {
    post: Post
}

export default function BlogDetailPage({ post }: BlogPageProps) {

    if (!post) return null

    return (
        <div>
            <h1>Blog Detail Page</h1>

            <p>{post.title}</p>
            <p>{post.author?.name}</p>
            <p>{post.description}</p>
            <p>{post.mdContent}</p>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {//laays danh sach cac bai post
    const postList = await getPostList();

    return {
        paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async ( //get ra tungf bai post dua theo slug
    context: GetStaticPropsContext
) => {
    const slug = context.params?.slug
    const postList = await getPostList();

    if (!slug) return { notFound: true }

    const post = postList.find(x => x.slug === slug);
    if (!post) return { notFound: true }


    return {
        props: {
            post,
        },
    }
}
