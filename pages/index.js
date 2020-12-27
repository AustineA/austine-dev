import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

export default function Home({ data }) {
  const RealData = data.map((blog) => matter(blog));
  const ListItems = RealData.map((listItem) => listItem.data);

  return (
    <>
      <Head>
        <title>Austine Amah | Senior Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className="wrap first-section">
          <div className="intro-text">
            <p className="large-title">
              <strong>I’m Austine</strong> Amah,
            </p>
            <p>
              A senior software engineer, <br /> Founder at Luna Base and
              currently bootstrapping PaperCloud. <br /> <br />
              Join my email list as I document my journey working with Next.js
              and Ruby on Rails backend.
            </p>

            <div className="cta-holder">
              <span className="btn">Subscribe</span>
            </div>
          </div>
          <div>
            <Image src="/images/headshot.png" width={492} height={492} />
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <ul>
            {ListItems.map((blog, i) => (
              <li key={i}>
                <Link href={`/${blog.slug}`}>
                  <a>{blog.title}</a>
                </Link>
                <p>{blog.description}</p>
                <img src={blog.image} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");
  const blogs = files.filter((fileName) => fileName.endsWith(".md"));

  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });

    return rawContent;
  });

  return {
    props: {
      data: data,
    },
  };
}
