var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("done");
  console.log(printResult());
}).listen(8090);

function printResult(){
    let number = 121;
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
        return  result;  
    }
}