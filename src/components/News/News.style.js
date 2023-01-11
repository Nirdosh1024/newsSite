import styled from "styled-components";

export const Wrapper = styled.div`
    background: #272727;
    padding: 1em;
`

export const Title = styled.h1`
    margin: 1rem;
    text-transform: uppercase;
    font-family: sans-serif;
    font-weight: 900;
    font-size: 2.5rem;
    color: #fff;
    @media screen and (max-width: 900px) {
        font-size: 2em;
    }
`

export const Header = styled.div`
    color: #fff;
    background: #CC0000;
    font-size: 4em;
    text-transform: uppercase;
    padding: 1rem 1rem;
    border-radius: 10px;
    @media screen and (max-width: 900px) {
        font-size: 2em;
    }
`

export const Details = styled.div`
    padding: 1.25rem 1.5em 1rem 1.5rem;
    color: #C8C8C8;
    small {
        font-weight: 700;
        b {
            font-weight: 600;
        }
    }
`


export const NewsImage = styled.div`
    height: 50vh;
    background-color: #2c2c2c;
    width: 65%;
    margin: 2rem auto;
    border-radius: 10px;
    div {
        height: 100%;
        width: 60%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        img {
            height: 100%;
            width: 100%;
        }
    }
    @media screen and (max-width: 900px) {     
        width: 90%;
        div {
            width: 90%;
            img {
                width: 90%;
            }
        }
    }
`

export const NewsMaterial = styled.div`
    font-family: sans-serif;
    color: #fff;
    padding: 0.5rem 3rem;
    font-size: 1.5rem;
    line-height: 1.5em;
    text-align: justify;
    p {
        margin: 1rem 0;
    }
`