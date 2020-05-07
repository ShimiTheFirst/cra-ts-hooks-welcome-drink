import { createGlobalStyle } from 'styled-components/macro'

// *** Defining Global CSS styles
export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  
  body {
    margin: 0;
    padding: 0;

    font-family: sans-serif;
    line-height: 1.2;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	  -webkit-overflow-scrolling : touch;
    text-rendering: optimizeLegibility;

    background: ${({ theme }) => theme.appBg};
    color: ${({ theme }) => theme.appText};
  }

  /* the root div React app is mounted into*/
  #root {
    position: fixed;
    top: 0px;
    bottom: 0px;
    left:0px;
    right: 0px;

    overflow: auto;

    @media print {
      position: relative;
      height: fit-content;
    }
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }

  p {
    line-height: 1.2;
  }

  input, textarea {
    -webkit-appearance: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0px;
  }

  button {
    border: 0px;  
    cursor: pointer;
    -webkit-appearance: none;
    font-family: sans-serif;
  }

  pre {
    white-space: normal;
  }
`
