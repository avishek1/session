/**
 * Created by dev on 15/02/17.
 */
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.set('views', _dirname +'/view');
app.engine('html', require('ejs').renderFile);

app.use(session({secret:'ssshhhhh'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var sess;

app.get('/' ,function(req,res){
    sess = req.session;
    //Session sety when user Request our app via URL
    if(sess.email){
        res.redirect('/admin');
    }
    else {
        res.render('index.html');
    }
});