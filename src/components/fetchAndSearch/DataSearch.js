import React, {useState, useEffect} from 'react'
import ArticleList from './ArticleList'
import SearchFeature from './SearchFeature'
import CircularProgress from '@mui/material/CircularProgress'

function DataSearch() {
    // Result variable for React State
    const [result, setResult] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [searchValue, setSearchValue] = useState("DNA")

    // Lint error here
    // async function getData(){
    //   setIsLoading(true)
    //   const response = await fetch(`http://api.plos.org/search?q=title:${searchValue}`)
    //   const data = await response.json()
    //   setResult(data)
    //   setIsLoading(false)
    // }
  
    // Update DOM via useEffect, listen for "searchValue" changes
    useEffect(() => {
      // No Lint error here, see line 13
      async function getData(){
        setIsLoading(true)
        const response = await fetch(`http://api.plos.org/search?q=title:${searchValue}`)
        const data = await response.json()
        setResult(data)
        setIsLoading(false)
      }

      getData()
    }, [searchValue])

    if(isLoading) {
      return(
        <CircularProgress />
      )
    }

    return (
      <div>
        <SearchFeature setSearchValue={setSearchValue} />
        {/* Verschachtelungstiefe hier bestimmen, evtl. schon am Objekt tiefer !! Achtung Verwirrungsgefahr*/}
        <ArticleList result={result.response} />
      </div>
    )
}

export default DataSearch