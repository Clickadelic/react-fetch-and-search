import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

function SearchFeature({setSearchValue}) {

    const [searchTerm, setSearchTerm] = useState("")

    function handleChange(event){
        setSearchTerm(event.target.value)
    }

    // Kombiniert bzw. setzt "searchValue [State]" == searchTerm
    function runSearch(){
        setSearchValue(searchTerm)
    }

    return (
        <div>
            <TextField id="standard-basic" label="Standard" variant="standard" name="search" placeholder="Search..." onChange={handleChange} />
            <Button onClick={runSearch} variant="contained">Search</Button>
        </div>
    )
}

export default SearchFeature