const CART_ITEMS_KEY = "cart_items";
const CART_ITEMS_COUNT_KEY = "cart_items_count";
const CART_TOTAL_KEY = "cart_total";

class PrivateCartAPI {
    static addCount(count) {
        let currentCount = Cart.count;
        currentCount += count;
        window.localStorage.setItem(CART_ITEMS_COUNT_KEY, currentCount);
    }

    static incrementCount() {
        return this.addCount(1);
    }

    static decrementCount() {
        return this.addCount(-1);
    }

    static addTotal(total) {
        let currentTotal = Cart.total;
        currentTotal += total;
        window.localStorage.setItem(CART_TOTAL_KEY, currentTotal);
    }

    static removeTotal(total) {
        return this.addTotal(-1 * total);
    }

    static cartEntryIdById(id) {
        return Cart.items.map((item) => item[0]).indexOf(id);
    }
}

class Cart {
    static get items() {
        let rawItems = window.localStorage.getItem(CART_ITEMS_KEY);
        if (!rawItems) {
            return [];
        }
        return JSON.parse(window.localStorage.getItem(CART_ITEMS_KEY));
    }

    static get count() {
        let rawCount = parseInt(
            window.localStorage.getItem(CART_ITEMS_COUNT_KEY)
        );
        return isNaN(rawCount) ? 0 : rawCount;
    }

    static get total() {
        let rawTotal = parseInt(window.localStorage.getItem(CART_TOTAL_KEY));
        return isNaN(rawTotal) ? 0 : rawTotal;
    }

    static add(item) {
        return new Promise((resolve, reject) => {
            if (!("price" in item)) {
                return reject({
                    errorText: "Cannot add to card, no .price",
                    errorData: { item },
                });
            }
            let items = this.items,
                entryId = PrivateCartAPI.cartEntryIdById(item.id);
            if (entryId === -1) {
                items.push([item.id, item, 1]);
            } else {
                items[entryId][2] += 1;
            }
            window.localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(items));
            PrivateCartAPI.incrementCount();
            PrivateCartAPI.addTotal(item.price);
            resolve();
        });
    }

    static remove(item) {
        return new Promise((resolve, reject) => {
            let items = this.items,
                entryId = PrivateCartAPI.cartEntryIdById(item.id);
            if (entryId === -1) {
                return reject({
                    errorText: "No such item in cart",
                    errorData: { id: item.id },
                });
            }
            items[entryId][2] -= 1;
            items = items.filter((item) => item[2] > 0);
            PrivateCartAPI.decrementCount();
            PrivateCartAPI.removeTotal(item.price);
            window.localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(items));
            resolve();
        });
    }

    static clear() {
        return new Promise((resolve, reject) => {
            window.localStorage.removeItem(CART_ITEMS_KEY);
            window.localStorage.removeItem(CART_TOTAL_KEY);
            window.localStorage.removeItem(CART_ITEMS_COUNT_KEY);
            resolve();
        });
    }
}

export default Cart;
