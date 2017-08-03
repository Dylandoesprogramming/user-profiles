const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const config = require('./config')
const profileCtrl = require('./controllers/profileCtrl')
const userCtrl = require('./controllers/userCtrl')
const corsOptions = {
    origin: 'http://localhost:8999'
};

let app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"))
app.use(cors(corsOptions));
app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,
}));


app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.getFriendsProfiles);

app.listen(3000, function() {
    console.log('Listening port 3000')
})