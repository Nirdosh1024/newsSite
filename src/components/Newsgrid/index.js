import React from "react";

// styles
import { Wrapper } from "./Newsgrid.styles";

// components
import Article from "../Article";


// news
import { newsContent } from "../../NewsContent/newsContent";

import { Link } from "react-router-dom";

const NewsGrid = () => {
    return <>
        <Wrapper>
            {newsContent.map(newsItem => 
            <Link to="news" state={{ from: newsItem.id }} key={newsItem.id}>
                <Article image={newsItem.image} title={newsItem.title} description={newsItem.description} published={newsItem.published}/>
            </Link>
                )}
        </Wrapper>
    </>
}

export default NewsGrid;