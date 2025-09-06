import React from 'react'
import { CardData } from '../../helpers/dummyData'
import '../cards/Cards.css'

function Cards() {
    return (
            <div className="cards-container">
                {CardData.map((card) => (
                    <div className="feature-card" key={card.id}>
                        <img className="icon" src={card.img}   />
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                    </div>
                ))}
            </div>

    )
}

export default Cards