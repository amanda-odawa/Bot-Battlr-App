# Bot Battlr App
Bot Battlr is a simple, fun, and interactive React App where users can browse different bots, add them to their army, remove them from their army, or completely delete them from the site. 

The App demonstrates key React concepts:
1. Components: Dividing the app into reusable and manageable parts.
2. Props: Passing data between components.
3. State Management: Managing application data dynamically.
4. Data Fetching: Retrieving and managing data from a backend server.
5. Events: Adding interactive functionality to the UI.

## Table of Contents:
- [Technologies and Tools](#technologies-and-tools)
- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

### Technologies and Tools
- **React**: JavaScript library for building user interfaces.
- **CSS**: Styling for the app.
- **Event Listeners**: Click Events:
    - Add a bot to the army (addToArmy function).
    - Remove a bot from the army (removeFromArmy function).
    - Delete a bot forever (dischargeBot function).

### Features
1. **Browse Products**: 
   - View a list of available products, including their names, prices, and an "Add to Cart" button.
   
2. **Add to Cart**: 
   - Add products to the cart. If the product is already in the cart, its quantity will increase.
   
3. **View Cart**: 
   - Users can view all items in the cart, showing each item's name, price, quantity, and total price.
   
4. **Manage Cart**: 
   - Remove products from the cart or adjust their quantities.

### Demo
[View Live Demo](#) (https://botbattlr-by-amanda.netlify.app/)

### Prerequisites
Before running the app, make sure you have the following installed:
- Node.js (>= 14.0)
- npm (>= 6.0)

### Installation
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/phase2-wk1-code-challenge.git
    ```
2. Navigate into the project directory:
    ```bash
    cd react-shopping-cart
    ```
3. Install the necessary dependencies:
    ```bash
    npm install
    ```

### Available Scripts
In the project directory, you can run:
1. ```bash
    npm start
    ```
    Runs the app in the development mode.

    Open http://localhost:3000 to view it in your browser. The page wil reload when you make changes. You may also see any lint errors in the console.
2. ```bash
    npm test
    ```
    Launches the test runner in the interactive watch mode.
3. ```bash
    npm run build
    ```
    Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

    The build is minified and the filenames include the hashes.
    Your app is ready to be deployed!
4. ```bash
    npm run eject
    ```
    Note: This is a one-way operation. Once you ```eject```, you can't go back!

    If you aren't satisfied with the build tool and configuration choices, you can ```eject``` at any time. This command will remove the single build dependency from your project.

    Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except ```eject ``` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

    You don't have to ever use ```eject```. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you're ready for it.

### Usage
Once the app is running, navigate to it in your browser. You can:
- **Browse Products**: See a list of products with names and prices.
- **Add Products to Cart**: Click the "Add to Cart" button to add a product to your cart. If it’s already in the cart, its quantity will increase.
- **View Cart**: Check the cart to see added items, their prices, and the total cost.
- **Manage Cart**: Adjust quantities or remove items from the cart.

### Contributing
We welcome contributions! To contribute, please follow these steps:
1. Fork the repository.
2. Clone your fork locally:
    ```bash
    git clone https://github.com/yourusername/phase2-wk1-code-challenge.git
    ```
3. Create a new branch for your feature:
    ```bash
    git checkout -b feature/your-feature-name
    ```
4. Make your changes and commit:
    ```bash
    git commit -m 'Add your feature'
    ```
5. Push the changes to your fork:
    ```bash
    git push origin feature/your-feature-name
    ```
6. Open a Pull Request with a description of your changes.

### License
*Distributed under the MIT License.*