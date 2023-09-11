import React from "react";

const ArticlesList = ({articles = [], onArticleRemove}) => (
    <ol>
        {articles.map((title) => <li key={title}>{title}
            <button onClick={() => onArticleRemove(title)}>Usuń</button>
        </li>)}

    </ol>
);

export default ArticlesList;
