import inquirer from 'inquirer';
import { setupTracing } from './tracing/tracing.js';
import { displayProducts } from './controllers/productController.js';
import { placeOrder } from './controllers/orderController.js';

//Initialize OpenTelemetry Tracing
setupTracing();

//Main function to run the CLI
const runCLI = async () => {
    const choices = ['View Products', 'Place Order', 'Exit'];
    const { action } =  await inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'Welcome to Capsule Corp. What would you like to do?',
        choices,
    });

    switch (action) {
        case 'View Products':
            displayProducts();
            break;
        case 'Place Order':
            const orderDetails = await inquirer.prompt([
                {
                    name: 'productId',
                    type: 'input',
                    message: 'Enter the Product ID:',
                    validate: input => !isNaN(input) && input > 0
                },
                {
                    name: 'quantity',
                    type: 'input',
                    message: 'Enter the quantity:',
                    validate: input => !isNaN(input) && input > 0
                }
            ]);
            placeOrder([{ productId: parseInt(orderDetails.productId), quantity: parseInt(orderDetails.quantity) }]);
            break;
        case 'Exit':
            console.log('Thank you for shopping at Capsule Corp!');
            process.exit(0);
    }

    await inquirer.prompt({ name: 'pause', type: 'input', message: 'Press enter to continue...\n' });
    runCLI();
};

runCLI();
