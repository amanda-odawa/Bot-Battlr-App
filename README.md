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
1. **View All Bots**: 
   - The ```BotCollection``` component renders a list of all bots fetched from the server. Each bot is displayed as a ```BotCard``` with relevant details like its name, catchphrase, class, health, damage, and armor.
   
2. **Add a Bot to the Army**: 
   - By clicking the "Add to Army" button on a bot in the ```BotCollection```, the bot is added to the ```YourBotArmy``` component. The same bot cannot be added to the army multiple times (duplicate prevention).
   
3. **Remove a Bot from the Army**: 
   - By clicking the "Remove from Army" button on a bot displayed in the ```YourBotArmy```, the bot is removed from the user's army. It remains in the ```BotCollection```.
   
4. **Delete a Bot Forever**: 
   - Clicking the red "x" button on a bot (available in both ```BotCollection``` and ```YourBotArmy```) will:
        - Delete the bot from the backend server (DELETE /bots/:id).
        - Remove the bot from both the ```BotCollection``` and ```YourBotArmy``` on the frontend.

### Demo
[View Live Demo](https://botbattlr-by-amanda.netlify.app/)

### Prerequisites
Before running the app, make sure you have the following installed:
    - Node.js (>= 14.0)
    - npm (>= 6.0)

### Installation
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/phase2-wk2-code-challenge.git
    ```
2. Navigate into the project directory:
    ```bash
    cd phase2-wk2-code-challenge
    ```
3. Install the necessary dependencies:
    ```bash
    npm install
    ```
4. Start the JSON Server (backend):
    ```bash
    json-server --watch db.json
    ```
5. Test your server by visiting this route in the browser:
    ```bash
    http://localhost:8001/bots
    ```
6. Run the app (Navigate to it on your browser):
    ```bash
    npm start
    ```

### Usage
Once the app is running, you can:
- **Browse Bots**: See a list of Battle Bots with their name, catchphrase, class, health, damage, and armor..
- **Add a Bot to your Army**: Click the "Add to Army" button to add a Bot to your army. If it’s already in the army, clicking "Add to Army" has no effect.
- **View Bot Army**: Bots added to your army appear in a special container at the top of the page.
- **Manage Army**: You can remove a Bot from your army by clicking "Remove from Army" button.
- **Delete a Bot**: Click the "x" button to delete a bot from the backend server and the frontend UI.

### Contributing
We welcome contributions! To contribute, please follow these steps:
1. Fork the repository.
2. Clone your fork locally:
    ```bash
    git clone https://github.com/yourusername/phase2-wk2-code-challenge.git
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