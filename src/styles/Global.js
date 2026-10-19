import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
  --primary: #F7F9FC;
  --secondary: #15181C;
  --gray: #D9D9D9;
  --blue: #4766FF;
  --white: #FFF;
}
  body{
  background-color: var(--primary);
  color: var(--secondary);
  font-size: 1.2rem;
  font-family: 'Dosis', sans-serif;
  font-weight: 400;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
`