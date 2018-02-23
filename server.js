const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require("express-handlebars");

const app = express();
const port = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'))
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
	res.render('index')
})






app.listen(port, function(){
	console.log(`App listening on port: ${port}`)
})