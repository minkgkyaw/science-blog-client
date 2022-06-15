import tw from "twin.macro";

export const LargeScreenNav = tw.div`
hidden 
lg:flex 
flex-col  
lg:w-24 
justify-center 
items-center 
z-20 
shadow-md
border-r-2
border-gray-200
py-5`;

export const SmallScreenNav = tw.div`
flex 
min-w-full 
lg:hidden 
z-20
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
min-h-full`;
