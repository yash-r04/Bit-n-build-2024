// app.js
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const User = require('./models/User');
const authRoutes = require('./routes/auth');

const app = express();

mongoose.connect('mongodb://localhost:27017/auth-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
