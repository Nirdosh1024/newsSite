import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        user-select: none;
    }
    body {
        font-family: sans-serif;
        /* padding: 0 2em; */
        height: 100vh;
    }
    @media screen and (max-width: 1330px) {
        font-size: 14px;
    }
`