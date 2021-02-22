const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Server listening')
});