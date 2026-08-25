// 1. arrays -> forEach, map, filter, find, indexOf
// 2. objects(key value pairs)
// 3. functions -> return
// 4. async js 



// 1. arrays -> forEach, map, filter, find, indexOf

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 12, 12, 12]
// arr1.forEach(function(val){
//     console.log(val + " Hello")
// })
let arr2 = arr1.map((val)=>{
    return val + 12;
})
// console.log(arr2)

let arr3 = arr1.filter((val)=>{
    if(val > 4) return true;
    else return false;
})
// console.log(arr3)

let ans1 = arr1.find((val)=>{
    if(val === 2) return val;
})
// console.log(ans1)
let ans2 = arr1.find((val)=>{
    if(val === 12) return val;
})
// console.log(ans2)

// console.log(arr1.indexOf(12))
// console.log(arr1.indexOf(100))
// console.log(arr1.indexOf(10))



// 2. objects(key value pairs) ->

let obj1 = {
    Name : "Aman",
    Age : 27
}
// console.log(obj1)
// console.log(obj1.Name)
// console.log(obj1['Age'])
obj1.Age = 15
// console.log(obj1['Age'])

let obj2 = {
    Name : "Raman",
    Age : 21
}
// console.log(obj2)
Object.freeze(obj2)
// console.log(obj2.Name)
// console.log(obj2['Age'])
obj2.Name = "Kartik"
// console.log(obj2.Name)



// 3. functions -> return

function fun1(){
}
// console.log(fun1)
// console.log(fun1.length)
// console.log(typeof(fun1))

function fun2(a, b, c){
}
// console.log(fun2)
// console.log(fun2.length)

function fun3(){
    return {
        Name : "Raman", Age : 21
    };
}
// console.log(fun3.length)
// console.log(fun3())



// 4. async js 

// line by line code chle -> usye synchronous(sync) bolte h

// jo bhi code async nature ka ho, usye side stack mein bhej doo and sync nature vale code
// ko main stack mein bhej ke chla doo, aur jb bhi sara sync vala code complete ho jaye,
// tb check kro ki async code complete hua ki nahi aur agr vo complete hua ho to use main
// stack mein le aao and chlaa doo

