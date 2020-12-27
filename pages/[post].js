import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import renderers from "../services/codeBlock";
import Head from "next/head";

const Post = ({ markdown }) => {
  const { content, data } = JSON.parse(markdown);
  console.log(content);
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Description" content={data.description}></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactMarkdown renderers={renderers} children={content} />
    </>
  );
};

export default Post;

export async function getServerSideProps({ params }) {
  const { post } = params;
  const content = await import(`../content/${post}.md`);
  const data = matter(content.default);

  console.log(data);

  return {
    props: {
      markdown: JSON.stringify(data),
    },
  };
}
