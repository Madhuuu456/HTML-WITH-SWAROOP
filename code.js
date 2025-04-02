/*console.log("Hello JavaScript");
console.log(`Hai Madhu`);

window.alert('this is an alert');
window.alert('Do you like my webpage');*/

//document.getElementById("MyH1").textContent='Helloworld';
//document.getElementById("MyP").textContent='Helloworld This is javascript';

// this is a comment
/* a
b
c
d
*/

// Variable = A container that stores a value.
              //  Behaves as if it were the value it contains.
// 1. Declaration  let x;
// 2. Assignment   x=100;
/*let x;
x = 120;
console.log(x , typeof(x));
let age = 25;
let price = 10.99;
let gpa = 6.97;
console.log(age);
console.log(price);
console.log(gpa);
console.log(`You are ${age} years old`);
console.log(`Your price is $${price} `);
console.log(`Your gpa is ${gpa}`);
console.log(typeof(age));
console.log(typeof(price));
console.log(typeof(gpa));

let firstName = "Madhuyadav";
let favFood = "Chicken";
let email = "madhuyadav60082@gmail.com";
console.log(typeof(firstName));
console.log(`YOur name is ${firstName}`);
console.log(`YOur fav food is ${favFood}`);
console.log(`YOur email is ${email}}`); */
/*
let online = true;
let forSale = false;
let isStudent = true;

console.log(typeof(online));
console.log(typeof(forSale));
console.log(`Bro is Online : ${online}`)
console.log(`Is this car for sale : ${forSale}`)
console.log(`Enrolled : ${isStudent}`);  */
/*
let fullName = "Madhu";
let age = 19;
let student = true;
document.getElementById("P1").textContent = `Your name is ${fullName}`;
document.getElementById("P2").textContent = `Your age is ${age}`;
document.getElementById("P3").textContent = `You are a student:${student}`;
*/

// Arthematic operators = operands (values, variables, etc...)
//          Operators(+ - * / %)   -> eg: 3+5=8
//let students = 30;
 //students = students+1;
 //students = students-1;
//students = students*2;
//students = students/2;
//students = students**2;
//students = students**3;
//students = students%1;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students %= 2;

//students++;
//students--;
//console.log(students);

/* 
Operator Precedence 
1) Parenthesis ()
2) Exponents (*) or (**)
3) Multiplication or Division or Modulus
4) Addition or Substraction
*/
//let result = 1+2*3+4**2  // 4**2=16+2*3=6 , +1 => 16+6+1=23 
//console.log(result)
//let result = 12%5+8/2; // 2+4=> 6
//console.log(result)
//let result = 6/2**(2+5); // 7=> 2**7=128=> 6/128=>0.046875
//console.log(result)

/* How to accept user input
    1) EASY WAY = window prompt
    2) PROFESSIONAL WAY = HTML textbox  
*/
/* 1) let userName;
      userName = window.prompt("What's Your name:");
      console.log(userName); */
/*
let username;
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH1").textContent=`Hello ${username}`;
}(HTML changes)  <h1 id="myH1">Welocme</h1>
  <label>UserName : </label>
  <input id="myText"><br><br>
  <button id="mySubmit">submit</button>
*/

// Type Conversion = Change the datatype of a value to another
//                        (Strings, numbers , booleans)
/*let age = window.prompt("How old are you?");
age +=1;          
console.log(age); // result=> 191

let age = window.prompt("How old are you?");
age = Number(age);
age +=1;          
console.log(age, typeof(age)); // result=> 20*/
/*
let x = 'pizza';
let y = 'pizza';
let z = 'pizza';
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x,typeof(x)); // NaN 'number'
console.log(y,typeof(y)); // pizza string
console.log(z,typeof(z)); // true 'boolean'*/
/*
let x = '0';
let y = '0';
let z = '0';
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x,typeof(x)); // 0 'number'
console.log(y,typeof(y)); // 0 string
console.log(z,typeof(z)); // true 'boolean'*/
/*
let x = '';
let y = '';
let z = '';
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x,typeof(x)); // 0 'number'
console.log(y,typeof(y)); //  string
console.log(z,typeof(z)); // false 'boolean'*/

