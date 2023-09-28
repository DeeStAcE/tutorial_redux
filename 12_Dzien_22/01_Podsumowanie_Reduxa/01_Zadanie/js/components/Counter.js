import React, {useEffect} from "react";

const Counter = ({counter, isCounting, initCounter, onStartCounter, onPause, onSetValue}) => {

    useEffect(() => {
        onSetValue(initCounter || counter)
    }, []);

    const handleStart = () => {
        onStartCounter()
    }

    const handleStop = () => {
        onPause()
    }

    return (
        <div>
            <button onClick={handleStart} disabled={isCounting}>START</button>
            <button onClick={handleStop} disabled={!isCounting}>STOP</button>
            <h1>{counter}</h1>
        </div>
    )
}

export default Counter