console.log("-----연습문제 1-----");
console.log("-----for 문---------");
// 연습문제 1
// 2단 부터 9단 까지
// (for 문, while 문)

for (i = 2; i<=9; i++) {
    for (j = 1; j<=9; j++) {
        console.log("%d x %d =", i, j,  i*j );
    }
    
}

console.log("-----while 문-------");

i = 2;
j = 1;

while (i<=9) {
    for (j=1; j<=9; j++) {
        console.log("%d x %d =", i, j, i*j);
     }
    i++;
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
// for (i=1; i<=5; i++) {
//     console.log("*****")
// }




//  ES6: for ... in
//          객체의 속성(프로퍼티)를 순회
//  ES6: for ... of
//          순회 객체의 값을 순회
let obj = {         // <--- 자바스크립트 객체 표기법
    name: "박상혁",
    age: 32,
    job: "학생",
    gender: "남성"
}
console.log("===== for ... in");

for (let key in obj) {
    //  for ... in : 객체의 속성을 순회
    console.log(key, "->", obj[key]);
}

const arr = [5, 1, 4, 3, 2, 9, 8, 0];
for (let key in arr) {
    console.log(key); //    -> 0 1 2 3 4 5 6 7
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