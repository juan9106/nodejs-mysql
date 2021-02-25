const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const methodOverride = require('method-override')
const morgan = require('morgan');

dotenv.config({ path: './.env' });

const app = express();
//const db = require('./config/db');
//const { env } = require('process');

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    methodOverride(function (req, res) {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            // look in urlencoded POST bodies and delete it
            let method = req.body._method
            delete req.body._method
            return method
        }
    })
)

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//routes
app.use('/', require('./routes/todo'));

app.listen(app.get('port'), () => {
    console.log('Server listening')
});