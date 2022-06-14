@import url("https://fonts.googleapis.com/css2?family=Lato&family=Playfair+Display&family=Poppins&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  font-family: "lato", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}


::-webkit-scrollbar {
  @apply w-2 bg-slate-200 max-h-4 h-4;
}

::-webkit-scrollbar-thumb {
  @apply rounded bg-gradient-to-b from-yellow-300 via-teal-400 to-pink-500 max-h-3 h-3;
}