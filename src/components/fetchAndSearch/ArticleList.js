import React from 'react'
import ArticleItem from './ArticleItem'


function ArticleList({ result }) {

    if(result){
        const listOfArticles = result.docs.map((article) => {
            return <ArticleItem key={article.id} title={article.title_display} />
        })
        return (
            <div>
                <ul>
                    {listOfArticles}
                </ul>
            </div>
        )
    }
    
}

export default ArticleList