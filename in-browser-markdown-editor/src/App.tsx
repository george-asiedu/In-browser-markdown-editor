import './App.css'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Slab', serif;
    font-family: 'Roboto Mono', monospace;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }

  h1 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 32px;
    color: 
  }

  h2 {
    font-family: 'Roboto Slab', serif;
    font-weight: 300;
    font-size: 28px;
    color: 
  }

  h3 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 24px;
    color: 
  }

  h4 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 20px;
    color: 
  }

  h5 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 16px;
    color: 
  }

  h6 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 14px;
    color: 
  }

  p {
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 14px;
    color: 
  }

  ol li {
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 14px;
    padding-left: 9px;
  }

  ul li {
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 14px;
    padding-left: 9px;

    &::marker {
      color: #E46643;
      font-size: 6px;
    }
  }

  blockquote {
    display: flex;
    align-items: center;
    margin: 0px;
    padding: 24px 24px 24px 20px;
    width: 90%;
    border-radius: 4px;
    border-left: 4px solid #E46643;
    background-color: ;
  }
  blockquote p {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: ;
  }
  blockquote p a {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: ;
  }
  p code {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ;
  }
  pre {
    margin: 0px;
    padding: 24px 24px 24px 20px;
    width: 90%;
    border-radius: 4px;
    background-color: ;
  }
  pre code {
    white-space: pre-wrap;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ;
  }
`

function App() {

  return (
    <>
    <GlobalStyle />
    </>
  )
}

export default App