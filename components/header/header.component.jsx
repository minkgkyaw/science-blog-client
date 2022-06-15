import Link from "next/link";
import {GrSearch} from 'react-icons/gr'
import { HeaderContainer, Logo } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer className="text-slate-600 font-poppin">
      <Link href="/">
        <Logo className="font-poppin">MM Science Info</Logo>
      </Link>
      {/* search */}
      <div className="search relative">
        <input type="text" name="search" id="search" placeholder=" search here..." className="bg-slate-200 rounded-lg px-2 text-base w-48 h-10 outline-none placeholder:text-slate-500 text-slate-600" />
        <label htmlFor="search" className="text-slate-500 rotate-90 absolute top-3 left-40"><GrSearch size={20} className="text-slate-500" /></label>
      </div>
    </HeaderContainer>
  );
};

export default Header;
