import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle` 
  * {
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;

    }
    
    body {
        font-familly: sans-serif;
        background: #000;
        }
    
    html, body, root# {
        height: 100%;
    }    
    button {
        cursor : pointer;
        background: blue;
        border: none;
        color: #fff;
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700

    }
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
`;
    export const Container = styled.section`
      max-width: 360px;
      background: #fff ;
      margin: 30px auto;
      padding: 30px;
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(3, 3, 3, 3);

    `