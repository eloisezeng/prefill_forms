const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const session = require('express-session')
const app = express();

// Mongodb config
const db = require('./config/keys').MongoURI

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

// EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')

// Bodyparser
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/', require('./routes/index'))
app.use('/wrt', require('./routes/index'))
app.use('/whs-test-kit', require('./routes/index'))
const PORT = process.env.PORT || 3000;

// Express Session Middleware
app.use(session({
    secret: 'keyboard cat', // doesn't matter
    resave: true,
    saveUninitialized: true,
}))

app.listen(PORT, console.log(`Server started on port ${PORT}`));