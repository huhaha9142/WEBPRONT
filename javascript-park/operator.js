// 1. String concatenation (연결)
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 

''''
1 + 2 = ${1 + 2}`);

console.log('ellie\'s \n\tbook');

// 2. Numeric operators (숫자 연산자)
console.log(1 + 1); // 더하기
console.log(1 - 1); // 빼기
console.log(1 / 1); // 나누기
console.log(1 * 1); // 곱하기
console.log(1 % 1); // 나머지
console.log(2 ** 3);// 거듭제곱 ex) 2^3

// 3. 증감연산자
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;   // counter = 3
// preIncrement = counter;  // preIncrement = 3
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter; // postIncrement = 3;
// counter = counter + 1; // counter = 4;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. 할당 연산자
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. 비교 연산자
console.log(10 < 6); // ~보다 작다
console.log(10 <= 6); // ~보다 작거나 같다
console.log(10 > 6); // ~보다 크다
console.log(10 >= 6); // ~보다 크거나 같다

// 6. 논리 연산자: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or) : true가 처음 나오면 실행을 멈추고 true나온 부분을 출력
//          말 그대로 처음에 true가 나오면 true
// 무거운 연산자, 함수같은 것은 맨 마지막에 지정 (쓸데없이? 오래걸리기 때문 호율성을 높이려고)
console.log(`or: ${value1 || value2 || check()}`);

// && (and) : 처음에 false가 나오면 무조건 false
// or과 마찬가지로 무거운 연산 일수록 맨 마지막에 지정
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('^ㅡ^');
    }
    return true;
}

// ! (not)  //  위에 value1: false
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == : loose equality -> type을 같게 변환(타입과 관계없이 값만 비교)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === : strict equality -> type과 값이 모두 같은지 비교
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
// -> 코딩할때는 어지간하면 strict equality를 사용

// object equality : objects는 메모리에 탑재될때 referenct(참조형)으로 저장됨
// 폴더 안에 사진 object equality 참고
const park1 = { name: 'park'};
const park2 = { name: 'park'};
const park3 = park1
console.log(park1 == park2); 
console.log(park1 === park2);
console.log(park1 === park3); 

// equality - puzzler
console.log(0 == false); 
console.log(0 === false);
console.log(typeof 0 ,typeof false);
console.log('' == false); 
console.log('' === false); 
console.log(typeof '' ,typeof false);
console.log(null == undefined); 
console.log(null === undefined);
console.log(typeof null ,typeof undefined);

// 8. 조건문 Conditional operator : if
// if, else if, else
const name = 'park';
if (name === 'programmer') {
    console.log('넌 최고의 programmer야!');
} else if (name === 'park') {
    console.log('환영합니다 park님! 열공하세요.');
} else {
    console.log('누구세요?');
}

// 9. 삼항 연산자 (Ternary operator): ?
// 간단한 경우에 보다 간략하게 표현
// condition ? value 1 : value 2;
console.log(name === 'park' ? 'yes' : 'no');

// 10. switch문 Switch statement
// if문에서 if else if else if .... 
// 반복적으로 나오면 switch문을 사용하는게 좋다
const browser = 'Chrome';
switch (browser) {
    case 'IE':
        console.log("ah..");
        break;
    case 'Firefox':
    case 'safari':
        console.log('Hello!');
        break;
    case 'Chrome':
        console.log('Welcome!');
        break;
    default:
        console.log('haha');
        break;
}

// 11. 반복문 Loops
// while loop, while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i= i - 2) {
    //inline variable declaration
    // =>    let i = 3 지역변수를 지정한 것
    console.log(`inline variable for: ${i}`);
}

// 중첩for문 nested loops
console.log(`-----구구단 시작------`)
for (let i = 2; i < 10; i++) {
    console.log(`${i}단 입니다`)
    for (let j = 1; j < 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
} console.log(`------구구단 끝------`)

// break, continue
// Q1. 숫자 0~10까지 짝수인 수만 출력(continue사용)
console.log(`첫번째 방법 continue 사용`);
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1: ${i}`);
}
console.log(`두번째 방법`);
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`q1: ${i}`);
    }
}

// Q2. 0~10까지 루핑하다가 숫자 8이나오면 break (break 사용)
let j = 0;
console.log(`----while + if----`);
while (j < 11) {
   if (j > 8) {
       break;
    }
    console.log(`Q2: ${j}`);
    j++;
}

console.log(`-----for + if-----`);
for (j = 0; j < 11; j++) {
    if (j > 8) {
        break;
    }
    console.log(`Q2: ${j}`);
}
