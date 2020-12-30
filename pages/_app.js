import "../styles/globals.scss";
import Nav from "../components/nav";
import useDarkMode from "../services/useDarkMode";

function MyApp({ Component, pageProps }) {
  useDarkMode();
  return (
    <div className="site-container">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
