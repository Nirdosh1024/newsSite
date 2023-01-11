import styled from "styled-components";


export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    justify-content: center;
    justify-items: center; 
    max-width: 1100px;
    margin: 0 auto;
    padding: 2.5rem;
    @media screen and (max-width: 1330px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`