import React from 'react'; 
import './resCard.css'; 

const ResCard = ({ name, date, time, number }) => {
    return (
        <section className='card'>
            <h2>{name}</h2>
            <h5>{date}</h5>
            <h5>{time}</h5>
            <h5>Number of Guests: {number}</h5>
            <button className='cancel-button'>Cancel</button>
        </section>
    );
}

export default ResCard; 