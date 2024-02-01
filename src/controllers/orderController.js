import Order from '../models/order.js';
import { findById } from '../models/product.js';

const placeOrder = async (items) => {
    for (const item of items) {
        const product = await findById(item.id); // Add 'await' keyword here
        if (!product) {
            console.error(`Product with id ${item.id} not found.`);
            return null;
        }
        if (item.quantity <= 0) {
            console.error(`Invalid quantity for product ${product.name}.`); // Fix the string interpolation
            return null;
        }
    }

    const newOrder = Order.placeOrder(items);
    console.log(`Order placed successfully. Order ID: ${newOrder.id}.`);
    return newOrder;
};

export { placeOrder };
