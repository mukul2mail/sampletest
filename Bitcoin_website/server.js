var express = require("express");
var request = require("request");
var cheerio = require("cheerio");
var bodyparser = require("body-parser")
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyparser.json());
app.get('/btc', function(req, res){
var url = 'https://www.unocoin.com/';
setInterval(function(){
  var json;
  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var Name, Price;
      var json = { Name: "Bitcoin", Price: ""};

      $('#menubarbuyprice').filter(function(){
        var data = $(this);
        price = data.text();
        json.Price = price;
      });
    }

    res.end(JSON.stringify(json, null, 4));
    console.log(JSON.stringify(json, null, 4));
  });


  }, 3000);

});




app.listen('3000');
console.log("running on port 3000");
exports = module.exports = app;
