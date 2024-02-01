import productsData from './data/products.js';

export default class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    static findAll() {
        return productsData.map(({ id, name, price }) => new Product(id, name, price));
    }

    static findById(id) {
        const productData = productsData.find(p => p.id === id);
        return productData ? new Product(productData.id, productData.name, productData.price) : null;
    }

    static findByName(name) {
        const productData = productsData.find(p => p.name === name);
        return productData ? new Product(productData.id, productData.name, productData.price) : null;
    }
}

export const { findAll, findById, findByName } = Product;
