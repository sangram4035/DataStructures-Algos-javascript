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