// Constants = A variable that cannot be changed.
//const PI = 3.14159; // for Constant we use variable UPPERCASE for only primitive data types.
//let radius;
//let circumference;
//PI = 4.20;    // result => 84
/*radius = window.prompt(`Enter the radius of a circle`);
radius = Number(radius);
circumference = 2*PI*radius;*/
//console.log(circumference);// result =>62.8318
/*
const PI = 3.14159
let radius;
let circumference;
//PI = 4.20; program can't run.
document.getElementById("mySubmit").onclick = function() {
radius = document.getElementById("myText").value;
radius = Number(radius);
circumference = 2*PI*radius;
document.getElementById("myH3").textContent= circumference + "CM";
}
(HTML code)
 <h1 id="myH1">Enter the radius of a circle:</h1>
<input type="text" id="myText">
<button id="mySubmit">submit</button>
<h3 id="myH3"></h3> */
/*
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;
increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function() {
    count--
    countLabel.textContent = count;
}
resetBtn.onclick = function() {
    count=0;
    countLabel.textContent = count;
}(HTML CODE)
 <label id="countLabel">0</label>
  <div id="btnContainer">
    <button id="decreaseBtn" class="buttons">decrease</button>
    <button id="resetBtn" class="buttons">reset</button>
    <button id="increaseBtn" class="buttons">increase</button>
  </div>
  (CSS CODE)
  #countLabel{
    display:block;
    text-align: center;
    font-size: 10em;
    font-family: Helvetica;
}
#btnContainer{
    text-align: center;
}
.buttons{
    padding: 10px 20px;
    font-size: 1.5em;
    color: white;
    background-color: hsl(214, 100%, 74%);
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.25s;
}
.buttons.hover{
    background-color: hsl(214, 100%, 56%);
}
*/

/* Math = built-in object that provides a collection
//          a collection of properties and methods.
Math.PI
console.log(Math.PI) // 3.14159
console.log(Math.E)  // 2.71828

let x=3;
let y =2;
let z = 1;
z=Math.round(x);
z=Math.floor(x);
z=Math.ceil(x);
z=Math.trunc(x);
z=Math.pow(x, y);
z=Math.pow(y, x);
z=Math.sqrt(x);
z=Math.log(x);
z=Math.sin(x);
z=Math.cos(x);
z=Math.tan(x);
z=Math.abs(x);
z=Math.sign(x);
let max = Math.max(x,y,z)
let min = Math.min(x,y,z)
console.log(min)*/

// RANDOM NUMBER GENERATOR:-
/*const min =50;
const max = 100;
let randomNum =Math.floor(Math.random()*(max-min)+min);
console.log(randomNum); 

const myButton = document.getElementById("myButton");
const Label1= document.getElementById("Label1");
const Label2= document.getElementById("Label2");
const Label3= document.getElementById("Label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;
myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max)+min;
    randomNum2 = Math.floor(Math.random() * max)+min;
    randomNum3 = Math.floor(Math.random() * max)+min;
    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
}  (HTML CODE)
   <button id="myButton">roll</button><br>
<label id="Label1" class="myLabels"></label><br>
<label id="Label2" class="myLabels"></label><br>
<label id="Label3" class="myLabels"></label><br>
(CSS CODE)
body{
    font-family: Verdana;
    text-align: center;
}
#myButton{
    font-size: 3em;
    padding: 5px 25px;
    border-radius: 5px;
}
.myLabels{
    font-size: 3em;
}
*/

