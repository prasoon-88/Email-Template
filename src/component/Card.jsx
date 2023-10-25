import React from 'react'

const Card = ({ card }) => {
    return (
        <div className="card">
            <div className="imageContainer">
                {
                    card.popularity > 10 ? <img src="/assets/crown.png" className="crown" /> : ''
                }
                <div className="btnContainer">
                    <button className='useThis'>Use this</button>
                </div>
                <img src={card.img} alt="" />
            </div>
            <div>
                <h1 className='cardHeading'>{card.name}</h1>
            </div>
        </div>
    )
}

export default Card