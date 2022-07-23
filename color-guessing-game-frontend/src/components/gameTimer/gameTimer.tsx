import React, {useEffect, useRef, useState} from 'react';
import {connect} from "react-redux";
import {setGameOver} from "../../state/actions/gameActions";

interface GameTimerStateProps {
    currentGame: Model.Game.Game
}

interface GameTimerDispatchProps {
    setGameOver : ()=> void;
}

type GameTimerProps = GameTimerStateProps & GameTimerDispatchProps;

const GameTimer : React.FC<GameTimerProps> = (props: GameTimerProps) => {
    const Ref = useRef(null);
    const [seconds, setSeconds] = useState<number>(props.currentGame.timer);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            props.setGameOver();
        }
    }, [seconds]);
    return (
        <div className={'gameTimer'}>
            <p>Timer: {seconds}</p>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return({
        currentGame: state.game.currentGame
    })
}

const mapDispatchToProps = {setGameOver}

export default connect(mapStateToProps, mapDispatchToProps)(GameTimer);