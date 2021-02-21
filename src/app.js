const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');
const app = express();


//settings
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log('Server listening')
});