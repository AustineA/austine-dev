import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav>
      <div className="wrap">
        <div className="menu">
          <Link href="/">
            <a>
              <Image src="/logo.svg" width={48.25} height={41.78} />
            </a>
          </Link>
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="">About</Link>
            <Link href="">Blog</Link>
            <Link href="">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
