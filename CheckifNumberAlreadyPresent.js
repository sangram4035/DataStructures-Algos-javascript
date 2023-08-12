// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end("done");
//   console.log(printResult());
// }).listen(8090);
function printResult(){
   let inputarray = [1,2,3,4,67,8,3,8,1,5,10,89,6,43,754,7656,325]
   let hastable = {}

   for(var i = 0;i<inputarray.length;i++){
    hastable[i] = inputarray[i];
    for(var j = 0;j<inputarray.length;j++)
    {
        if(j != i){
            if(Object.values(hastable).includes(inputarray[j])){               
                    return false;
            }
        }
    }
   }
}

var result = printResult();
console.log(result);