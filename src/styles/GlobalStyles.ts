// CSS in TypeScript

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0 ;
        padding: 0;
        box-sizing: border-box;
        
    }

    body {
        background-color: #101620 ;
    }

    body , button , input {
        font-family: "Arvo", serif;
    }


    button  { 
        cursor: pointer;
    }

    // <uniquifier>: Use a uniquifier for the class name
// <weight>: Use a value from 100 to 900

.montserrat-uniquifier {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
}

`