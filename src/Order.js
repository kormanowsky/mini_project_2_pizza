class Order {
  static generateId() {
    return parseInt(Math.random() * 899999999) + 100000000;
  }

  constructor(id) {
    if (!id) {
      id = this.constructor.generateId();
      window.localStorage.setItem(
        `order_${id}_datetime_created`,
        new Date().getTime()
      );
      // Add new order to all orders
      let orders = JSON.parse(window.localStorage.getItem("orders") || "[]");
      orders.push(id);
      window.localStorage.setItem("orders", JSON.stringify(orders));
    }
    this._id = id;
  }

  get exists() {
    return (
      window.localStorage.getItem(`order_${this._id}_items_count`) !== null
    );
  }

  get id() {
    return this._id;
  }

  get datetimeCreated() {
    if (!this.exists) {
      return null;
    }
    return new Date(
      parseInt(window.localStorage.getItem(`order_${this.id}_datetime_created`))
    );
  }

  get items() {
    if (!this.exists) {
      return null;
    }
    return JSON.parse(window.localStorage.getItem(`order_${this.id}_items`));
  }

  set items(items) {
    window.localStorage.setItem(
      `order_${this.id}_items`,
      JSON.stringify(items)
    );
  }

  get itemsCount() {
    if (!this.exists) {
      return null;
    }
    return parseInt(
      window.localStorage.getItem(`order_${this.id}_items_count`)
    );
  }

  set itemsCount(itemsCount) {
    window.localStorage.setItem(`order_${this.id}_items_count`, itemsCount);
  }

  get total() {
    if (!this.exists) {
      return null;
    }
    return parseFloat(window.localStorage.getItem(`order_${this.id}_total`));
  }

  set total(total) {
    window.localStorage.setItem(`order_${this.id}_total`, total);
  }

  get destination() {
    if (!this.exists) {
      return null;
    }
    return JSON.parse(
      window.localStorage.getItem(`order_${this.id}_destination`)
    );
  }

  set destination(destination) {
    window.localStorage.setItem(
      `order_${this.id}_destination`,
      JSON.stringify(destination)
    );
  }
}

export default Order;
