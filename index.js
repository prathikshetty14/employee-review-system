const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = 8000;


// Middleware and configurations
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const flash = require('connect-flash');
const customMware = require('./config/notymiddleware');
const db = require('./config/mongoose');


// Serve static files from the 'assets' directory
app.use(express.static('./assets'));


// Use express-ejs-layouts for layout management
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));


// Set up the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', './views');


// Session configuration using 'express-session' and 'cookie-parser'
app.use(cookieParser());
app.use(session({
    name: 'employee_review',
    // TODO: Change the secret before deployment
    secret: 'test',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 100 // Session timeout duration
    }
}));


// Initialize Passport and configure Passport Local Strategy
app.use(passport.initialize());
app.use(passport.session());


// Middleware to set authenticated user in locals
app.use(passport.setAuthenticatedUser);


// Flash messages using 'connect-flash' and custom middleware
app.use(flash());
app.use(customMware.setFlash);


// Extract styles and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// Use routes defined in './routes/index.js'
app.use('/', require('./routes/index'));


// Start the server
app.listen(port, function (error) {
    if (error) {
        console.log(`Error in running the server. Error is ${error}`);
    }
    console.log(`Server is up on port: ${port}`);
});
