import store from '../redux/store';
import {addProduct, changeOrder} from '../redux/actions';

const {dispatch, getState, subscribe} = store;

class ShoppingList {
    constructor(rootElement) {
        this.createUI(rootElement);
        this.reduxConnect();
        this.collectRefs();
        this.applyHandlers();
    }

    createUI(rootElement) {
        this.rootElement = rootElement;
        this.rootElement.innerHTML = `
      <div class="card-header">Lista zakupów</div>
      <div class="card-body">
        <form>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Produkt..." />
            <div class="input-group-append">
              <button class="btn btn-outline-primary" type="button" id="shop-add">Dodaj</button>
            </div>
          </div>
        </form>

        <ul class="list-group mt-3" id="shop-list">
        </ul>
      </div>
    `;
    }

    collectRefs() {
        this.form = this.rootElement.querySelector("form");
        this.shopList = this.rootElement.querySelector("#shop-list");
    }

    reduxConnect() {
        this.unsubscribe = subscribe(() => {
            this.shopList.innerHTML = '';

            getState().products.forEach((product, index) => {
                const productElement = document.createElement('li');
                productElement.innerText = product;

                const buttonUp = document.createElement('button');
                const buttonDown = document.createElement('button');

                buttonUp.innerText = 'up';
                buttonDown.innerText = 'down';

                productElement.appendChild(buttonUp);
                productElement.appendChild(buttonDown);

                buttonUp.addEventListener('click', (event) => {
                    dispatch(changeOrder({
                        index,
                        type: 'up'
                    }));
                });

                buttonDown.addEventListener('click', (event) => {
                    dispatch(changeOrder({
                        index,
                        type: 'down'
                    }));
                });

                this.shopList.appendChild(productElement);
            })
        })
    }

    applyHandlers() {
        const addButton = this.form.elements['shop-add'];

        addButton.addEventListener('click', (event) => {
            event.preventDefault();

            const inputValue = this.form.elements[0].value;

            dispatch(addProduct(inputValue));

            this.form.elements[0].value = '';
        })
    }
}

export default ShoppingList;