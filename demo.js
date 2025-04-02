/*console.log("a = 20")
document.write("hello world");*/
/*a=10
b=3
// console.log(a+b) 
var a = 192;
var name = "Madhu"
var letter = 'c'
var p = true
var q = false
console.log(a)
console.log(b)*/
var a =10;
var b='jashwanth';
let a = 34
let b= 343
console.log(a);
console.log(b);
console.log(a+b);
var c = true;
console.log(c+b+a);
const a =239
let ab = 32
var car = "tata", name="Madhu",price=2920203;
console.log(car)

var cars = "tata";
let price = 1000;
price++;
console.log(price);

var a,b,c;
a =34
b=32
c=23
console.log(a,b,c)
let a = 20
let b = 23
let c = a+b
let C= a*b
console.log(type(a))
console.log(c)
console.log(C)
// Conditional Operators
var a =3;
var b=5;
a<b?console.log("b is big"):console.log("a is bing");
var a = 'c'
console.log(typeof(a))
// Type conversion 
//  Implict conversion to sting Using(+):
let result
result = '3'+2
console.log(typeof(result))
console.log(result)
let a = '34' +"2"
console.log(a)
// Implict conversion to number Using(-,*,/):
let result2
result2 = '4'-'2'
console.log(result2)
console.log(typeof(result2))
res = '4'*'2'
console.log(res)
console.log(typeof(res))
res = '8'/2
console.log(res)
console.log(typeof(res))
// Implict boolean conversion to Number:
let result3;
result='300'-true*true;
console.log(result3);
//NOTE
let resultt
resultt = 'hello'+'world'
console.log(resultt)
console.log(typeof(resultt))
// Results = NaN ,number
//Convert to Number Explicitly
let value
value = Number('324')
console.log(value)
console.log(typeof(value))
// Convert to String Explicity
let value1
value1 = String('324')
console.log(value1)
console.log(typeof(value1))
// Convert to Boolean Explicitly
let value2
value2 = Boolean(0)
console.log(vaule2)
console.log(typeof(vaule2))
// NOTE
let res = '20.1'
console.log(parseInt(res))
console.log(parseFloat(res))
console.log(Math.floor(res))
a="1"
b=Number(a)
console.log(b)
console.log(typeof(a))
// Strings
a = "hi it's java script"
// String length
a = 'hi it is "javascript"'
console.log(a)
console.log(a.length)
z = "madhu"
console.log(z.length)
// Sting  Index at particular Character
x = "Hai welcome to javaScript"
console.log(x.indexOf("p"))
// String Character at Particulat index
x = "Hai welcome to javaScript"
console.log(x.charAt(24))
// Converting strings to UPPERCASE
x = "Hai welcome to javaScript"
console.log(x.toUpperCase())
// Converting Stings to LOWERCASE
x = "Hai welcome to javaScript"
console.log(x.toLowerCase())
x = "Hai welcome to javaScript"
console.log(x.toString())
a = "Hi it is Javascript"
console.log(a)
console.log(a.length)
a = "We are the so-called 'Vikings' from the north."
// Escape Character
b = 'Charan\'s'
console.log(b)
b= 'ram\"s'
console.log(b)
a = "no.of\\total no.of"
console.log(a)
a = "madhu\tyadav"
console.log(a)
// To create an array of strings
let arrrString=["string1","string2","string3"]
let arrString=['string1','string2','string3']
console.log(arrString)
// To access array index elements
let a = ["ram","laxmi","seetha","charan"]
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[5])
let a = new Array("ram","laxmi","seetha","charan")
console.log(a)
console.log("name:"+a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[-1])
// Conditional Statements
// Only If Statement
if(1>2)
{
    console.log("Hi Welcome");
}
// If - else Statement
let a =10, b=20;
if(a>b)
{
    console.log("a is big");
}
else
{
    console.log("b is big");
}
// If else if Statement
let a = 23,b=45,c=90;
if(a>b)
{
    console.log("a is big")
}
else if(b>c)
{
    console.log("b is big")
}
else
{
    console.log("c is big")
}
let a = 10
// Switch Statement
switch(a)
{
    case 10: console.log("value is 10");
    break;
    case 20: console.log("value is 20");
    break;
    default: console.log("lets learn js");
}
// Loop Statements
// While loop 
let a = 1;
while(a<=5)
{
    console.log("a="+a);
    a++;
}
// Do-while loop
let a = 5
do
{
    console.log("a:"+a)
    a++
}
while(a<=20)
// do-while print atleast once
let a = 5
do
{
    console.log("a:"+a)
    a++
}
while(a>20)
// For loop
let a;
for(a=1;a<=10;a++)
{
    console.log("Page no:"+a)
}
// Break Statement
let a;
for(a=1;a<=10;a++)
{
    console.log("Page no:"+a)
    if(a==5)
    {
        break;
    }
}
// Continue Statement
let a;
for(a=1;a<=10;a++)
{
    if(a==5)
    {
        continue;
    }
    console.log("Page no:"+a)
}
// Block scope
// Here b is not print because it is outside curlybrackets.
// If you "var" at let place it will work
a=8
if(a>3)
{
   console.log("in");
   let b=20;
}
console.log(b)
// Local/Function Scope
function fn()
{
    var a=10
    console.log(a)
}
fn()
console.log(a)
// Global scope
// Here var/let/const are not have it's global a = 10
let a = 30
function fn()
{
    var a =10
    console.log("Inside:"+a)
}
fn();
console.log("Outside:"+a)
// Example
function fn()
{
    var a=10
    console.log("Inside:"+a)
}
function fnn()
{
     a = 100 // if you use "let" it shows error.
    console.log("2nd fun value"+a);
}
fn();
fnn();
console.log("Outside:"+a)
// Funtions
function function_name(a)
{
    console.log("Inside funtion "+a)
}
function_name("call")
// Function call
function fun(a,b)
{
    console.log("Addition:"+ (a+b))
}
fun(3,5) 
// Return value
// Addition through return value
function fun(c,d)
{
    console.log("Sum :"+(c+d))
    return c+d;
}
const a=10,b=20;
const sum=fun(a,b);
console.log(sum)
// Subtraction through return value
function fun(x,y)
{
    return x-y
}
const a=93,b=32;
const sub = fun(a,b)
console.log(sub)
// Objects
var person = {name:"Madhu",age:20,college:"gpcet",zipcode:509104};
console.log(person)
console.log(typeof(person))
console.log(person.name)
console.log(person.name.length)
// Object methods
function person(name,age)
{
    this.name=name;
    this.age=age;
}
var p1=new person("Ram",14);
var p2=new person("John",34);
console.log(p1.name)
console.log(p1.age)
console.log(p2.name)
console.log(p2.age)
// Methods
var person={name:"ram",age:25,
changename:function cn(a){this.name=a;}};
console.log("Before method call");
console.log(person.name);
person.changename("Laxman");
console.log("After method call");
console.log(person.name)
// Method define
function person(name,age)
{
    this.name=name
    this.age=age
    this.changename=function cn(){this.name=name}
}
var p1 = new person("nandu",23);
console.log(p1.name+p1.age)
console.log("before method call");
console.log(p1.name);
console.log("after method call");
p1.changename("Suresh");
console.log(p1.name)
// Method call
function person(age)
{
    this.age=age
   this.yob= yob;
}
function yob(age){
    return 2025-this.age;
}
var p1 = new person(20);
console.log(p1.yob(20));
// Arrays
var arr = new Array("anil","bunny","chanti","don");
console.log(arr[0])
arr[2]="Dolesh"
console.log(arr)
var a = new Array(10)
a[0]=4
a[1]=20
a[2]=3
a[3]=90
console.log(a)
console.log("Using loop")
for(i=0;i<10;i++)
{
    console.log(a[i])
}
// Arrays Methods
var a = new Array(2,3,4,5,6,7,8)
console.log("array length is:"+a.length)
// Combining array's
var c1=['html','css']
var c2=['js','c++']
var com=c1.concat(c2)
console.log(com)
// Pop() and Push() Method
var a = new Array("1","2");
var b = new Array("3","4");
a.pop()
console.log("a values after pop:"+a);
b.push("ram")
console.log("b values after push:"+b);
// Array delete
var arr=new Array(23,34,63,90,78)
delete arr[3]
console.log(arr)
// Math Methods
var a = 23.5
console.log(Math.round(a))
console.log(Math.ceil(a))
console.log(Math.floor(a))
console.log(Math.trunc(a))
console.log(Math.sqrt(4))
//
console.log(Math.E)
console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.SQRT1_2)
console.log(Math.LN2)
console.log(Math.LN10)
console.log(Math.LOG2E)
console.log(Math.LOG10E)
// DATE OBJECT
var d = new Date()
console.log(d)
var d = new Date(2000,3)
console.log(d)
var d = new Date(2023,8,21)
console.log(d)
var d = new Date(86400000)
console.log(d)
var  d = new Date()
console.log(d)
console.log(d.getDay())
console.log(d.getTime())
console.log(d.getMonth())
console.log(d.getMilliseconds())
console.log(d.getFullYear())