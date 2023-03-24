var express = require('express');
var app = express();
var port = process.env.port || 5500;

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',function(req,res){
    res.render('index.html');
});

app.get('/addTwoNumbers',(req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = parseInt(number1) + parseInt(number2);
    res.json({statusCode:200, data:result, message:'Success'});
});

app.listen(port, () => {
    console.log('App listening to:' +port);
});