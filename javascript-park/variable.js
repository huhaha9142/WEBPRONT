// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable, rw(읽고 쓰기 가능)
// let은 값을 선언과 할당이 자유롭게 가능
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'park';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (쓰지마!)
// var hoisting (어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어올림)
// var는 block 스코프가 없다
{
age = 4;
var age;
}
console.log(age);

// 3. Contant, r(읽기만 가능)
// const는 값을 선언하고 할당하면 값을 변경불가능
// 값을 할당한 다음에 값이 변경되지 않는 타입을 사용해라
// - 보안성
// - 쓰레드의 안정성
// - 실수 줄이기
const daysInWeek = 7;
const maxNumber = 5;

// tip!
// Immutable data types: 데이터 자체를 변경x (primitive type)
// Mutable data types: 모든 object type은 변경 가능
// 값을 할당한 다음에 값이 변경되지 않는 타입을 사용해라
// - 보안성
// - 쓰레드의 안정성
// - 실수 줄이기

// 4. variable types
// primitive single item: number, string, boolean, null, undefined, symbol
// object(single item을 여러개로 묶여서 박스로 관리하는것), box container
// function,

const count = 17; // 정수형 (integer)
const size = 17.1; // 소수점 넘버 실수형
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'Not a Number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// binInt (JS number는 (-2^53) ~ 2^53 까지 표현 더 큰 수는 bigInt로 표현
const bigInt = 1234567890123456789012345678901234567890n;   // <- n은 크롬에서만 표현가능
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//  String (char, string 문자, 문자열 모두 string 타입)
const char = 'c';
const park = 'park';
const greeting = 'hello' + park;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const hellohong = `hi ${park}!` // template literals (string)
console.log(`value: ${hellohong}, type: ${typeof hellohong}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : 어느 값이나 true
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null (null로 값이 할당이 된 경우)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined (선언은 되었지만 값이 할당 안된 경우)
let x = undefined;
let y;
console.log(`value: ${x}, type: ${typeof x}`);
console.log(`value: ${y}, type: ${typeof y}`);

// symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // error
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); 

// object
{
const park = { name: 'park', age: 32};
park.age = 32;
}
// 5. Dynamic Typing : 동적타입 언어
let text = 'hello';
console.log(text.charAt(0));    // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; //  '7' + '5' = '75'
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';   // 숫자를 나누는 / 를 사용한 경우 
                    // JS가 알아서 숫자와 숫자를 연산하는걸로 
                    // 판단하여 type은 number로 변환
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); // error
                                // string -> number 타입으로
                                // 바뀌어서 error

