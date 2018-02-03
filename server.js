var express = require("express");
var port = 3001;
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var methodOverride = require('method-override');
var app = express();

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/chartbuilder");

app.use(express.static(__dirname + '/'));

var chartSchema = new mongoose.Schema({
  rowOne: {
    category: String,
    seriesA: Number,
    seriesB: Number,
    seriesC: Number,
    seriesD: Number,
    seriesE: Number
  },
  rowTwo: {
    category: String,
    seriesA: Number,
    seriesB: Number,
    seriesC: Number,
    seriesD: Number,
    seriesE: Number
  },
  rowThree: {
    category: String,
    seriesA: Number,
    seriesB: Number,
    seriesC: Number,
    seriesD: Number,
    seriesE: Number
  },
  rowFour: {
    category: String,
    seriesA: Number,
    seriesB: Number,
    seriesC: Number,
    seriesD: Number,
    seriesE: Number
  },
  rowFive: {
    category: String,
    seriesA: Number,
    seriesB: Number,
    seriesC: Number,
    seriesD: Number,
    seriesE: Number
  },
  rowSix: {
    category: String,
    seriesA: Number,
    seriesB: Number,
    seriesC: Number,
    seriesD: Number,
    seriesE: Number
  },
  rowSeven: {
    category: String,
    seriesA: Number,
    seriesB: Number,
    seriesC: Number,
    seriesD: Number,
    seriesE: Number
  },
  rowEight: {
    category: String,
    seriesA: Number,
    seriesB: Number,
    seriesC: Number,
    seriesD: Number,
    seriesE: Number
  },
  rowNine: {
    category: String,
    seriesA: Number,
    seriesB: Number,
    seriesC: Number,
    seriesD: Number,
    seriesE: Number
  },
  rowTen: {
    category: String,
    seriesA: Number,
    seriesB: Number,
    seriesC: Number,
    seriesD: Number,
    seriesE: Number
  },
  rowEleven: {
    category: String,
    seriesA: Number,
    seriesB: Number,
    seriesC: Number,
    seriesD: Number,
    seriesE: Number
  },
  rowTwelve: {
    category: String,
    seriesA: Number,
    seriesB: Number,
    seriesC: Number,
    seriesD: Number,
    seriesE: Number
  },
  rowThirteen: {
    category: String,
    seriesA: Number,
    seriesB: Number,
    seriesC: Number,
    seriesD: Number,
    seriesE: Number
  },
  rowFourteen: {
    category: String,
    seriesA: Number,
    seriesB: Number,
    seriesC: Number,
    seriesD: Number,
    seriesE: Number
  },
  rowFifteen: {
    category: String,
    seriesA: Number,
    seriesB: Number,
    seriesC: Number,
    seriesD: Number,
    seriesE: Number
  }
});

var Chart = mongoose.model("Chart", chartSchema);

// ROOT ROUTE
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// CREATES JSON + SAVES TO DB
app.post('/addchart', function(req, res) {
  var myData = new Chart(req.body);
  console.log('myData is:', myData);

  myData.save(function(error){
    //return every record in the database
    Chart.find({}).exec(function (err, charts) {
      var str = null;

      if (!err) {
      //stringify the database search result
      str = JSON.stringify(charts, undefined, 2);

      //deliver the json
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Content-Disposition": 'attachment; filename=chart-data.json'
      });
        res.end(str);
      } else {
        res.end("Error in first query. " + err)
      };
    });
  });
});




app.listen(port, function() {
    console.log("Server listening on port " + port);
});
