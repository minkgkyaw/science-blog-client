import Link from "next/link";
import { useRouter } from "next/router";
import { VscHome } from "react-icons/vsc";
import { TiHome } from "react-icons/ti";
import {
  RiAccountCircleFill,
  RiAccountCircleLine,
  RiBookFill,
  RiBookLine,
  RiSettings2Line,
} from "react-icons/ri";
import { BsBookmarkStar, BsBookmarkStarFill, BsInfoLg, BsMoonStarsFill } from "react-icons/bs";
import ReactTooltip from 'react-tooltip';

const DesktopNav = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-20 items-center justify-between">
      {/* <ReactTooltip /> */}
      <div className="navigation flex flex-col space-y-8 items-center">
        <Link href={"/"}>
          {router.pathname == "/" ? (
            <i data-tip="home" className="text-violet-500 cursor-pointer p-1 hover:bg-violet-100 hover:shadow-inner rounded-xl">
              <TiHome size={40} />
            </i>
          ) : (
            <i data-tip="home" className="text-violet-400 cursor-pointer  p-1 hover:bg-violet-100 hover:shadow-inner rounded-xl">
              <VscHome size={30}/>
            </i>
          )}
        </Link>
        <Link href={"/posts"}>
          {router.pathname.includes("posts") ? (
            <i className="text-violet-500 cursor-pointer  p-1 hover:bg-violet-100 hover:shadow-inner rounded-xl">
              <RiBookFill size={40} />
            </i>
          ) : (
            <i className="text-violet-400 cursor-pointer  p-1 hover:bg-violet-100 hover:shadow-inner rounded-xl">
              <RiBookLine size={30} />
            </i>
          )}
        </Link>
        <Link href={"/bookmarks"}>
          {router.pathname.includes("bookmarks") ? (
            <i className="text-violet-500 cursor-pointer  p-1 hover:bg-violet-100 hover:shadow-inner rounded-xl">
              <BsBookmarkStarFill size={40} />
            </i>
          ) : (
            <i className="text-violet-400 cursor-pointer  p-1 hover:bg-violet-100 hover:shadow-inner rounded-xl">
              <BsBookmarkStar size={30} />
            </i>
          )}
        </Link>
        <Link href={"/user/profile"}>
          {router.pathname.includes("user") ? (
            <i className="text-violet-500 cursor-pointer  p-1 hover:bg-violet-100 hover:shadow-inner rounded-xl">
              <RiAccountCircleFill size={40} />
            </i>
          ) : (
            <i className="text-violet-400 cursor-pointer  p-1 hover:bg-violet-100 hover:shadow-inner rounded-xl">
              <RiAccountCircleLine size={30} />
            </i>
          )}
        </Link>
      </div>
      <div className="setting flex flex-col space-y-6 items-center">
        <i className="text-indigo-400 cursor-pointer  p-1 hover:bg-blue-100 hover:shadow-inner rounded-xl hover:animate-pulse">
          <BsMoonStarsFill size={30}/>
        </i>
        <i className="text-indigo-400 cursor-pointer hover:animate-spin  p-1 hover:bg-blue-100 hover:shadow-inner rounded-xl">
          <RiSettings2Line size={30}/>
        </i>
        <i className="text-indigo-400 cursor-pointer hover:animate-pulse  p-1 hover:bg-blue-100 hover:shadow-inner rounded-xl">
          <BsInfoLg size={30}/>
        </i>
      </div>
    </div>
  );
};

export default DesktopNav;
