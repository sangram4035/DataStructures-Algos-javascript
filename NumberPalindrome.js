//There are other ways as well to do this problem. Like converting the number to string and then reversing the string and then converting it back to number.
//But the above solution do not use any of the DSA topics.
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("done");
  console.log(printResult());
}).listen(8090);

function printResult(){
  //consider this as an input
    let number = 121;
    let input = number;
  //this condition will always return false because a negative integer can never be a palindrome
    if(number < 0){
        return false;
    } 
    else{
        let result = 0;
      //How the loop works

      //In first Loop
      //digit = 123 % 10 = 3
      //res = 0*10+3 =3 
      //number = 123/10 = 12

      //In second loop
      //digit = 12 % 10 = 2
      //res = 3*10+2 =32
      //number = 12/10= 1
      //and so on
        while(number>0){
            const digit = number % 10;
            result = result*10 + digit;
            number = Math.floor(number/10)
        }  
        if(result == input){
          return true;
        }
    }
}
