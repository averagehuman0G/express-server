var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.json({
		"a": "b",
		"c": "d"
	});
});

app.post("/post", (req, res) => {
	console.log(req.body);
});


app.listen(8080);
console.log("server is running");
