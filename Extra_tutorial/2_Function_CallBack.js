// Function
function add(num1,num2){
    return num1+num2;
}
const doSomthing = add; // Add 함수를 다른 변수에 할당하면, doSomthing 이라는 메모리에 Add 함수의 주소(ref)를 할당하는 것.
const result = doSomthing(1,2);

// Callback
function surprice(operator) {
    const result = operator(2,3);
    console.log(result);
}
//surprice();  -> Error (because no parameter)
surprice(add);