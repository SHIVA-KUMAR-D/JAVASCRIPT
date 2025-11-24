let a = prompt("enter a valure one");
let b = prompt("enter a valure two");
if(isNaN(a) || isNaN(b)){   
    throw new Error("Invalid input: Please enter numeric values only.");
}

c=parseInt(a)+parseInt(b);
try {
    console.log("The sum is: " , c*x);
    
} catch (error) {
    console.log("An error occurred: " , error.message);
}