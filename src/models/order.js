import Product from './product.js';

export default class Order {
    constructor(id, items) {
        this.id = id;
        this.items = items;
        this .totalCost = this.calculateTotalCost();
    }

    calculateTotalCost() {
        return this.items.reduce((total, item) => {
            const product = Product.findById(item.id);
            return total + (product.price * item.quantity);
        }, 0);
    }

    static placeOrder(items) {
        const newOrderId = Math.floor(Math.random() * 1000000);
        const newOrder = new Order(newOrderId, items);
        return newOrder;
    }
}
