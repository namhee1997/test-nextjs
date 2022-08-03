import { GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'
import Link from 'next/link'
import { getPostList } from '@/utils'
import { MainLayout } from '@/components/layout'
import { Box, Container, Divider } from '@mui/material'
import { PostItem } from '@/components/blog'
import { Post } from '@/models'
export interface BlogListPageProps {
	posts: Post[]
}

export default function BlogListPage({ posts }: BlogListPageProps) {

	return (
		<Box>
			<Container>
				<h1>Blog</h1>

				<Box component='ul' sx={{ listStyleType: 'none', p: 0 }} >
					{posts.map((post) => (
						<li key={post.id}>
							<Link href={`/blog/${post.slug}`}>
								<a>
									<PostItem post={post} />
								</a>
							</Link>
							<Divider sx={{ my: 2 }} />
						</li>
					))}
				</Box>
			</Container>
		</Box>
	)
}

BlogListPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
	// server-side
	// build-time

	//convert markdown file  into js object

	const postList = await getPostList();


	return {
		props: {
			posts: postList,
		},
	}
}
