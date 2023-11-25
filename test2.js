/* function in integer */

function add(a,b)
{
    console.log(a+b);
}
add(10,20);
//-----------------------------------------------------------
function sub(num1,num2)
{
    console.log(num1-num2);
}
sub(300,123);
//------------------------------------------------------------
function multi(x,y)
{
    console.log(x*y);
}
multi(4,12);
//-------------------------------------------------------------
function divison(a,b)
{
    console.log(a/b)
}
divison(40,23);

/* function in string*/

function string()
{
    let  name="kavin";
    let  out="his name is "+ name;
    console.log(out);
}
string();

function str(str1)
{
    console.log(str1+" hello");
}
str("hai")
str("welocme")

function fun()
{
    let name="jk";
    let con="hai "+name+" how are you";
    console.log(con);
}
fun();

/* Object */

let student={
    stdname:"Rohit",
    age:22,
    gender:"male",
    Dob:1998,
};
console.log(student);

let fruit={
    fruitname:"orange",
    color:"yellow",
    price:"1kg 200",
}
console.log(fruit);

/*Array*/

let name=["kavin","Raja","Gopinath","Vasanth","Mathan"];
//document.write(name);
console.log(name);

//array replace

let words=["a","b","s","d","e","f","g"];
words[2]="c";
document.write(words);

//array  length

let  nam=["Raja","Gopinath","jegan","Mathan","Vasanth"];
let size=nam.length;
document.write(size);