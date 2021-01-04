import Link from "next/link";
import Image from "next/image";
import { useProxy } from "valtio";
import store from "../store/index";
import { useEffect, useRef } from "react";

const Nav = () => {
  const snapshot = useProxy(store);
  const wrapperRef = useRef();
  const mobileMenu = useRef();

  const openMenu = () => {
    mobileMenu.current.style.transform = "translateX(0)";
  };
  const closeMenu = () => {
    mobileMenu.current.style.transform = "translateX(100vw)";
  };

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
          <div className="menu-icon" onClick={openMenu}>
            <Image
              src={snapshot.darkMode ? "/menu.svg" : "/menu-light.svg"}
              width={25}
              height={25}
            />
          </div>
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="mobile-links" ref={mobileMenu}>
            <div className="close-icon" onClick={closeMenu}>
              <Image
                src={snapshot.darkMode ? "/close-light.svg" : "/close.svg"}
                width={20}
                height={20}
              />
            </div>
            <div className="links" ref={wrapperRef}>
              <Link href="/">
                <a onClick={closeMenu}>Home</a>
              </Link>
              <Link href="/about">
                <a onClick={closeMenu}>About</a>
              </Link>
              <Link href="/blog">
                <a onClick={closeMenu}>Blog</a>
              </Link>
              <Link href="/contact">
                <a onClick={closeMenu}>Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
