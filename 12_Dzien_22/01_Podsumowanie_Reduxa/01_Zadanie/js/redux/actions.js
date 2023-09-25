export const PAUSE = 'PAUSE';
export const INCREASE = 'INCREASE';
export const SAVE = 'SAVE';

let interval;

export const startCounter = () => (dispatch) => {

    interval = setInterval(() => {
        dispatch(increase());
    }, 1000);

}

export const pause = () => {
    clearInterval(interval);

    return {
        type: PAUSE,
    }
}

export const increase = () => ({
    type: INCREASE
});

export const save = (payload) => ({
    type: SAVE,
    payload,
});