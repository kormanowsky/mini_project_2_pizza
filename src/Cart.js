const CART_ITEMS_KEY = "cart_items";
const CART_ITEMS_COUNT_KEY = "cart_items_count";
const CART_TOTAL_KEY = "cart_total";

class PrivateCartAPI {
    static addCount(count) {
        let currentCount = Cart.count();
        currentCount += count;
        window.localStorage.setItem(CART_ITEMS_KEY, currentCount);
    }

    static incrementCount() {
        return this.addCount(1);
    }

    static decrementCount() {
        return this.addCount(-1);
    }

    static addTotal(total) {
        let currentTotal = Cart.total();
        currentTotal += total;
        window.localStorage.setItem(CART_TOTAL_KEY, currentTotal);
    }

    static removeTotal(total) {
        return this.addTotal(-1 * total);
    }
}

class Cart {
    static add(item) {
        return new Promise((resolve, reject) => {
            if (!("price" in item)) {
                return reject({
                    errorText: "Cannot add to card, no .price",
                    errorData: { item },
                });
            }
            let cartId = Math.random() * (10 ** 9 - 10 ** 8 - 1) + 10 ** 8;
            window.localStorage.setItem(
                CART_ITEMS_KEY,
                JSON.stringify(Object.assign(this.items(), { [cartId]: item }))
            );
            PrivateCartAPI.incrementCount();
            PrivateCartAPI.addTotal(item.price);
            resolve(cartId);
        });
    }

    static remove(id) {
        return new Promise((resolve, reject) => {
            let items = this.items();
            if (!(id in items)) {
                return reject({ errorText: "No such ID", errorData: { id } });
            }
            let item = items[id];
            PrivateCartAPI.decrementCount();
            PrivateCartAPI.removeTotal(item.price);
            delete items[id];
            window.localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(items));
            resolve();
        });
    }

    static items() {
        return JSON.parse(window.localStorage.getItem(CART_ITEMS_KEY));
    }

    static count() {
        return parseInt(window.localStorage.getItem(CART_ITEMS_COUNT_KEY));
    }

    static total() {
        return parseInt(window.localStorage.getItem(CART_TOTAL_KEY));
    }
}

export default Cart;
