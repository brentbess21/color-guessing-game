import React, {useState} from 'react';
import './ColorCard.scss';

interface ColorCardProps {
    id: number;
    randomColor: string;
    winnerIndex: number;
}

const ColorCard = (props: ColorCardProps) => {
    const [wrongGuess, setWrongGuess] = useState<boolean>(false);

    function handleClick() {
        if (props.id === props.winnerIndex) {
            console.log('You win!!');
        }
        setWrongGuess(true);
    }

    function renderColor (randomColor : string) : object {
        if(wrongGuess) {
            return {
                backgroundColor: 'rgba(95, 95, 95, 0.5)'
            }
        } else
        return {
            backgroundColor: randomColor
        }
    }


    return (
        <div className={'colorCard'} style={renderColor(props.randomColor)} onClick={handleClick}>
        </div>
    )
}

export default ColorCard;