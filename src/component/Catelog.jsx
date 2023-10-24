import React from 'react'
import Card from './Card'
const Catelog = ({catelog}) => {
    return (
        <div className="catelog">
            <h1>{catelog.heading}</h1>
            <div className="cards-main">

                {
                    catelog.cards.map((card,index)=>
                    <Card key={index} card={card}/>
                    )
                }
    
            </div>
        </div>
    )
}

export default Catelog