// IF STATEMENTS 
// if - conditition is true -> executecode
// else - execute something.
/*let age;
age = Number(age);
age = window.prompt(`Enter your age:`);
if(age>=18)
{
    console.log("Eligible");
}
else{
    console.log("NOT eligible");
}*/
/*
let age =25;
let hasLicense = false;
if(age>=16)
{
    console.log("You are old enough to drive");
    if(hasLicense){
        console.log("You have your license");
    }
    else
    {
        console.log("You do not have your license yet!");
    }
}
else
{
    console.log("You must be 16+ to have license");
}*/
/*
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;
mySubmit.onclick = function() {
age = myText.value;
age = Number(age);
if(age>=100)
{
    resultElement.textContent = "You are too old";
}
else if(age==0)
{
    resultElement.textContent = "You can't enter";
}
else if(age>=18)
{
   
    resultElement.textContent = "You are eligible to enter";
}
else if(age<0)
{
    resultElement.textContent = "Your age can't be below '0'";
}
else
{
    resultElement.textContent = "You are not eligible!";
}
}
(HTML CODE)
    <label>Enter your age:</label><br>
    <input type="text" id="myText"><br>
    <button type="submit" id="mySubmit">submit</button>
    <p id="resultElement"></p>
*/
// Checked = property that determines the checked state of an 
//           HTML checkbox on radio button element.
/*
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn= document.getElementById("payPalBtn");
const mySubmit= document.getElementById("mySubmit");
const subResult= document.getElementById("subResult");
const paymentResult= document.getElementById("paymentResult");
mySubmit.onclick = function() {
    if(myCheckBox.checked){
        subResult.textContent = `You are Subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT Subscribed!`;
    }
    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with visa`;
    }
    else if(masterCardBtn.checked)
    {
        paymentResult.textContent = `You are paying with Mastercard`;
    }
    else if(payPalBtn.checked)
    {
        paymentResult.textContent = `You must select a payment type`;
    }
}   (HTML CODE)
      <input type="checkbox"id="myCheckBox">
    <label for="myCheckBox">subscribe</label><br>

    <input type="radio" id="visaBtn" name="card">
    <label for="visaBtn">Visa</label><br>
    <input type="radio"id="masterCardBtn" name="card">
    <label for="massterCardBtn">masterCard</label><br>
    <input type="radio" id="payPalBtn" name="card">
    <label for="payPalBtn">PayPal</label><br>

    <button type="submit" id="mySubmit">submit</button>
    <p id="subResult"></p>
    <p id="paymentResult"></p>
    (CSS CODE)
    body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2em;
}
#mySubmit {
    font-size: 1em;
}
    */

/*Ternary Operator = a shortcut to if{} and else{} statements
//                   helps to assign a variable based on a condition
//                   condition? codeIfTrue : codeIfFalse;
let age = 12;
let message =age>=18 ? "You are an adult" : "You are a minor";
console.log(message);
let time =16;
let greeting = time<12 ? "Good Morining" : "Good afternoon";
console.log(greeting) 
let isStudent = false;
let message = isStudent? "You'r student " : "Your not student";
console.log(message) 
let purchaseAmount = 125;
let discount = purchaseAmount>=100? 10 : 0;
console.log(`Your total is $ ${purchaseAmount-purchaseAmount*(discount/100)}`); */

// SWITCH = can be an efficient replacement to many else if statements
/*let day =8;
switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
     case 6:
        console.log("It is Saturday");
        break;
    case 7:
         console.log("It is Sunday");
        break;  
    default:
        console.log("Invalid"); 
}
let testScore = 80;
let Grade;
switch(true) 
{
    case testScore >= 90:
        Grade = 'A';
        break;
    case testScore >= 80:
        Grade = 'B';
        break;
     case testScore >= 70:
        Grade = 'C';
        break;
    case testScore >= 60:
        Grade = 'D';
        break;
    default:
        Grade = 'F';
}
console.log(Grade) */

// String methods = allow you to manipulate and work with text (strings)
/*let userName = 'Bro code ';
console.log(userName)
console.log(userName.charAt(0));
console.log(userName.charAt(1));
console.log(userName.charAt(2));
console.log(userName.charAt(3));
console.log(userName.charAt(4));
console.log(userName.charAt(5));
console.log(userName.charAt(6));
console.log(userName.indexOf(`B`));
console.log(userName.indexOf(`r`));
console.log(userName.indexOf(`o`));
console.log(userName.indexOf(`c`));
console.log(userName.lastIndexOf(`o`));
console.log(userName.indexOf(`d`));
console.log(userName.indexOf(`e`));
console.log(userName.length);
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3));
let userName = "Brocode";
let result1 = userName.startsWith(" ");
let result = userName.endsWith("");
let result2 = userName.includes("");
if(result){
    console.log("Your username can't begin with ' ' ");
}
else
{
    console.log(userName);
}
console.log(result);
let phoneNumber = "123-456-7890";
//phoneNumber=phoneNumber.replaceAll("-","");
//phoneNumber=phoneNumber.replaceAll("-","/");
//phoneNumber=phoneNumber.padStart("20","0");
phoneNumber=phoneNumber.padEnd("20","0");
console.log(phoneNumber)*/

