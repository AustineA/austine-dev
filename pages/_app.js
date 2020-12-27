import "../styles/globals.scss";
import Nav from "../components/nav";

function MyApp({ Component, pageProps }) {
  return (
    <div className="site-container">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
