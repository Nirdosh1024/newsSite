import styled from "styled-components";


export const Wrapper = styled.div`
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 25rem;
    border-radius: 8px;
    overflow: hidden;
    text-decoration: none;
    color: #000;
    padding-bottom: 0.5rem;
    transition: 0.3s;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        div {
            img {
                transform: translate(-50%, -50%) scale(1.1);
            }
        }
    }
`

export const Image = styled.div`
    overflow: hidden;
    margin-bottom: 0.5rem;
    position: relative;
    height: 15rem;
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        transition: 0.7s ease-in-out;
    }
`

export const Title = styled.div`
    h4 {
        font-size: 14px;
        font-family: Roboto, sans-serif;
        font-weight: 700;
        text-align: left;
        padding: 1rem 0.5rem;
    }
`

export const Description = styled.p`
    line-height: 25px; 
    color: #555;
    padding: 0.5rem;
`

export const Details = styled.div`
    padding: 1.25rem 0.5em;
    small {
        font-weight: 700;
        b {
            font-weight: 400;
        }
    }
`

