import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList() {
    const articles = blogData.posts

    const articleAry = articles.map((article) => {
        return <article key={article.id}>
                <h3>{article.title}</h3>
                <small>{article.date}</small>
                <p>{article.preview}</p>
            </article>
    });
    return (
        <main>
            {articleAry}
        </main>
    )
}


export default ArticleList;