class Order {
  static generateId() {
    return parseInt(Math.random() * 899999999) + 100000000;
  }

  constructor(id) {
    this._id = id || this.constructor.generateId();
  }

  get exists() {
    return (
      window.localStorage.getItem(`order_${this._id}_items_count`) !== null
    );
  }

  get id() {
    if (!this.exists) {
      return null;
    }
    return this._id;
  }

  get items() {
    if (!this.exists) {
      return null;
    }
    return JSON.parse(window.localStorage.getItem(`order_${this._id}_items`));
  }

  set items(items) {
    window.localStorage.setItem(
      `order_${this._id}_items`,
      JSON.stringify(items)
    );
  }

  get itemsCount() {
    if (!this.exists) {
      return null;
    }
    return parseInt(
      window.localStorage.getItem(`order_${this._id}_items_count`)
    );
  }

  set itemsCount(itemsCount) {
    window.localStorage.setItem(`order_${this._id}_items_count`, itemsCount);
  }

  get total() {
    if (!this.exists) {
      return null;
    }
    return parseFloat(window.localStorage.getItem(`order_${this._id}_total`));
  }

  set total(total) {
    window.localStorage.setItem(`order_${this._id}_total`, total);
  }

  get destination() {
    if (!this.exists) {
      return null;
    }
    return JSON.parse(
      window.localStorage.getItem(`order_${this._id}_destination`)
    );
  }

  set destination(destination) {
    window.localStorage.setItem(
      `order_${this._id}_destination`,
      JSON.stringify(destination)
    );
  }
}

export default Order;
