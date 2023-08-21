//what is Fibonacci sequence?
//0 1 1 2 3 5 8 13 21 ......
//Fibonacci sequence is a series in which the next number is an addition of the previous 2 numbers
// The way to do it is using recursion and back tracking
//We will need 3 parts in our recursion- base component,small calculations

function getFibonacciSeqNumber(n){
        if(n === 1){
            return 1;
        }
        else if(n === 0){
            //as the sequesnce always starts with 0 and the 1, so the addition will always be 1
            return 0;
        }
        else{
            //calculation part
           var firstPreviousNumber = getFibonacciSeqNumber(n-1);
           var secondPreviousNumber = getFibonacciSeqNumber(n-2);
           var number = firstPreviousNumber + secondPreviousNumber;
        }
    return number;
}

console.log(getFibonacciSeqNumber(7));


function fibonacci(n) {  
  if (n <= 1) {  
    return n;  
  } else {  
    return fibonacci(n - 1) + fibonacci(n - 2);  
  }  
}  
  
function fibonacciSeries(num) {  
  let series = [];  
  for (let i = 0; i < num; i++) {  
    series.push(fibonacci(i));  
  }  
  return series;  
}  
  
// example usage  
// console.log(fibonacciSeries(10)); // returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]  
// console.log(fibonacci(7)); // returns 13  
