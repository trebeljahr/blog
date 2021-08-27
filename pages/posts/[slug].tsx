import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import { PostTitle } from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import MoreStories from "../../components/more-stories";

type Props = {
  post: PostType;
  morePosts: PostType[];
};

const ReadMore = ({ posts }: { posts: PostType[] }) => {
  return null;
  {
    /* return <div>{posts.map((post) => post.title)}</div>; */
  }
};

const Post = ({ post, morePosts }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Header />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="postBody mb-32">
            <Head>
              <title>
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostHeader
              subtitle={post.subtitle}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
            {morePosts && <ReadMore posts={morePosts} />}
          </article>
        </>
      )}
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "subtitle",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");
  const morePosts = getAllPosts(["title", "excerpt"]).slice(0, 3);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      morePosts,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
