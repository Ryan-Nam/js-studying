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
    const fruits = 'π, π₯, π, π';
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
    // *Spliceλ λΊ κ°μ return ν΄μ€λ€.
    const result = array.slice(2,5);    
    console.log(result);

    // Splice VS splice
    // - Splice : λ°°μ΄ μμ²΄λ₯Ό μμ 
    // - Slice : λ°°μ΄μ μμ νμ§μκ³ , λ°°μ΄μμ μνλ κ°λ§ κ°μ Έμ?.

    
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

    // μ΄κ±Έ Arror function μΌλ‘ μ°λ©΄, 1. 'function' μλ΅κ°λ₯ 2. return μλ΅κ°λ₯ 3. ','μλ΅κ°λ₯
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
    const result = students.map((student) => student.score * 2); // Map μ λ°°μ΄μμ μμλ€μ ν¨μλ₯Ό μ΄μ©ν΄ λ€λ₯Έ λ°©μμΌλ‘ λ§λ€μ μμ. => return μλ‘μ΄ λ°°μ΄
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result); // -> true
    // SOME 
    // μλμ§ μλμ§ νμΈ! (νλλΌλ μ‘°κ±΄μ΄ λ§μ‘±νλ©΄ True)  [νλλΌλ λ§μ‘±νλμ§ μλμ§ νμΈννλ©΄ -> some]
    const result2 = students.every((student) => student.score >= 50);
    console.log(result2); // -> false
    // Every
    // λͺ¨λ  μμκ° λ§μ‘±νλ©΄ True, νκ°λΌλ λ§μ‘±νμ§ λͺ»νλ©΄ False [λͺ¨λ  μ‘°κ±΄μ΄ λ§μ‘±λμ΄μΌνλ κ²½μ°λ₯Ό νμΈνλ €λ©΄ -> every]
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
  // Reduce : λ°°μ΄μ μμνλ©΄ λλ λκΉμ§ κ³μ κ°μ λμ νλκ΅¬λ λΌκ³  μ΄ν΄
  // ReduceRight: λ°°μ΄μ μ μΌ λ€λΆν° μμ (κ±°κΎΈλ‘)
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    console.clear();
    const result = students.map((student) => student.score).join(); 
    console.log(result);
  }
  // + add condition ( score > 50)  // μ΄λ κ² λ¬Άμ΄μ μ¬μ© κ°λ₯ => μ΄κ²λ€μ ν¨μν νλ‘κ·Έλλ°μ΄λΌκ³  κ·ΈλΌ
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

  // a,bλ₯Ό μ΄μ κ° νμ¬κ°μ΄λΌκ³  νκ³ 
  // a-b ν΄μ, λ§μ½ bκ° ν¬λ€λ©΄ κ°μ΄ - κ² μ§?

  {
    const result2 = students
      .map((student) => student.score)
      .sort((a,b)=> b-a)
      .join();
      console.log(result2);
  }
  // Decending Order