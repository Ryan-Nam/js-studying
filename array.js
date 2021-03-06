// Tutorial 8 - Array & APIs (https://www.youtube.com/watch?v=yOdAVDuHUKQ&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=8)
// 17.09.2021 

'use strict';

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2,3,4,5,];

// 2. Index position
const fruits = ['๐', '๐'];
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
fruits.push('๐', '๐', '๐ฅฅ','๐', '๐', '๐ฅ');
console.log(fruits);
fruits.forEach((fruit) => console.log(fruit));

// remove an item from the end => pop
fruits.pop();


// unshift => add an item to the begining
fruits.unshift('๐');

// shift: remove an item from the begining
fruits.shift();

// NOTE!! Shift and Unshift are much SLOWER than pop, push
// Unshift: ์ ์ ์ ๋ฐฐ์ด์๋ค ๋ฃ๊ธฐ: ๋ชจ๋  ์ธ๋ฑ์ค๋ฅผ ๋ค๋ก ํ์นธ์ฉ ์ฎ๊ธฐ๊ณ  ์ ์ผ ์์ ์ธ๋ฑ์ค๋ฅผ ์ถ๊ฐํ๊ธฐ ๋๋ฌธ
// shift: ์ ์ผ ์์ ๊ฐ์ ์ ๊ฑฐ: ์ ์ผ ์์ ์ธ๋ฑ์ค๋ฅผ ์ ๊ฑฐํ๊ณ  ๋ชจ๋  ์ธ๋ฑ์ค๋ฅผ ์์ผ๋ก ํ์นธ์ฉ ์ฎ๊ธฐ๊ธฐ ๋๋ฌธ
// 

// To sum up, Stack์ ์ฌ์ฉ: ๋ค์ ๊ฐ๋ค์ ๋นผ๊ณ  ๋ฃ์๋,
// ์ค๊ฐ์ ๊ฐ์ ๋ฃ๊ณ  ๋บ๋๋ ์ธ๋ฑ์ค๋ฅผ ์ฌ์ฉํด


// Splice: remove an item by index position
fruits.splice(1); // ์ง์ ํ ์ธ๋ฑ์ค๋ถํฐ ์ญ~~ ์ง์๋ฒ๋ฆผ
fruits.splice(1,1); // index 1๋ถํฐ ํ๊ฐ๋ฅผ ์ง์ด๋ค.
fruits.splice(1,1, 'add', 'add'); // 1๋ถํฐ ํ๊ฐ๋ฅผ ์ง์ฐ๊ณ  ๋ค์ string ์ ๋ฃ์ด์ค
fruits.splice(1,0, 'add', 'add'); // ์๋ฌด๊ฒ๋ ์ง์ฐ์ง ์๊ณ , ์ฆ, index[1] ๋ถํฐ 'add', 'add' ๋ฅผ ๋ฃ์ด์ค.!!!! 
// ์ฆ, ์ค๊ฐ์ ๋ฐ์ดํฐ๋ฅผ ์ฌ๋ฌ๊ฐ ๋ฃ์๋ ์ข์์ง๋???

// combine two arrays
const fruits2 = ['๐','๐','๐','๐ฅ'];
const newFruits = fruits.concat(fruits2);

// 5. Searching
// indexOf => Find the Index
console.clear();
const fruits3 = ['๐','๐','๐','๐ฅ'];
console.log(fruits3);
console.log(fruits3.indexOf('๐')); // -> 2
console.log(fruits3.indexOf('๐ฅฅ')); // -> -1 (๋ฐฐ์ด์์ ์๋ ๊ฐ์ ์ถ๋ ฅํ๋ฉด return -1)

// includes 
console.log(fruits3.includes('๐')); // -> true (whether exits or not)

// lastIndexOf 
console.clear();
console.log(fruits3);
console.log(fruits3.push('๐'));
console.log(fruits3);
console.log(fruits3.indexOf('๐')); // -> 0
console.log(fruits3.lastIndexOf('๐')); // -> 4 (๋งจ ๋ง์ง๋ง์ index๊ฐ return)
