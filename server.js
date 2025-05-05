//var http = require('http');
//http.createServer(function(request, response){
	//response.write("Hello World!");
	//response.end(); //close connection
//}).listen(80); //http port

//console.log('Now, listening on port 8080');

//var express = require("express");
//const { Server } = require("http");
//var Server = express();
//Server.get("/",function(req,res){ //web root
 	//res.send("Hello, World!"); //回傳固定內容
 //});
 //Server.get("/md",function(req,res){ //other pages
 	//res.send("req /md");
 //});
 //Server.listen(80);
//console.log("Express run on port: 80");


var express = require("express");
//const { Server } = require("http"); // 如果你真的需要 http.Server（目前看起來沒用到）
var server = express();
server.use(express.static(__dirname+"public")); // 提供靜態檔案的路徑
// __dirname 是 Node.js 提供的變數，代表當前檔案所在的目錄
// 這行是用來提供靜態檔案的路徑，
// 例如 public 資料夾裡的檔案可以直接透過 http://localhost/filename 來存取

//var app = express(); // 把這行從 Server 改為 app
//app.get("/", function(req, res) {
    //res.send("Hello, World!!!"); // 回傳固定內容
    //console.log(req); // 如果需要查看請求的詳細資訊，可以取消註解這行
//});
server.get("/game", function(req, res) {
    res.send("req /md");
});
server.listen(80);

