// normal form
let [a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20   

// another form

let [g,h, ...c]= [10,20,30,40,50];
console.log(a); //10
console.log(b); //20
console.log(c); //[30,40,50]


// using in objects
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};
let {name, age} = obj;
console.log(name); // John
console.log(age);  // 30

// spreed operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// special exampe 
let arr = [1,5,8]
let obj2={ ...arr};
console.log(obj2); // { '0': 1, '1': 5, '2': 8 }