// String slicing = creating a substring from a portion of 
//                          another string.
//        =>  string.slice(start, end)
/*const fullName = "Broseph Code";
let firstName = fullName.slice(0, 1);
let firstName1 = fullName.slice(0, 2);
let firstName2 = fullName.slice(0, 3);
let firstName3 = fullName.slice(0, 4);
let firstName4 = fullName.slice(0, 5);
let firstName5 = fullName.slice(0, 6);
let firstName6 = fullName.slice(0, 7);
let firstName7 = fullName.slice(0, 8);
let firstName8 = fullName.slice(0);
let firstName9 = fullName.slice(-1);

console.log(firstName);
console.log(firstName1);
console.log(firstName2);
console.log(firstName3);
console.log(firstName4);
console.log(firstName5);
console.log(firstName6);
console.log(firstName7);
console.log(firstName8);
console.log(firstName9); 
const fullName = "Broseph Code";

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") +1);
console.log(firstName);
console.log(lastName);  

const email = "Bro1@gmail.com";
let userName = email.slice(0, email.indexOf("@"));
let userNam = email.slice(email.indexOf("@"));
console.log(userName);
console.log(userNam);  */

// Method Changing = Calling one method after another
//                    in one continous line of code.
//   ----NO METHOD CHANGING---- 
/*let userName = window.prompt("Enter user name:");
userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();
let extra = userName.slice(1);
extra = extra.toLowerCase();
userName = letter + extra;
console.log(userName);
//   ----METHOD CHANGING----
userName = userName.trim().charAt().toUpperCase()+userName.trim().slice(1).toLowerCase();
console.log(userName); */

// logical operators = used to combine or manipulate boolean values
//    (True or false) and = && , or = || , not = !
/*const temp = 50;
if(temp > 0 && temp<=30){
    console.log("the weather is GOOD!");
}
else if(temp<=40 || temp<=50){
    console.log("the weather is OK!");
}
else
{
    console.log("The weather is BAD!");
}  
const isSunny = false;
if(!isSunny){
    console.log("It is cloudy");
}
else{
    console.log("It is sunny");
}  */
// = assignment operator
// == comparison operator(compare if values are equal)
// === strict equality operator(compare if values & datatype are equal)
// !=  inequality operator
// !==  strict inequality operator
/*const  PI = "3.14";
if(PI!=="3.14"){
    console.log("This is NOT pi");
}
else{
    console.log("This is  PI.")
}  
// WHILE LOOP = repeat some code While some condition is TRUE
let username = "";
while(username===""){
    username = window.prompt("Enter ur name:");
}
console.log(`Hello ${username}`);
// DO WHILE LOOP
do{
    username = window.prompt("Enter ur name:");
}
while(username===""||username===null)

    console.log(`Hello ${username}`);  */
// FOR LOOP = repeat some code a LIMITED amount of items
/*for(let i =10;i<=20;i++){
    if(i==13){
        break;
    }
    console.log(i);
}
console.log("Happy New Year!"); */
/* NUMBER GUESSING GAME
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum-minNum +1)) + minNum;
let attempts = 0;
let guess;
let running = true;
while(running){
    guess = window.prompt(`Guess a number b/w ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter valied number");
    }
    else if(guess<minNum || guess>maxNum){
        window.alert("please enter valid number");
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("Too Low!");
        }
        else if(guess>answer){
            window.alert("Too High!");
        }
        else{
            window.alert(`Correct! The answer was ${answer}.It took you ${attempts}`);
            running = false;
        }
    }
 
} */

