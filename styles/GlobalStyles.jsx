// components/GlobalStyles.js
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
::-webkit-scrollbar {
  @apply w-2 bg-slate-200 max-h-4 h-4;
}

::-webkit-scrollbar-thumb {
  @apply rounded bg-gradient-to-b from-yellow-300 via-teal-400 to-pink-500 max-h-3 h-3;
}

  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles