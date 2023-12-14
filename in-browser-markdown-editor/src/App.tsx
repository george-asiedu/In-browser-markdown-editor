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
`

function App() {

  return (
    <>
    <GlobalStyle />
    </>
  )
}

export default App