/* FUNCTION = A section of reusable code.
//           Declare code once, use it whenever you want.
//           call the function to execute the code.
function happyBirthday(userName , age) {
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday to ${userName}!`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old`);
}
happyBirthday("Madhu",19);
happyBirthday("Chinnu",19);
happyBirthday("Mottu",19);
happyBirthday("Charan",19); 
function add(x,y){
    return x+y;
}
function sub(a,b){  // a,b are parameters
    return a-b;
}
function mul(n,m){
    return m*n;
}
console.log(mul(12,6));
console.log(sub(10,4)); // 6  10,4 are Arguments
console.log(add(2,3)); // 5
function isEven(number){
   return number%2==0 ? true : false;
}
console.log(isEven(12)); 
function isEmail(email){
    return email.includes("@")? true: false;
} 
console.log(isEmail("Bro@gmail.com"));
console.log(isEmail("Brogmail@.com"));
console.log(isEmail("Brogmail.com"));
console.log(isEmail("@gmail.com"));  

// VARIABLE SCOPE = where a variable is recognized and 
//                  accessible (LOCAL vs GLOBAL)variable.
let x = 3;
function1();
function function1(){
    let x =1;    // local scope Accesing in inside function.
    console.log(x);
}
function function2() {
    console.log(x); // global scope Accessing at outside function.
}
function2();  */

/* TEMPERATURE CONVERSION PROGRAM
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;
function convert() {
      if(toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp*9/5+32;
        result.textContent = temp.toFixed(1) +"*F";
      }
      else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp-32)* (5/9);
        result.textContent = temp.toFixed(1) +"*C";
      }
      else{
        result.textContent = "select a unit";
      }
}  */
/* Array = a variable like structure that can hold more than 1 value.
let fruit = ["Banana","apple","mango","papaya"];
fruit[2] = "coconut";
fruit.push("carry");
fruit.pop();
fruit.unshift("mango");
fruit.shift();
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit[4]);
let len = fruit.length;
let index = fruit.indexOf("apple");
console.log(index);
console.log(len);   
let fruits = ["Banana", "apple","mango","papaya"];
//for(let i = 0; i<fruit.length;i++){
//for(let i=fruit.length-1;i>=0;i--){
//fruits.sort().reverse();
for(let fruit of fruits){
    console.log(fruit);
    } */

/* Spread operator = ... allows an iterable such as an array or string 
//                    to be expanded into seperate elements
//                     (Unpacks the elements.) /*
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(minimum);
console.log(maximum); 
let username = "Bro Code";
let letters = [...username].join("-");
console.log(letters); 
let fruits = ["apple", "Banana", "cherry"];
let vegetables = ["carrot","tomato","potato"];
let foods = [...fruits, ...vegetables,"eggs","milk"];
console.log(foods); 

// Rest Parameters = (...rest) allow a function work with a variable
//                    number of arguments by bundling them into an array
//  spread = expands an array into seperate elements
//  rest = bundles seperate elements into an array

function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}
const food1 = "pizza";
const food2 = "burger";
const food3 = "fries";
const food4 = "coca cola";
const food5 = "egg puff";
// openFridge(food1,food2,food3,food4,food5);
const foods = getFood(food1,food2,food3,food4,food5);
console.log(...foods); 
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result+=number;
    }
    return result;
}
const total1 = sum(75,100,85,90,95,50);
console.log(total1);
function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result/numbers.length;
}
const total = getAverage(75,100,85,90,50);
console.log(total); 
function combineStrings(...strings){
    return strings.join(" ");
}


const fullName = combineStrings("madhu","vamshi","uma","daddy","amma");
console.log(fullName); */

/* DICE ROLLER PROGRAM

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    for(let i=0;i<numOfDice;i++){
        const value = Math.floor(Math.random() *6)+1;
       values.push(value);
       images.push(`<img src="dice_images/${value}.jpeg">`);
    }
    diceResult.textContent = `dice: ${values.join(`, `)}`;
    diceImages.innerHTML = images.join('');
} */

/* RANDOM PASSWORD GENERATOR

function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=";
    let allowedChars ="";
    let password="";
    allowedChars += includeLowercase ? lowercaseChars:"";
    allowedChars += includeUppercase ? uppercaseChars:"";
    allowedChars += includeNumbers ? numberChars:"";
    allowedChars += includeSymbols ? symbolChars:"";
    
    if(length<=0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }
    for(let i=0;i<length;i++) {
        const randomIndex = Math.floor(Math.random() *allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeSymbols = true;
const includeNumbers = true;
const password = generatePassword(passwordLength,
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers,
                                  includeSymbols);
console.log(`Generated password : ${password}`); */

