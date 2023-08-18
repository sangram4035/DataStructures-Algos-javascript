// In this problem we are identifying all the poosible cases in which returns all the possible combinations of properly formed braces.
//Properly formed denotes, if a bracket has opened, then it shall close as well.
//We will be using recursion and back tracking to achieve this
function generateParenthesis(n) {  
  //an array to store our result
  let result = [];  
  
  //This method keeps a track of the number of brackets to the left, number of brackets to the right and the string that is currently forming
 //left : number of left brackets remaining
 //right : number of right brackets remaining
  function backtrack(left, right, str) {  
    if (left === 0 && right === 0) {  
      result.push(str);  
      return;  
    }  
  
    if (left > 0) {  
      backtrack(left - 1, right, str + '(');  
    }  
  
    if (right > left) {  
      backtrack(left, right - 1, str + ')');  
    }  
  }  
  
  backtrack(n, n, '');  
  
  return result;  
}  
  
console.log(generateParenthesis(4));  
