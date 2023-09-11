/**
 * Napisz HOC implementujący licznik
 *
 * Nie zapomnij wyeksportować!
 * export default withTimer;
 */

import React, {useEffect, useState} from 'react';

// function withTimer(Component) {
//     return class extends React.Component {
//
//         state = {
//             counter: 0,
//         }
//
//         startTimer = () => {
//             this.timer = setInterval(() => {
//                 this.setState(prevState => ({
//                     counter: prevState.counter + 1
//                 }));
//             }, 1000);
//         }
//
//         stopTimer = () => {
//             clearInterval(this.timer);
//         }
//
//         render() {
//             return (
//                 <Component {...this.props} counter={this.state.counter} startTimer={this.startTimer}
//                            stopTimer={this.stopTimer}/>
//             )
//         }
//     }
// }

let timer;

function withTimer(Component) {
    return function (props) {

        const [counter, setCounter] = useState(0);

        const startTimer = () => {
            timer = setInterval(() => {
                setCounter(prev => prev + 1);
            }, 1000);
        }

        const stopTimer = () => {
            clearInterval(timer);
        }

        return (
            <Component {...props} counter={counter} startTimer={startTimer} stopTimer={stopTimer}/>
        )
    }
}

export default withTimer;