// Call back = a function that is passed as an argument to another
/*                      function.
hello();
goodBye()
function hello() {
    setTimeout(function() {
    console.log("Hello!");
},3000);
}
function goodBye() {
    console.log("Good Bye!!");
} 
hello(leave);
function hello(callback){
    console.log("Hello!");
    callback();
}
function leave() {
    console.log("Leave");
}
function goodBye() {
    console.log("GoodBYe");
} 
sum(displayPage, 4,4)
function sum(callback,x,y){
    let result = x+y;
    callback(result);
}
function display(result){
    console.log(result);
}
function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}  */

/// forEach() = method used to iterate over the elements of an array
//             and apply a specified function (callback) to each element.
//   =>  array.forEach(callback)  
/*let numbers = [1,2,3,4,5];
numbers.forEach(cube);
numbers.forEach(display);
function double(element,index,array) {
    array[index] = element*2;
}
function triple(element,index,array) {
    array[index] = element*3;
}
function power(element,index,array) {
    array[index] = Math.pow(element,2);
}
function cube(element,index,array) {
    array[index] = Math.pow(element,3);
}
function display(element) {
    console.log(element);
} 
let fruits = ['apple','orange','banana','coconut'];
fruits.forEach(capatil);
fruits.forEach(display);
function upperCase(element,index,array) {
    array[index] = element.toUpperCase();
}
function lowerCase(element,index,array){
    array[index] = element.toLowerCase();
}
function capatil(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
function display(element) {
    console.log(element); 
}  */

// .map() = accepts a callback and applies that function to each element
/*            of an array, then return a new array.
const nums = [2,4,6,8,10];
const squares = nums.map(square);
const cubes = nums.map(cube);
console.log(squares);
function square(element){
    return Math.pow(element,2);
} 
function cube(element){
    return Math.pow(element,3);
} 
const students = ["RAM","JACK","NULL","FUCK"];
//const studentUpper = students.map(upperCase);
const studentLower = students.map(lowerCase);
//console.log(studentUpper);
console.log(studentLower);
function upperCase(element){
    return element.toUpperCase();
}
function lowerCase(element){
    return element.toLowerCase();
} 
const dates = ["2024-1-10","2025-2-20","2026-3-30"];
const ddates = dates.map(formatDates);
console.log(ddates);
function formatDates(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}  

// .filter() = creates a new array by filtering out elements
let nums = [1,2,3,4,5,6,7];
let evenNums = nums.filter(isEven);
let oddNums = nums.filter(isOdd);
console.log(evenNums);
console.log(oddNums);
function isEven(element) {
    return element%2==0;
}
function isOdd(element) {
    return element%2!=0;
} 
const ages = [16,17,18,19,20,60];
const major = ages.filter(isAdult);
const minors = ages.filter(minor);
console.log(major);
console.log(minors);
function isAdult(element) {
    return element >=18;
}
function minor(element) {
    return element<18;
} 
const fruits = ['apple','orange','banana','kiwi','pomegranate','coconut'];
const word = fruits.filter(getshortWords);
const words = fruits.filter(getlongerWords);
console.log(word);
console.log(words);
function getshortWords(element){
    return element.length<=6;
}
function getlongerWords(element) {
     return element.length>6;
} 

// .reduce() = reduce the elements of an array to a single value.
const prices = [15,5,30,25,20,10];
const total = prices.reduce(sums);
const totals = prices.reduce(mina);
console.log(total.toFixed(2));
console.log(totals.toFixed(2));
function sums(sum,element){
    return sum+element;
}
function mina(minas,element){
    return minas * element;
} 
const maxs = [12,45,67,98,10,3];
const max = maxs.reduce(maxNum);
const min = maxs.reduce(minNum);
console.log(max);
console.log(min);
function maxNum(num,element){
    return Math.max(num,element);
}
function minNum(num,element) {
    return Math.min(num,element);
}  */

