// Node.js Basics:
// Introducytion to Node.js

// Installing Node.js and npm
// npm init -> lekha jokha of our project

// Working with modules
// a) File system operations
// b) understanding HTTP module


// 1. Working with modules
// a) File system operations
// filesystem - writeFile, appendFile, rename, copyFile, link, unlink, rmdir, rm, mkdir

const fs = require('fs');

//create a non-empty file
// fs.writeFile("hey.txt", "Hello all of you", function(err){ // write any text in file
//     if(err) console.error(err);
//     else console.log("done")
// })

// create a empty file
// fs.writeFile("hello.txt", "", function(err){
//     if(err) console.error(err);
//     else console.log("done") 
// })

// apend any text in file
// fs.appendFile("hey.txt", "\nI am here", function(err){
//     if(err) console.error(err.message)
//     else console.log("done")
// })

// rename a file
// fs.rename("hey.txt", "first_file.txt", function(err){
//     if(err) console.error(err.message)
//     else console.log("done")
// })

// make copy in same folder
// fs.copyFile("./first_file.txt", "./sec.txt", function(err){ 
//     if(err) console.error(err.message)
//     else console.log("done") 
// })

// can create copy in different folder
// fs.link("./first_file.txt", "./copt/hello.txt" , function(err){ 
//     if(err) console.error(err.message)
//     else console.log("done") 
// })

// can delete any file
// fs.unlink("./sec.txt", function(err){ 
//     if(err) console.error(err.message)
//     else console.log("done") 
// })

// only deletes empty folder
// fs.rmdir("./copt", function(err){ 
//     if(err) console.error(err.message)
//     else console.log("done") 
// })

// can delete any folder
// fs.rm("./copt", {recursive : true},function(err){ 
//     if(err) console.error(err.message)
//     else console.log("done") 
// })

// for creating a folder/directory
// fs.mkdir("./copt", (err)=>{
//     if(err) console.error(err.message)
//     else console.log("done") 
// })

// to read a file
// "utf8" → tells Node to return the content as a string
// data → contains the file content
// fs.readFile("./copt/hello.txt", "utf8" , (err, data)=>{
//     if(err) console.error(err.message)
//     else console.log(data) 
// })


// b) understanding HTTP module

// http - protocol
// yahi protocal hai yaa rule hai jisko follow kre bina aap internet pe naa hi 
// kuch bhej skte ho, aur naa hi kuch mangaa skte ho

const http = require("http")

// const server = http.createServer(function(req, res){
//     res.end("Hello World!")
// })
// server.listen(3000)
