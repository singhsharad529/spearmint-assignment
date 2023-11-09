# RESTful API

This is a RESTful API example based on Node.js and MongoDB, following the **MVC pattern** i.e. Model ~~View~~ Controller.

**Mongoose** is used for Database transactions which is an elegant solution to mongodb object modeling for node.js.

This repository contains a Node.js application that implements CRUD operations for books using Express.js and MongoDB Atlas.

---

## Available API Endpoints:

### Get all stocks ( GET request )

- `http://localhost:3000/stocks`

### Create a new stock( POST request )

- `http://localhost:3000/stocks`

{
"stock": "HDFC",
"price": 1400,
}

### Get a single book by id( GET request )

- `http://localhost:3000/stocks/654b8e1f24ffce486c58b79d`

**For more clarification visit rest.http file.**

## To start setting up the project

Step 1: Clone the repo

```bash
git clone https://github.com/singhsharad529/brewapps-assignment.git
```

Step 2: cd into the cloned repo and run:

```bash
npm install
```

Step 3: Put your credentials in the .env file.

```bash
PORT=3000
MONGODB_URI=YOUR MONGODB URI
DB_NAME=DATABASE NAME OF YOUR CHOICE
DB_USER=DATABASE USER
DB_PASS=DATABASE USER PASSWORD
```

Step 4: Start the API by

```bash
npm start
```

## Deployment:

## Author

- [**Sharad Kumar Singh**](https://singhsharad529.github.io/sharad-portfolio/)

## License

This project is licensed under the MIT License.
