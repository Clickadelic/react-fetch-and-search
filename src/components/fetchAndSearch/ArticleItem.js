import React from 'react'
import ListItem from '@mui/material/ListItem';

function ArticleItem({title}) {
  return (
    <ListItem sx={{display:'block'}} children={title} />
  )
}

export default ArticleItem