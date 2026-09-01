// setting up parsers for form
//      install ejs from npm
//      setup ejs as a view engine

// setting up ejs for ejs pages
// setting up public static files

// dynamic routing
//      dynamic routing
//      how to get data coming from frontend at backend route
// steps for dynamic routing :-
// 1. sbse phale url pr jao
// 2. url likhye apna jo aapko cahiye and enter dabaaiye
// 3. ab us url route ko create kariye
// 4. res bhejiye kuchh bhi
// 5. ab usi url ko dynamic banana hai to realise kro konsa part dynamic hai aur us
//    part ke aage route mein : lgaa do -> req.params - aisa kuch bhi jiske aage : hai

const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs")

app.get('/', (req, res)=>{
    res.render("index")
})
app.get('/profile/:username', (req, res)=>{
    res.send(`Welcome, ${req.params.username}`)
})
app.get('/profile/:username/:age', function(req, res){
    res.send(`Welcome : ${req.params.username} of Age : ${req.params.age}`)
})

app.listen(3000, ()=>{
    console.log("Everything will be fine.....")
})
