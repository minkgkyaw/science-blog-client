import GlobalStyles from "../styles/GlobalStyles";
import Footer from "../components/footer/footer.component";
import Header from "../components/header/header.component";
import Navigation from "../components/nav/nav.component";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <section className="large_screen_navigation_section">
        <Navigation />
      </section>
      <section className="main_section">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </section>
      <section className="small_screen_navigation_section">
        <Navigation />
      </section>
    </>
  );
}

export default MyApp;
