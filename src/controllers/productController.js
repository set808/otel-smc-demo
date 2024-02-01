import { findAll } from '../models/product.js';

const displayProducts = async () => {
    const products = await findAll();
    console.table(products);
}

export { displayProducts };
