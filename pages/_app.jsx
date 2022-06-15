import GlobalStyles from "../styles/GlobalStyles";
import Header from '../components/header/header.component'
import Footer from "../components/footer/footer.component";
import { LargeScreenNav, MainBlogScreen, SmallScreenNav } from "../components/app/app.styles";
import DesktopNav from "../components/nav/dasktopNav.component";
import MobileNav from "../components/nav/mobileNav.component";
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <LargeScreenNav className="bg-slate-50">
        <DesktopNav/>
      </LargeScreenNav>
      <MainBlogScreen className="z-10 bg-slate-100 lg:32">
        <Header />
        <main className="px-4 md:px-8 lg:px-12 my-2">
          <Component {...pageProps} />
        </main>
        <Footer />
      </MainBlogScreen>
      <SmallScreenNav className="bg-slate-50">
        <MobileNav />
      </SmallScreenNav>
    </>
  );
}

export default MyApp;
