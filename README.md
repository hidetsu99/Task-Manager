# Simple Task Manager

A nice project by someone is trying to learn nodeJs for to be a Back-end developer

---
## Requirements

For development, you will only need Node.js and a node global package.


## Install

    $ git clone https://github.com/hidetsu99/Task-Manager/
    $ cd Task-Manager
    $ npm install

## Configure app
Create a DB in mongo Atlas. It's free :) <br/>
Get the Mongo Uri string and change the USER and password with yours credentials (Don't change the collection name)  E.G: 'mongodb+srv://USER:<PASSWORD>@cluster0.j4uoj.mongodb.net/Task-Manager?retryWrites=true&w=majority' <br/>
Create .env file in the path with a const MONGO_URI and Mongo uri string 

- Settings;
  "scripts": {
    "start": "nodemon app.js"
  },

## Running the project

    $ npm start
