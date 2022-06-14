import GlobalStyles from "../styles/GlobalStyles";
import Footer from "../components/footer/footer.component";
import Header from "../components/header/header.component";
import Navigation from "../components/nav/nav.component";
import { LargeScreenNav, MainBlogScreen, SmallScreenNav } from "../components/app/app.styles";
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <LargeScreenNav className="bg-slate-50">
        <Navigation />
      </LargeScreenNav>
      <MainBlogScreen className="-z-10 bg-slate-100 lg:32">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </MainBlogScreen>
      <SmallScreenNav className="bg-slate-50">
        <Navigation />
      </SmallScreenNav>
    </>
  );
}

export default MyApp;