// Function declaration = define a reusable block of code 
//                            that performs a specific task.
/* hello(); // give the declaration above the code.
function hello(){
    console.log("Hello"); 
} 
/* Function expressions = a way to define functions as values or variables.
/* 1. Callbacks in asynchronous operations
    2. Higher-Order Functions
    3. Closures
    4.Event Listeners
const hello = function() {
    console.log("Hello");
}
hello(); // give declaration below the code 
//setTimeout(hello,4000);
setTimeout(function(){
    console.log("Hello");
},3000) 
const nums = [1,2,3,4,5,6,7,8,9,10];
const squares = nums.map(function(element){
    return Math.pow(element,2);
});
console.log(squares);
const cubes = nums.map(function(element){
    return Math.pow(element,3);
});
console.log(cubes);
const even = nums.filter(function(element){
    return element%2==0;
});
console.log(even);
const odd = nums.filter(function(element){
    return element%2!=0;
});
console.log(odd);
const total = nums.reduce(function(sum,element){
    return sum+element;
});
console.log(total); */

/* Arrow functions = a concise way to write function expression good
//                     for simple functions that you use only once
//                (parameters) => some code 
const hello = (name,age) => {console.log(`Hello ${name}`)
                             console.log(`You are ${age} years old`)};
hello("Madhu",19); 
setTimeout(function(){
    console.log("Hello JavaScript!");
},3000);  
setTimeout( () => console.log("Hello"),3000); 
const nums = [2,3,5,6,7,8,9];
const squares = nums.map((element) => Math.pow(element,2));
console.log(squares);
const cubes = nums.map((element) => Math.pow(element,3));
console.log(cubes);
const even = nums.filter((element) => element%2==0);
console.log(even);
const odd = nums.filter((element) => element%2!=0);
console.log(odd);
const total = nums.reduce((sum,element) => sum+element);
console.log(total); */

/* Object = A collection of related properties and/or methods can
//     represent real world objects(people,products,places)
// object = {key:value, function()}
const person = {
    firstName : "Madhu",
    lastName : "Yadav",
    age: 19,
    isEmployed : true,
    hello : function(){console.log(`Hai I am Madhu!`);},
    goodBye:() => console.log(`Hey! I am fine, Don't worry..`)
}
const person1 = {
    firstName:"Vamshi",
    lastName:"Yadav",
    age:16,
    isEmployed:false,
    hello : function(){console.log(`Hai I am Vamshi!`);},
    goodBye:() => console.log(`Bye I miss you...`)
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);
person.hello();
person.goodBye();
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.hello();
person1.goodBye(); */

/* this = reference to the object where THIS is used
//         (the object depends on the imediate context)
//                  person.name = this.name
// this keyword doesnot execute for arrow functions.
const person1  = {
    name: 'Madhu',
    favFood:'biryani',
    sayHello:() => console.log(`Hai I am ${person1.name}`),
    eat:function() {console.log(`${this.name} is eating ${this.favFood}`);}
}
person1.sayHello();
person1.eat(); */
// console.log(this); // window

/* constructor = special method for definig the properties and 
//                   methods of objects.
// code reusability.
const car = {
    model:"BMW",
    year: 2024,
    color:"black",
    drive:function(){console.log(`You drive the ${this.model}`);}
}
const car1 = {
    model:"Porsche",
    year: 2023,
    color:"ash",
    drive:function(){console.log(`You drive the ${this.model}`);}
}
const car2 = {
    model:"Lamborgini",
    year: 2023,
    color:"red",
    drive:function(){console.log(`You drive the ${this.model}`);}
} 
function Car(model,engine,year,color){
    this.model = model,
    this.engine = engine,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}
const car1 = new Car("BMW","Boxer",2025,"black");
const car2 = new Car("Mustang","Stream",2022,"red");
const car3 = new Car("Ford","Duro",2023,"Black")
console.log(car1.model);
console.log(car1.engine);
console.log(car1.year);
console.log(car1.color);
car1.drive();
console.log(car2.model);
console.log(car2.engine);
console.log(car2.year);
console.log(car2.color);
car2.drive();
console.log(car3.model);
console.log(car3.engine);
console.log(car3.year);
console.log(car3.color);
car3.drive(); */

