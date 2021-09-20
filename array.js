// Tutorial 8 - Array & APIs (https://www.youtube.com/watch?v=yOdAVDuHUKQ&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=8)
// 17.09.2021 

'use strict';

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2,3,4,5,];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length); 
console.log(fruits[100]); // undefined 

// Finding FIRST index
console.log(fruits[0]);
// Finding LAST index
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
console.clear();
// a. for
for (let i = 0; i < fruits.length; i ++) {  // Do not use 'int'
    console.log(fruits[i]);
}
// b. for of
for (let arr of fruits){      // Do not forget 'let' infront of value
    console.log(arr);     
}
// c. for each (api)
console.clear();
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletetion, copy
// Add an item to the ed => push
fruits.push('🍓', '🍏', '🥥','🍑', '🍒', '🥝');
console.log(fruits);
fruits.forEach((fruit) => console.log(fruit));

// remove an item from the end => pop
fruits.pop();


// unshift => add an item to the begining
fruits.unshift('🍑');

// shift: remove an item from the begining
fruits.shift();

// NOTE!! Shift and Unshift are much SLOWER than pop, push
// Unshift: 제잎 앞 배열에다 넣기: 모든 인덱스를 뒤로 한칸씩 옮기고 제일 앞에 인덱스를 추가하기 때문
// shift: 제일 앞의 값을 제거: 제일 앞의 인덱스를 제거하고 모든 인덱스를 앞으로 한칸씩 옮기기 때문
// 

// To sum up, Stack을 사용: 뒤의 값들을 빼고 넣을때,
// 중간의 값을 넣고 뺄때는 인덱스를 사용해


// Splice: remove an item by index position
fruits.splice(1); // 지정한 인덱스부터 쭉~~ 지워버림
fruits.splice(1,1); // index 1부터 한개를 지운다.
fruits.splice(1,1, 'add', 'add'); // 1부터 한개를 지우고 뒤의 string 을 넣어줌
fruits.splice(1,0, 'add', 'add'); // 아무것도 지우지 않고, 즉, index[1] 부터 'add', 'add' 를 넣어줌.!!!! 
// 즉, 중간에 데이터를 여러개 넣을때 좋을지도???

// combine two arrays
const fruits2 = ['🍋','🍑','🍒','🥝'];
const newFruits = fruits.concat(fruits2);

// 5. Searching
// indexOf => Find the Index
console.clear();
const fruits3 = ['🍋','🍑','🍒','🥝'];
console.log(fruits3);
console.log(fruits3.indexOf('🍒')); // -> 2
console.log(fruits3.indexOf('🥥')); // -> -1 (배열안의 없는 값을 출력하면 return -1)

// includes 
console.log(fruits3.includes('🍒')); // -> true (whether exits or not)

// lastIndexOf 
console.clear();
console.log(fruits3);
console.log(fruits3.push('🍋'));
console.log(fruits3);
console.log(fruits3.indexOf('🍋')); // -> 0
console.log(fruits3.lastIndexOf('🍋')); // -> 4 (맨 마지막의 index가 return)
