// False: 0, -0, '', null, NaN, undefined, let num -> undefined
// True: -1. 'hello', [] (텅빈 배열), 'false'

let obj = { 
    name: 'Ryan'
}; // -> undefined => false
if(obj){
    console.log(obj.name);
} 
obj && console.log(obj.name); // == If 구문과 동일, 한줄로 깔끔하기때문에 이렇게 많이 씀.