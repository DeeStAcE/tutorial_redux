export const PAUSE = 'PAUSE';
export const INCREASE = 'INCREASE';
export const SAVE = 'SAVE';
export const DELETE = "DELETE"
export const SET = "SET"

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

export const deleteObject = (payload) => ({
    type: DELETE,
    payload,
});

export const setValue = (payload) => ({
    type: SET,
    payload,
});
