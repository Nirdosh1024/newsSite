import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    li {
        display: inline-block;
        margin: 1em;
        font-size: 1.5em;
        padding: 0.5em 1em;
        background: #ccc;
        border-radius: 3em;
        cursor: pointer;
        transition: 0.1s;
        &:hover {
            transform: scale(1.1);
        }
        @media screen and (max-width: 900px) {
            display: none;
        }
    }
`