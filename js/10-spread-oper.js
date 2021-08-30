console.log("============ 배열 전개 연산");

var arr1 = ['박성칠', '이경미'];
var arr2 = ['박상혁', '박상범'];
console.log(arr1, arr2);
//  기존 방식 합치기
var combined = [];  //  빈배열
//  첫 번째 방법
combined = [arr1[0], arr1[1], arr2[0], arr2[1]];
console.log("combined 1:", combined);

//  두 번째 방법: concat
combined = arr1.concat(arr2);
console.log("combined 2:", combined);

//  세 번째 방법: concat
combined = [].concat(arr1, arr2);
console.log("combined 3:", combined);

//  ES6 방식
combined = [...arr1, ...arr2];  //  간결하고 편리한 방식
console.log("combined 4:", combined);

//  배열의 전개
console.log("============== 배열의 전개");
console.log("원본배열:", arr1);
var [first, second, third="empty", ...others] = arr1;
console.log(first, second, third, others);
//  박성칠 이경미 empty []

console.log("원본배열:", combined);
var [first, second, third="empty", ...others] = combined;
console.log(first, second, third, others);
//  박성칠 이경미 박상혁 [ '박상범' ]

console.log("=============== 객체 전개 연산");
var obj1 = { one: 1, two: 2, other: 0}
var obj2 = { three: 3, four: 4, other: -1 }

//  기존 방식 1
var combined = {
    one: obj1.one,
    two: obj1.two,
    three: obj2.three,
    four: obj2.four,
    other: obj2.other
}
console.log("obj1:", obj1);
console.log("obj2:", obj2);
console.log("combined 1:", combined);

//  방법 2: Object 객체 이용
combined = Object.assign({}, obj1, obj2);
console.log("combined 2:", combined);
//  연결 순서 바꾸기
combined = Object.assign({}, obj2, obj1);
console.log("combined 3:", combined);

//  ES6 방식
combined = {
    ...obj1,    //  obj1의 모든 속성을 전개
    ...obj2     //  obj2의 모든 속성을 전개
}

console.log("ES6 combined:", combined);

//  전개 순서를 obj2, obj1 순서로 전개 해서 결과 비교
// combined = {
//     ...obj2,    //  obj1의 모든 속성을 전개
//     ...obj1     //  obj2의 모든 속성을 전개
// }

// console.log("ES6 combined 2:", combined);

//  객체의 전개
console.log("원본:", combined);
var { one, three, ...others } = combined;
console.log(one, three, others);
// 1 3 { two: 2, other: -1, four: 4 }



