// form handling and working with the forms
// handle backend process of forms and making sure the data comming from any frontend
// library, framework, templating engines, we still handle it at the backend

// hum log kuch bhi data frontend pr browser pr rakh sakte hai anf jb bhi aap kuch bhi
// request backend pr karoge wo frontend par saved data automatically backend par chala jaayega

// concept of login -> you ask something from server, sevver says I don't know you, then
// you try to login. gthen server gives youn a string and you keep that string, and agli
// baar aap jb bhi kuch bhejte hai you send that string too, so that server remembers you

// cookie -> mainly used in authentication
// session -> when you are connected to server and not logged out that is known as a session
//            when you logged out session ends and when you again log in a new session starts

const express = require('express')
const app = express();

app.use(express.json()) // to handle data comming from framework
app.use(express.urlencoded({extended : true}))

app.use((req, res, next)=>{
    console.log("Middleware...")
    next();
})

app.get('/', (req, res)=>{
    res.send("This is Home page")
})
app.get('/about', (req, res)=>{
    res.send("Thi is About page")
})
app.listen(3000)