const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/layout');


app.use(expressLayouts);
app.use(express.static('public'));


// Routes
app.use('/', indexRouter)
app.use('/users', userRouter);



// Listening At Port
app.listen(PORT, () => {
    console.log("Listening at http://localhost:3000");
});
