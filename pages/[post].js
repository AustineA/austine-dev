import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import renderers from "../services/codeBlock";

const Post = ({ data }) => {
  const post = JSON.parse(data);
  const content = post.content;
  console.log(content);
  return (
    <>
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
      data: JSON.stringify(data),
    },
  };
}
