import "../styles/globals.css";
import GlobalStyles from "../components/global/Global.styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
