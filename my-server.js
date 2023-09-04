var http = require('http');
http.createServer(function (req, res) {
  res.write('Local Ongoing Execution!');
  res.end();
}).listen(3000, function(){
 console.log("Server running at port 3000");
});
