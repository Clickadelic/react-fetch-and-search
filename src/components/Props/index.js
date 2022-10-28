import React from 'react'
import Person from './Person'

function Props() {
    // Array mit Objekten = Datensätzen
    const myArray = [

        {name: "Dennis", title: "Developer", job: "Webdeveloper", location: {street: "Dönerweg", city: "Hamm"}},
        {name: "Nader", title: "Backend-Engineer", job: "Webdeveloper", location: {street: "Logistikstraße", city: "Hamburg"}},
        {name: "Tobias", title: "Frontend-Engineer", job: "Webdeveloper", location: {street: "Haupstraße 7", city: "Schürdt"}}

    ]

    const personsList = myArray.map((person, index) => {
        return <Person key={index} name={person.name} title={person.title} job={person.job} location={person.location}/>
    })

    return(
        <div style={{marginTop: "3rem"}}>
            {personsList}
        </div>
    )
}

export default Props