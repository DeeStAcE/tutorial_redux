// Tutaj zaimplementuj dwie akcje oraz action-creators
// Na koniec odkomentuj ostatnią linię aby wyeksportować odpowienie zmienne.

/*
{
  type: nazwa_akcji
  payload?: ciało_akcji
}
*/

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = (payload) => ({
    type: INCREMENT,
    payload: payload, // payload,
});

const decrement = (payload) => ({
    type: DECREMENT,
    payload, // payload: payload
});


export {INCREMENT, DECREMENT, increment, decrement}