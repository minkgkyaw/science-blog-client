import styled from "styled-components";
import tw from "twin.macro";

export const LargeScreenNav = tw.div`
hidden 
lg:flex 
flex-col 
xl:w-28 
lg:w-32 
justify-center 
items-center 
z-10 
shadow-md
border-r-2
border-gray-200
py-5`;

export const SmallScreenNav = tw.div`
flex 
min-w-full 
lg:hidden 
z-10
px-5 
h-20 
justify-center 
items-center 
shadow-lg
border-t-2
border-gray-200`;

export const MainBlogScreen = tw.div`
flex 
flex-col 
flex-1
min-h-full 
lg:px-20 
md:px-10
px-4`;
