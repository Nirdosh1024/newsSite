import React from "react";

// styles
import { Description, Image, Title, Wrapper, Details } from "./Article.styles";


const Article = ({ image, title, description, published }) => {
    return <>
    <Wrapper>
        <Image>
            <img src={image} alt="" />
        </Image>
        <Title>
            <h4>{title}</h4>
        </Title>
        <Description>
            {description}
        </Description>
        <Details>
            <small>Published At: <b>{published}</b></small>
        </Details>
    </Wrapper>
    </>
}

export default Article;