import React from "react";
import withTimer from "../hoc/withTimer";

// Zamień ciało funkcji tak aby renderowała Stopper wg. treści zadania
const Stopper = (props) => {
    return (
        <>
            <button onClick={() => props.startTimer()}>Start</button>
            <button onClick={() => props.stopTimer()}>Stop</button>
            <p>Licznik: {props.counter}</p>
            {
                props.children
            }
        </>
    )
};

// Zamień deklarację komponentu poniżej tak aby korzystał z wczesniej zamiplementowanego HOC withTimer
const StopperWithTimer = withTimer(Stopper);

export {Stopper, StopperWithTimer};