console.log("-----연습문제 1-----");
console.log("-----for 문---------");
// 연습문제 1
// 2단 부터 9단 까지
// (for 문, while 문)

for (let dan = 2; dan < 10; dan++) {
    for (let num = 1; num < 10; num++){
        console.log(`${dan} * ${num} = ${dan * num}`);
    }
    console.log();
}

console.log("-----while 문-------");

let dan = 2;
while (dan < 10) {
    num = 1;
    while (num <10) {
        console.log(`${dan} * ${num} = ${dan * num}`);
        num++;
    }
    console.log();
    dan++;

}



console.log("--------------------");


console.log("-----연습문제 2-----");
//  연습문제 2
//  *****
//  ****
//  ***
//  **
//  *
//  (for 문, while 문)

console.log("-----------for문 star --------");
for (let i = 5; i >= 1; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) {

    }
    
}




//  ES6: for ... in
//          객체의 속성(프로퍼티)를 순회
//  ES6: for ... of
//          순회 객체의 값을 순회
let obj = {         // <--- 자바스크립트 객체 표기법
    name: "박상혁",
    gender: "남성",
    age: 32,
    job: "학생"
    
    
}
console.log("===== for ... in");

for (let key in obj) {
    //  for ... in : 객체의 속성을 순회
    console.log(key, "->", obj[key]);
}

const arr = [5, 10, 1, 4, 3, 2, 9, 8, 0];
for (let key in arr) {
    console.log(key); //    -> 0 1 2 3 4 5 6 7 8
}
    console.log();

console.log("==== for ... of");
for (let value of arr) {
    //  for ... of : 반복 가능 객체에서 요소를 하나씩
    console.log(value);
}

//  for ... of는 순회 객체(배열 등)에서만 사용 가능
// for (let value of obj) {     
//     console.log(value);
// } --> Error: obj는 순회객체 아님

// 주의!! : for ... in과 for ... of를 구분해서 사용