const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const TaskRoutes = require('./routes/tasks');
require('dotenv').config();
require('./config/passportConfig')(passport);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'your-secret',
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost:27017/db', { useNewUrlParser: true, useUnifiedTopology: true });

// Serve static files for frontend
app.use(express.static('public'));

// Auth routes
app.use('/', require('./routes/auth'));

// Task routes
app.use('/', TaskRoutes);

// Serve the task management page
app.get('/dashboard', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.sendFile(__dirname + '/views/dashboard.html');
});

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
app.get('/user-info', async (req, res) => {
    // Fetch the user from the database based on some identifier like req.userId
    const user = await User.findById(req.userId);  // Assume you have the user's ID in req.userId
    res.json({ name: user.name });
});
