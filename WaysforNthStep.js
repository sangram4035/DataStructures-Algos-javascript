//In this question we need to find out number of possible ways to reach the nth step of a ladder.
//conditions are , a person can take 1 or 2 step at a time
//n will be the number of stairs
//        _ 
//      _|
//    _|
//  _|
// |
//this problem is very similar to finding the nth seq in fibo series.
//the only change is the change in base case
//In this question it's very evident that the base case will be as below
//1. no. of possible ways to get on first stair is 1
//2. no of possible ways to get on the second stair is 2
// rest all remains the same
function getFibonacciSeqNumber(n){
        if(n === 1){
            return 1;
        }
        else if(n === 2){
            return 2;
        }
        else{
            //calculation part
           var firstPreviousNumber = getFibonacciSeqNumber(n-1);
           var secondPreviousNumber = getFibonacciSeqNumber(n-2);
           var number = firstPreviousNumber + secondPreviousNumber;
        }
    return number;
}

console.log(getFibonacciSeqNumber(10));