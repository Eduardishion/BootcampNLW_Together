"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
/*
* Get    => Search info
* Post   => Insert info
* Put    => Change info
* Delete => Remove info
* PATH   => Change specific info
*/
app.get("/test", function (request, response) {
    /*
    * Req = Request  => Entrando
    * Res = Response => Saindo
    */
    return response.send("Hello, GET");
});
app.post("/test-post", function (request, response) {
    /*
    * Req = Request  => Entrando
    * Res = Response => Saindo
    */
    return response.send("Hello, POST");
});
//Aqui onde iniciaremos o webserver! com a porta padrão 3000
app.listen(3000, function () { return console.log("Server is running"); });
