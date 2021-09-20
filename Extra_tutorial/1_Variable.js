// Primitive Type: number, string, boolean, null, undefined
let num = 2;
let num2;
// 데이터 자체에 값이 들어있음

// Object: 한 두가지 이상의 큰 데이터들....Array, List, function, 위의것들을 제외한 것들
const obj = { name: 'ryan', age:5};
// 주소가 복사되어 들어옴 (Reference)
const obj2 = obj; // Reference 가 복사

obj.name = 'james';
console.log(obj2.name);


// LET VS CONST
let a = 2;
a = 5;
a = 9;

const b = 3;
b = 4;
// object 는 const 로 해도 변경가능 하지만, obj.으로 접근해서 변경해야함
// object reference 자체를 바꾸지는 못해. const 니까.