import React from 'react';
import Card from './Card.js';

const CardList = ({ cats }) => {
    const cardComponent = cats.map((user, i) => {
        return (
            <Card
                key={i}
                id={cats[i].id}
                name={cats[i].name}
                email={cats[i].email}
            />
        );
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}
export default CardList;
