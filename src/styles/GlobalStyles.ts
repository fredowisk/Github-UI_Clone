import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  min-height: 100%;
  background: var(--primary);
}

*, button, input {
  border: 0;
  background: none;
  font-family: --apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,SegoeUI Emoji;
  color: var(--black);
}

ul {
  list-style: none;
}

:root {
${props => {
  const theme = props.theme;
  let append = '';
  Object.entries(theme).forEach(([name, value]) => {
    append +=`--${name}: ${value};`;
  })

  return append;
}}
}
`;
