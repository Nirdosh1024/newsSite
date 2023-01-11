import React from "react";
import { useLocation } from "react-router";

// styles
import { Wrapper, Header, Title, NewsImage, NewsMaterial, Details } from "./News.style";


// news content
import { newsContent } from "../../NewsContent/newsContent";


const News = () => {
    const location = useLocation();
    const { from } = location.state;
    return <>
        <Wrapper>
            <Header>News</Header>
            <Title>
                {newsContent[from].title}
            </Title>
            <NewsImage>
                <div>
                <img src={newsContent[from].image} alt="news related" />
                </div>
            </NewsImage>
            <Details>
                <small>UPDATED: <b>{newsContent[from].published}</b></small>
            </Details>
            <NewsMaterial>
                {newsContent[from].material}
            </NewsMaterial>
        </Wrapper>
    </>
}

export default News;