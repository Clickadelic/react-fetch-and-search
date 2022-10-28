import React from 'react'

// Objekt = willkürlicher Name
function Location({standort}) {
  return (
    <div>
        
        {standort.street}
        {standort.city}
    </div>
  )
}

export default Location