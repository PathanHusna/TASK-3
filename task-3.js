// Q1. Create a function welcome() that prints "Welcome to JavaScript".

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();


// Q2. Create studentDetails(name, age, cgpa) and call it for two students.

function studentDetails(name, age, cgpa) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("CGPA:", cgpa);
}

studentDetails("Sameena", 22, 9.22);
studentDetails("Rahul", 21, 8.5);


// Q3. Create calculateFee(fee) that returns the student fee.
// Store the returned value in a variable and print it.

function calculateFee(fee) {
    return fee;
}

let studentFee = calculateFee(200000);
console.log(studentFee);


// Q4. Create discount(percent) that calculates the discount
// on a fee of ₹200,000 and prints the final fee.

function discount(percent) {
    let fee = 200000;
    let discountAmount = fee * percent / 100;
    let finalFee = fee - discountAmount;

    console.log("Discount Amount:", discountAmount);
    console.log("Final Fee:", finalFee);
}

discount(10);


// Q5. Create studentForm(name, age, disability = "no").
// Call it three times, including once without disability.

function studentForm(name, age, disability = "no") {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Disability:", disability);
}

studentForm("Sameena", 22, "yes");
studentForm("Rahul", 21, "no");
studentForm("Priya", 20);



// Q1. Create a named function that accepts a message and prints it.

function displayMessage(message) {
    console.log(message);
}

displayMessage("Hello JavaScript");


// Q2. Create an anonymous function and store it in a variable.
// Pass a name to it and print the name.

let printName = function(name) {
    console.log(name);
};

printName("Sameena");


// Q3. Create an arrow function that accepts a number and prints it.

let printNumber = (num) => {
    console.log(num);
};

printNumber(100);


// Q4. Create a function containing var, let, and const inside
// an if block. Check which variables work inside and outside.

function checkScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        // All three variables can be accessed inside the block.
        console.log("Inside block:", a, b, c);
    }

    // var is function-scoped, so it works outside the if block.
    console.log("Outside block, var:", a);

    // let and const are block-scoped.
    // console.log(b); // ReferenceError
    // console.log(c); // ReferenceError
}

checkScope();


// Q5. Predict the output of the following code.

console.log(value); // Output: undefined
var value = 10;

console.log(value); // Output: 10


// Q1. Create first() and second(). Pass second as a callback
// to first() and execute it inside first().

function second() {
    console.log("Second function executed");
}

function first(callback) {
    console.log("First function executed");
    callback();
}

first(second);


// Q2. Create add(callback, a, b) that prints the sum
// and then calls the callback with two numbers.

function add(callback, a, b) {
    console.log("Sum:", a + b);
    callback(20, 10);
}

function showNumbers(x, y) {
    console.log("Numbers:", x, y);
}

add(showNumbers, 5, 3);


// Q3. Create a sub(num1, num2) arrow function and
// pass it as a callback to add().

let sub = (num1, num2) => {
    console.log("Subtraction:", num1 - num2);
};

function addNumbers(callback, a, b) {
    console.log("Addition:", a + b);
    callback(20, 10);
}

addNumbers(sub, 5, 3);


// Q4. Create multiply(callback, a, b) that prints
// the multiplication result and executes the callback.

function multiply(callback, a, b) {
    console.log("Multiplication:", a * b);
    callback();
}

function afterMultiply() {
    console.log("Multiplication completed");
}

multiply(afterMultiply, 5, 4);


// Q5. Create divide(num1, num2) and pass it as
// a callback to another function.

function divide(num1, num2) {
    if (num2 !== 0) {
        console.log("Division:", num1 / num2);
    } else {
        console.log("Cannot divide by zero");
    }
}

function calculate(callback) {
    callback(20, 4);
}

calculate(divide);


// Q6. Create a higher-order function that accepts
// a callback and calls it with a student's name.

function studentCallback(callback) {
    callback("Sameena");
}

function greetStudent(name) {
    console.log("Welcome, " + name);
}

studentCallback(greetStudent);



// Q1. Create a generator function that yields three messages.

function* cashback() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let result = cashback();

console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);


// Q2. Call .next() three times and observe the returned values.

function* numbers() {
    yield 10;
    yield 20;
    yield 30;
}

let gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


// Q3. Create a generator that yields five discount messages.
// Print each yielded value using a for-of loop.

function* discounts() {
    yield "5% discount";
    yield "10% discount";
    yield "15% discount";
    yield "20% discount";
    yield "No discount";
}

for (let message of discounts()) {
    console.log(message);
}


// Q4. Create a generator that yields three student names.
// Display them using a for-of loop.

function* studentNames() {
    yield "Sameena";
    yield "Rahul";
    yield "Priya";
}

for (let name of studentNames()) {
    console.log(name);
}


// Q5. Create a generator with four yield statements.
// Check the done property after consuming all values.

function* fourValues() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}

let values = fourValues();

console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next()); // done: true





// Q1. Create a normal function add(a, b, c)
// that prints the sum of three numbers.

function add(a, b, c) {
    console.log(a + b + c);
}

add(5, 10, 15);


// Q2. Convert add(a, b, c) into a curried function
// using nested functions.

function curriedAdd(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        };
    };
}

curriedAdd(5)(10)(15);


// Q3. Call a curried function using functionName(5)(10)(15).

function calculateSum(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        };
    };
}

console.log(calculateSum(5)(10)(15));


// Q4. Create a curried function that accepts product price,
// discount percentage, and quantity, then calculates total price.

function productPrice(price) {
    return function(discount) {
        return function(quantity) {
            let discountedPrice = price - (price * discount / 100);
            return discountedPrice * quantity;
        };
    };
}

console.log(productPrice(1000)(10)(3)); // Output: 2700


// Q5. Write a normal three-parameter function and its curried
// equivalent. Call both with the same values and compare results.

function normalCalculate(a, b, c) {
    return a + b + c;
}

function curriedCalculate(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log("Normal:", normalCalculate(5, 10, 15));
console.log("Curried:", curriedCalculate(5)(10)(15));






// Q1. Create an IIFE that accepts a product name and discount
// percentage, then displays a sale message using a template string.

(function(product, discount) {
    console.log(`${product} has a ${discount}% discount!`);
})("Laptop", 20);


// Q2. Create a function that returns a number.
// Store the returned value in a variable and print it.

function getNumber() {
    return 100;
}

let number = getNumber();
console.log(number);




// Q3. Create a function that accepts a student's marks
// and returns the marks. Use the returned value in another variable.

function getMarks(marks) {
    return marks;
}

let studentMarks = getMarks(95);
console.log("Student Marks:", studentMarks);


// Q4. Create a student fee calculator using a default parameter,
// a callback to calculate the discount, and a return value for the final fee.

function calculateStudentFee(fee = 200000, callback) {
    let discountAmount = callback(fee);
    let finalFee = fee - discountAmount;

    return finalFee;
}

function calculateDiscount(fee) {
    return fee * 10 / 100;
}

let finalFee = calculateStudentFee(200000, calculateDiscount);

console.log("Original Fee: 200000");
console.log("Final Fee:", finalFee); // Output: 180000