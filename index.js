const express = require('express');  // importing express ~ importing http
const mongoose = require("mongoose")  // http.createServer()
// app.use(express.json());   // Middleware
//
const app = express();
mongoose.connect;

//URI :-

// Static Api:-

const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/");
};

connectDB()
    .then(() => {
        console.log("connection with database has established");
        
    })
    .catch((err) => {
        console.log("error connecting to database", err);   
    })

//


// Get Api

app.get('/todos',(req,res)=>{
   const todo =  [    
        {
        id : 1,
        task : "push code to github"
},
        {
        id : 2,
        task : "go for break at 11pm"
},
        {
        id : 3,
        task : "learning express.js"
},
        {
        id : 4,
        task : "lunch timing 1 am"
},
]
const todoString = JSON.stringify(todo)
res.send(todoString);
})

app.delete("/todos",(req,res)=>{
 res.json({
    msg : "this file has been deleted"

 })
})

const products = [
        {
            id : 1,
            name: 'laptop',
            price : 45000,
            quantity : 3,
        },
        {
            id : 2,
            name: 'apple',
           
            price : 135000,
           quantity : 2,
        },
        {
            id : 3,
            name: 'I phone',
           
            price : 115000,
           quantity : 1,
        },
    ];

app.get("/productId/:productId",(req,res)=>{
 const productId = req.params.productId;
 const product = products.find((product)=> product.id == productId);

 if (product) {
    res.json(product);
 }else {
    res.status(404).json({msg : "products not available."});
 }
});


app.get("/productPrice/:productPrice",(req,res)=>{
 const productPrice = req.params.productPrice;
 const product = products.find((product)=> product.price == productPrice);

 if (product) {
    res.json(product);
 }else {
    res.status(404).json({msg : "products not available."});
 }
});


app.listen(3000, () => {
    console.log("server is up and running on port 3000");
    
})

app.get('/', (req, res) => {

    const person = [
        {
            name: 'John',
            age: 30,
            class : "bsc it",
            add : "ooty"
        },
        {
            name: 'John',
            age: 30,
            class : "bsc it",
            add : "ooty"
        }
    ]
    // res.send(person[1].add);
    // res.json(person) // this is same as res.send but it converts to json format
});

 // POST api
 
 

app.post('/', (req, res) => {
    res.json({ message: 'POST request received' });
});

// patch api
app.patch('/', (req, res) => {
    res.json({ message: 'Patch request received' });
});



// server.listen

app.listen(3000, () => {
    console.log("server is up and running on port 3000");
    
});



app.get('/', (req, res) => {

    const users = [
        {
            name: 'John',
            name : "sehwag",
            age: 30,
            class : "bsc it",
            add : "ooty"
        },
        {
            name: 'John',
            age: 30,
            class : "bsc it",
            add : "ooty"
        }
    ]

    const user = {name : req.params.name}

    res.json(user)
    
});

 // interview without Inbuild method ; -

 let arr = [1,2,3,4,5];

 function reverseArray() {
    for (let i = arr.length -1; i >=0;i--) {
       newArr.push(arr[i]);
    }
    console.log(newArr);
    
 }

 reverseArray();

// length

 function eleCount() {
    let count = 0;
    for(let el in arr) {
        count += 1;

    }

    console.log(count);
    
 }

 eleCount();


 // 


 function repeatCount() {
    let obj = {};
    for(let el of arr){
        if (obj[el]) {
            
        }
    }
 }

 let unique = new S
 
 et(arr);
 let newArr = [...unique];
 console.log(uniqueArr);
 

 // string methods 


 let str = "hello world";

function count() {
  let count = 0;
  for (let ch of str) {
    count++;
  }
  console.log(count);
}

count();


function reverseStr() {
    let newStr = "";
    for(let i = str.length -1; i>=0;){
        newStr += str[i];
    }
    console.log(newStr);
    
}

reverseStr();

let res = str.split("").reverse().join("");
console.log(res);


// prop drilling

// context api

// serverless

// counter using only html & js :-
