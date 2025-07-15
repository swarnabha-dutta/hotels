# Hotel Management API

A Node.js RESTful API for managing hotel staff and menu items, built with Express and MongoDB (Mongoose). This project is designed for learning and demonstration purposes, providing endpoints to manage hotel personnel and menu data.

[GitHub Repository](https://github.com/swarnabha-dutta/hotels)

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Data Models](#data-models)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- Add, update, delete, and list hotel staff (personnel)
- Add, update, delete, and list menu items
- Filter staff by role (Chef, Manager, Waiter)
- Filter menu items by taste (Sweet, Spicy, Sour)
- MongoDB integration with Mongoose
- RESTful API design

## Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- body-parser
- cors
- dotenv

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB instance (local or cloud)

### Installation
```bash
# Clone the repository
git clone https://github.com/swarnabha-dutta/hotels.git
cd hotels

# Install dependencies
npm install
```

### Running the Application
1. Create a `.env` file in the root directory and add your MongoDB URI:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```
2. Start the server:
   ```bash
   node server.js
   ```
   The server will run on `http://localhost:3000` by default.

## Environment Variables
- `MONGODB_URI`: MongoDB connection string
- `PORT`: (Optional) Port for the server (default: 3000)

## Project Structure
```
.
├── models/
│   ├── person.model.js
│   └── menu.model.js
├── routes/
│   ├── person.routes.js
│   └── menu.routes.js
├── db.js
├── server.js
├── package.json
└── README.md
```

## Data Models

### Person
```js
{
  name: String, // required
  age: Number, // required
  work: 'Chef' | 'Master Chef' | 'Waiter' | 'Manager', // required
  mobile: Number, // required, unique
  email: String, // required, unique, 6-250 chars
  password: String, // required, 6-15 chars
  address: String, // required
  salary: Number // required
}
```

### Menu
```js
{
  name: String, // required, unique
  price: Number, // required
  taste: 'Sweet' | 'Spicy' | 'Sour', // required
  is_drink: Boolean,
  ingredients: [String], // e.g., ["chicken wings", "spices", "sauce"]
  num_sales: Number
}
```

## API Endpoints

### Root
- `GET /` — Welcome message

### Person Endpoints
- `POST /person/` — Add a new person
- `GET /person/` — Get all persons
- `GET /person/:workType` — Get persons by work type (Chef, Manager, Waiter)
- `PUT /person/:id` — Update a person by ID
- `DELETE /person/:id` — Delete a person by ID

#### Example: Add a Person
```json
POST /person/
{
  "name": "John Doe",
  "age": 30,
  "work": "Chef",
  "mobile": 1234567890,
  "email": "john@example.com",
  "password": "secret123",
  "address": "123 Main St",
  "salary": 50000
}
```

### Menu Endpoints
- `POST /menu/menuItems` — Add a new menu item
- `GET /menu/menuItems` — Get all menu items
- `GET /menu/:tasteType` — Get menu items by taste (Sweet, Spicy, Sour)
- `PUT /menu/:id` — Update a menu item by ID
- `DELETE /menu/:id` — Delete a menu item by ID

#### Example: Add a Menu Item
```json
POST /menu/menuItems
{
  "name": "Spicy Chicken Wings",
  "price": 12.99,
  "taste": "Spicy",
  "is_drink": false,
  "ingredients": ["chicken wings", "spices", "sauce"],
  "num_sales": 100
}
```

## Error Handling
- Returns appropriate HTTP status codes and error messages for invalid requests or server errors.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the ISC License.
