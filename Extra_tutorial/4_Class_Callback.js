class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0; //initialize to 0
        this.callback = runEveryFiveTimes;
    }

    increase() {// Class 에서 함수를 선언할땐 function 생략가능
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 ===0 ){ 
            this.callback && this.callback(this.counter);
        }
    } 
}

function printSomething(num) {
    console.log(`wow! ${num}`);
}

const printCounter = new Counter(printSomething);
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();