// Tutorial 8 - Array & APIs (https://www.youtube.com/watch?v=3CUjtKJ7PJg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=9)
// 19.09.2021 


// Q1. make a string out of an array
  {
    const fruits = ['apple', 'banana', 'orange'];
    // My answer:
    for (let i = 0 ; i < fruits.length; i ++) {
      console.log(fruits[i]);
    }
    // Better Answer: + Use API
    const result = fruits.join(',and '); // Separator is not essential, but ',' is default.
    console.log(result);
  }

  
  // Q2. make an array out of a string
  {
    console.clear();
    const fruits = '🍎, 🥝, 🍌, 🍒';
    // My answer: == best answer + String API (.split())
    const result = fruits.split(', ', 2); // *Splitter, whatever originally have such as ' ', '\', ',' etc....    + limit (optional) 
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    console.clear();
    const array = [1, 2, 3, 4, 5];
    // My answer:
    // Stack use
    reverse();

    function reverse(){
      let stack = [];

      for ( let i = 0; i <array.length; i ++){
        stack.push(array[i]);
      }



      let reverseStr = [];
      while (!stack.length == 0 ) {
        reverseStr = reverseStr + stack.pop();
      }

      return console.log(reverseStr);
    }

    // Best answer: Use API (Reverse)
    const result = array.reverse();
    console.log(result);
    console.log(array); // Plus +, array[] also reversed as well, not only result[]
    
  }
  
  // Q4. make new array without the first two elements
  {
    console.clear();
    const array = [1, 2, 3, 4, 5];
    
    // my Answer: removing first two elements are not possible with Stack, so use 'splice'
    // const result = array.concat();
    // result.splice(0,2); // 
    // console.log(result);
    // console.log(array);

    //Best Answer
    // *Splice는 뺀 값을 return 해준다.
    const result = array.slice(2,5);    
    console.log(result);

    // Splice VS splice
    // - Splice : 배열 자체를 수정
    // - Slice : 배열을 수정하지않고, 배열에서 원하는 값만 가져옮.

    
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    console.clear();
    // const resut = students.find(function(value, index){
    //   return value.score === 90;
    // })

    // 이걸 Arror function 으로 쓰면, 1. 'function' 생략가능 2. return 생략가능 3. ','생략가능
    const result = students.find((student) => student.score === 90);
    console.log(result.name);
    
   
  }
  
  // Q6. make an array of enrolled students
  {
    console.clear();
    // const result = students.filter(function(student) {
    //   return student.enrolled == true;
    // });
    const result = students.filter((student) => student.enrolled);
    console.log(result);
    
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    console.clear();
    const result = students.map((student) => student.score * 2); // Map 은 배열안의 요소들을 함수를 이용해 다른 방식으로 만들수 있음. => return 새로운 배열
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result); // -> true
    // SOME 
    // 있는지 없는지 확인! (하나라도 조건이 만족하면 True)  [하나라도 만족하는지 아닌지 확인하혀면 -> some]
    const result2 = students.every((student) => student.score >= 50);
    console.log(result2); // -> false
    // Every
    // 모든 요소가 만족하면 True, 한개라도 만족하지 못하면 False [모든 조건이 만족되어야하는 경우를 확인하려면 -> every]
  }
  
  // Q9. compute students' average score
  {
    console.clear();
    const result = students.reduce((pre, cur) => {
      console.log('---');
      console.log(pre);
      console.log(cur);
      return pre + cur.score;
    }, 0);
    console.log(result/students.length);
  }
  // Reduce : 배열을 시작하면 끝날때까지 계속 값을 누적하는구나 라고 이해
  // ReduceRight: 배열의 제일 뒤부터 시작 (거꾸로)
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    console.clear();
    const result = students.map((student) => student.score).join(); 
    console.log(result);
  }
  // + add condition ( score > 50)  // 이렇게 묶어서 사용 가능 => 이것들을 함수형 프로그래밍이라고 그럼
  {
    console.clear();
    const result = students
      .map((student) => student.score)
      .filter(score => score >= 50)
      .join(); 
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'

  {
    const result = students
      .map((student) => student.score)
      .sort((a,b)=> a-b)
      .join();
      console.log(result);
  }

  // a,b를 이전값 현재값이라고 하고
  // a-b 해서, 만약 b가 크다면 값이 - 겠지?

  {
    const result2 = students
      .map((student) => student.score)
      .sort((a,b)=> b-a)
      .join();
      console.log(result2);
  }
  // Decending Order