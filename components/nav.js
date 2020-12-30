import Link from "next/link";
import Image from "next/image";
import { useProxy } from "valtio";
import store from "../store/index";

const Nav = () => {
  const snapshot = useProxy(store);

  return (
    <nav>
      <div className="wrap">
        <div className="menu">
          <Link href="/">
            <a className="brand">
              <Image
                src={snapshot.darkMode ? "/logo-light.svg" : "/logo.svg"}
                width={48.25}
                height={41.78}
              />
            </a>
          </Link>
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
