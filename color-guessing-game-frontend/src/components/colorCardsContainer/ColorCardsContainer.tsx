import React, {useState} from 'react';
import './ColorCardsContainer.scss';
import ColorCard from "../colorCard/ColorCard";
import {CardGenerator} from "../../utils/CardGenerator";

interface ColorCardsContainerProps {
    numberOfCards: number;
}

const ColorCardsContainer = (props: ColorCardsContainerProps) => {
    const [wrongGuess, setWrongGuess] = useState<boolean>(false);

    const cardGenerator = new CardGenerator(props.numberOfCards);
    const cardsArray = cardGenerator.generateColorCards();
    const winnerIndex =  Math.floor(Math.random() * cardsArray.length);
    const colorToGuess = cardsArray[winnerIndex].randomColor


    return (
        <div className={'colorCardsContainer'} >
            {cardsArray.map(card => {
                return <ColorCard key={card.id} id={card.id} randomColor={card.randomColor} winnerIndex={winnerIndex} />
            })}
        </div>
    )
}

export default ColorCardsContainer;