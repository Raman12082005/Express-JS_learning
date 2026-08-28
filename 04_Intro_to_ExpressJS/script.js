// 1. Express.js Framework
// (MERN Stack -> Mongodb Express React Node)


// 2. Introduction to Express.js
// express js ek npm package hai
// framework
// not a library
// what is Express.js -> manages everything from recieving the request and giving the response



// 3. Something
// const express = require('express')
// const app = express()

// app.get('/', (req, res)=>{
//     res.send("Hello World")
// })
// app.listen(3000)



// 4. Routing
// Setting up a basic Express applocation
// const express = require('express');
// const app = express();
// // create routes
// app.get('/', function(req, res){
//     res.send("I am a champion boy")
// })
// app.get('/profile', (req, res)=>{
//     res.send("You are a champion")
// })
// app.listen(3000)



// 5. Middleware -> jab bhi server request krta hai, waha se route tk pouchne tak agar aap us
//               request ko beech mein rookte ho and kuch perform krte ho, to ye element
//               middleware kehlaata hai
// const express = require('express');
// const app = express();


// Method 01 - 0f using Middleware -> by app.use()
// app.use((req, res, next)=>{
//     console.log("1st time Middleware chla")
//     next();
// })
// app.use((req, res, next)=>{
//     console.log("2nd Middleware chla")
//     next();
// });

// app.get('/', (req, res)=>{
//     res.send("Hello I am here")
// })
// app.get('/about', (req, res)=>{
//     res.send("Where r you")
// })
// app.listen(3000);

// Method 02 of using Middleware -> directly in Routes
const express = require("express");
const app = express();

const callMiddleware = (req, res, next)=>{
    console.log("Middleware is Running")
    next();
}

app.get('/', callMiddleware, (req, res)=>{
    res.send("This is Home Page")
}) // Middleware is used in this route
app.get('/about', (req, res)=>{
    res.send("This is About page")
}) // here Middleware is not used
app.listen(3000)




// 6. Request and Response handling -> frontend backend frontend

// 7. Error handling
// const express = require('express')
// const app = express()

// app.use((req, res, next)=>{
//     console.log("1st time Middleware chla")
//     next();
// })

// app.get('/', (req, res)=>{
//     res.send("Hello World!")
// })
// app.get('/profile', (req, res, next)=>{
//     return next(new Error("Something went wrong")); // shows on console
// })

// app.use((err, req, res, next)=>{
//     console.error(err.stack)
//     res.status(500).send("Something broke!") // shows on frontend
// })
// app.listen(3000)