import React from 'react'

import ArticleItem from './ArticleItem'
// Mui ul instead of normal HTML ul
import List from '@mui/material/List';

function ArticleList({ result }) {

    if(result){
        console.log(result.docs)
        const listOfArticles = result.docs.map((article) => {
            return <ArticleItem key={article.id} title={article.title_display} />
        })
        return (
            <List children={listOfArticles} />
        )
    }

}

export default ArticleList