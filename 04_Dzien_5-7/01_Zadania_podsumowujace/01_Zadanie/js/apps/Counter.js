import store from '../redux/store';
import {increment, decrement} from '../redux/actions';

const {dispatch, getState, subscribe} = store;

class Counter {
    constructor(rootElement) {
        this.createUI(rootElement);
        this.reduxConnect();
        this.collectRefs();
        this.applyHandlers();
    }

    createUI(rootElement) {
        this.rootElement = rootElement;
        this.rootElement.innerHTML = `
      <div class="card-header">Licznik</div>
      <div class="card-body">
        <h4 class="card-text">Wartość licznika: <span class="badge badge-primary" id="counter-value">0</span></h4>

        <button type="button" class="btn btn-success" id="counter-decrement">-</button>
        <button type="button" class="btn btn-info" id="counter-increment">+</button>
      </div>
    `;
    }

    collectRefs() {
        this.counterValue = this.rootElement.querySelector("#counter-value");
        this.counterDecrement = this.rootElement.querySelector("#counter-decrement");
        this.counterIncrement = this.rootElement.querySelector("#counter-increment");
    }

    reduxConnect() {
        this.unsubscribe = subscribe(() => {
            this.counterValue.innerText = getState().counter;
        })
    }

    applyHandlers() {
        this.counterIncrement.addEventListener('click', (event) => {
            dispatch(increment());
        });
        this.counterDecrement.addEventListener('click', (event) => {
            dispatch(decrement());
        });
    }
}

export default Counter;