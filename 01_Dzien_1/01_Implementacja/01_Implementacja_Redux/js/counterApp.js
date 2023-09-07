// Tu dodaj odpowiednie importy (createStore, akcje, reducer)
import {createStore} from "./redux/customStore";
// import { createStore } from "redux";

// akcje
import {increment, decrement} from "./redux/actions/counterActions";

// reducer
import reducers from './redux/reducers/index';
// import reducer from './redux/reducers/counter';

const store = createStore(reducers);

export default function () {
    // Tutaj zaimplementuj aplikację counter wg. opisu zadania
    // W konsoli powinno pojawić się odpowiednio:
    //
    // from subscribe 5
    // from subscribe 3
    // 1

    // Część 1 / 2
    const unsubscribe = store.subscribe(() => {
        console.log(`from subscribe ${store.getState().counter}`);
    });

    store.dispatch(increment(5));
    store.dispatch(decrement(2));

    unsubscribe();

    store.dispatch(decrement(2));

    console.log(store.getState().counter);
}