/* class = (ES6 feature) provide a more structured and cleaner way to
//    work with objects compared to traditional constructor functions
//   ex: static keyword, encapsulation, inheritance.
class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax) {
        return this.price + (this.price*salesTax);
    }
}
const salesTax = 0.05;
const product1 = new Product("Shirt",15);
product1.displayProduct();
const total = product1.calculateTotal(salesTax);
console.log(`The total price: ${total}`);
const product2 = new Product("Paint",20);
product2.displayProduct();
const total2 = product2.calculateTotal(salesTax);
console.log(`The total price: ${total2}`); */

/* static = keyword that defines properties or methods that belong
//  to a class itself rather than the objects created from that class
//     (class owns anything static, not the objects)
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius*2;
    }
    static getCircumference(radius){
        return 2 * this.PI *radius;
    }
    static getArea(radius){
        return this.PI*radius*radius;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10)); 
class User{
    static userCount =0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getCount(){
        console.log(`There are ${User.userCount} users.`);
    }
    sayHello() {
        console.log(`Hello, my username is ${this.username}`);
    }
}
const user1 = new User("Jai Shree Ram");
const user2 = new User("Jai");
const user3 = new User("Shree");
const user4 = new User("Ram");
user1.sayHello();
user2.sayHello();
user3.sayHello();
user4.sayHello();
User.getCount(); */

/* Inheritance = allows a new class to inherit properties and methods
//         from an existing class (parent -> child)
//                   helps with code reusability.
class Animal{
    alive = true;
    eat(){
         console.log(`This ${this.name} is eating.`);
    }
    sleep() {
        console.log(`This ${this.name} is Sleeping.`);
    }
}
class Rabbit extends Animal{
    name = "rabbit";
    run() {
        console.log(`This ${this.name} is running.`);
    }
}
class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`This ${this.name} is Swimming.`);
    }
}
class Jack extends Animal{
    name = 'jack';
    fly() {
        console.log(`This ${this.name} is Flying`);
    }
}
const rabbit = new Rabbit();
const fish = new Fish();
const jack = new Jack();
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();
console.log(jack.alive);
jack.eat();
jack.sleep();
jack.fly();  
// Super = keyword is used in classes to call the constructor or
//      access the properties and methods of a parent(superclass)
//      this = this object
//      super = the parent
class Animal{
     constructor(name,age){
        this.name = name;
        this.age = age;
     }
}
class Rabbit extends Animal{
     constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
     }
}
class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
}
class Jack extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
}
const rabbit = new Rabbit("rabbit",1,25);
const fish = new Fish("fish",1,50);
const jack = new Jack("jack",2,30);
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
console.log(jack.name);
console.log(jack.age);
console.log(jack.flySpeed); 

// Getter = special method that makes a property readable.
// Setter = special method that makes a property writeable.
// Validate and modify a value when reading/writting a property.

class Rectangle {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    set width (newWidth){
        if(newWidth>0)
             this._width = newWidth;
        else 
             console.log(`Width must be a +ve number.`);
    }
    set height(newHeight){
        if(newHeight>0)
             this._height = newHeight;
        else 
             console.log(`Height must be a +ve number.`);
    }
    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
    get height(){
        return `${this._height.toFixed(1)}cm`;
    }
    get area(){
        return `${(this._width * this._height).toFixed(1)}cm`;
    }
}
const rectangle = new Rectangle(3,4);
console.log(rectangle.height);
console.log(rectangle.width);
console.log(rectangle.area); */
class Person{
    constructor(firstName,lastName,age){
        this.firstName  = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length>0)
            this._firstName = newFirstName;
        else 
            console.error(`First name must be a string!`);
    }
    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length>0)
            this._lastName = newLastName;
        else 
             console.error(`Last name must be a string!`);
    }
    set age(newAge){
        if(typeof newAge === "number" && newAge>=0)
            this._age = newAge;
        else
            console.error(`Age must be a number!`);
    }
    get firstName(){
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get age(){
        return this._age;
    }
    get fullName(){
        return (this._firstName + " " + this._lastName)
    }
}
const person = new Person('Madhu','Yadav',19);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);




