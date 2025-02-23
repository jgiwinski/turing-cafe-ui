import React from 'react'; 
import ResCard from '../ResCard/ResCard.js'; 
import './reservations.css'; 

const Reservations = ({ reservations, removeRes }) => {
    const resyCards = reservations.map(res => {
        return (
            <ResCard 
                id={res.id}
                key={res.id}
                name={res.name}
                date={res.date}
                time={res.time}
                number={res.number}
                removeRes={removeRes}
            />
        )        
    })

    return (
        <div className='grid'>
            {resyCards}
        </div>
    )
}

export default Reservations; 