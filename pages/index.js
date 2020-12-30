import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { useProxy } from "valtio";
import store from "../store/index";

export default function Home({ data }) {
  const RealData = data.map((blog) => matter(blog));
  const ListItems = RealData.map((listItem) => listItem.data);
  const snapshot = useProxy(store);

  return (
    <>
      <Head>
        <title>Austine Amah | Senior Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="section-one">
        <div className="wrap">
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
            <Image
              src={
                snapshot.darkMode
                  ? "/images/headshot-light.png"
                  : "/images/headshot.png"
              }
              width={492}
              height={492}
            />
          </div>
        </div>
      </section>
      <section className="section-two">
        <div className="wrap">
          <div>
            <Image
              src="/images/ruby-intro.png"
              width={472 / 1.5}
              height={566 / 1.5}
            />
          </div>

          <div className="book-text">
            <p className="sub-title">
              <strong>
                Introduction To Ruby For <br /> Javascript Developers.
              </strong>
            </p>
            <p>
              Vestibulum id ligula porta felis euismod semper. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas
              eget quam.
            </p>

            <div className="cta-holder">
              <span className="btn">Get It For FREE</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-three">
        <div className="wrap">
          <p className="large-title">
            <strong>
              <span className="underline">The B</span>log
            </strong>
          </p>
        </div>

        <div className="blog">
          <ul className="latest">
            {ListItems.map((blog, i) => (
              <li key={i}>
                <Image src={blog.image} width={389} height={240} />
                <Link href={`/${blog.slug}`}>
                  <a className="post-title">{blog.title}</a>
                </Link>
                <p>{blog.description}</p>
                <Link href={`/${blog.slug}`}>
                  <a className="reading-link">CONTINUE READING...</a>
                </Link>
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
