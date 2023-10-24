import React from 'react'

const Card = ({card}) => {
    return (
        <div className="card">
            <div className="imageContainer">
                {
                    card.popularity > 10 ? <img src="/assets/crown.png" className="crown" />:'' 
                }
                <img src={card.img} alt="" />
            </div>
            <div>
                <h1>{card.name}</h1>
            </div>
        </div>
    )
}

export default Card