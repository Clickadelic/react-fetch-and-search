import React, {useState} from 'react'
import Location from './Location'

function Person({name, title, job, location }) {

    const [ noLocation, setNoLocation] = useState(true)

    return (
        <div>
            <h3>{name}</h3>
            <p>{title}</p>
            <p>{job}</p>
            <p>{noLocation && <Location standort={location} />}</p>
        </div>
    )
}

export default Person