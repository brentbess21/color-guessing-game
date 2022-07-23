import React, {useEffect, useRef, useState} from 'react';

const GameTimer = () => {
    const Ref = useRef(null);
    const [seconds, setSeconds] = React.useState(60);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            console.log('End!!!!');
        }
    });
    return (
        <div className={'gameTimer'}>
            <p>Timer: {seconds}</p>
        </div>
    )
}

export default GameTimer;