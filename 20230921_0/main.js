// var num = 1;
// var str = "adfsa";
// console.log(123456);

// dddd=1234;
// console.log(dddd);


// let number = 1;
// number = 2;
// console.log("변수 number",number);

// const MAXNUMBER = 1;


// let value = prompt("입력해라");

// console.log(value);

// alert(1);

// const number = 1;
// const number2 = 2;
// if(number===number2)
// {
//     console.log(number===number2);
// }

console.log("5"==5);
console.log("5"===5);

let score = 10;
let b = 100;
if(score==10)
{
    let a=50;
    if(a==50)
    {
        a=10;
        b=200;
       }
    console.log(a);
}

console.log(b);

//원시타입
//숫자타입 , 문자열, 불리언, undefined, null

//객체타입
//객체, 함수, 배열...

//if,for,switch,while..., class

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++)
    {
        document.write("*");
    }

    //window가 최상위 객체
    document.write("<br>");
    
}
//1.함수 선언문
function sum(x,y)
{
    return x+y;
}
//2. 함수 표현식
let res = function sum(x,y){
    return x+y;
}
//3. Function생성자 함수
let res1 = new Function("x","y","return x+y");

//4. 화살표 함수

let res2 = (x,y)=>x+y;