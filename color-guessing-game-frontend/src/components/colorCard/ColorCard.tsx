import React, {useState} from 'react';
import './ColorCard.scss';
import {connect} from "react-redux";
import {setWinner} from "../../state/actions/gameActions";

interface ColorCardStateProps {
    currentGame: Model.Game.Game;
}

interface ColorCardDispatchProps {
    setWinner: ()=> void;
}

interface ColorCardCustomProps {
    id: number;
    randomColor: string;
}

type ColorCardProps = ColorCardStateProps & ColorCardDispatchProps & ColorCardCustomProps;

const ColorCard = (props: ColorCardProps) => {
    const [wrongGuess, setWrongGuess] = useState<boolean>(false);
    const guessedColor = '#002f5c'

    function handleCardClick() {
        if (props.id === props.currentGame.winningIndex) {
            props.setWinner()
        }
        setWrongGuess(true);
    }

    function renderColor () : object {
        if(wrongGuess) {
            return {
                backgroundColor: guessedColor
            }
        }
        return {
            backgroundColor: props.randomColor
        }
    }

    return (
        <div className={'colorCard'} style={renderColor()} onClick={handleCardClick}>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return ({
        currentGame: state.game.currentGame
    })
}

const mapDispatchToProps= {setWinner}

export default connect(mapStateToProps, mapDispatchToProps) (ColorCard);