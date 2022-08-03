import Head from "next/head";

export interface SeoData {
    title: string,
    description: string,
    url: string,
    thumbnaiUrl: string,
}

export interface SeoProps {
    data: SeoData,
}


export const Seo = ({ data }: SeoProps) => {
    const { title, description, url, thumbnaiUrl } = data;

    return (
        <Head>
            <title>Learn NextJs By NamHee</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={thumbnaiUrl} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={thumbnaiUrl} />
        </Head>
    );
}