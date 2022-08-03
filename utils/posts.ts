import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post } from '@/models';

const BLOG_FOLDER = path.join(process.cwd(), 'blog');


export const getPostList = async (): Promise<Array<Post>> => {
    //read file markdown(md)

    const fileNameList = fs.readdirSync(BLOG_FOLDER);

    const ListPost: Array<Post> = [];

    for (const nameFile of fileNameList) {
        const filePath = path.join(BLOG_FOLDER, nameFile);
        const contentFile = fs.readFileSync(filePath, 'utf8');
        const { data, excerpt, content } = matter(contentFile, { excerpt_separator: '<!-- truncate-->' });
        ListPost.push({
            id: nameFile,
            title: data.title,
            slug: data.slug,
            tagList: data.tags,
            description: excerpt || '',
            publishedDate: data.date,
            author: {
                name: data.author,
                title: data.author_title,
                profileUrl: data.author_url,
                avatarUrl: data.author_image_url,
            },
            mdContent: content,
        });
    }



    return ListPost;
}