// server.js

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const app = express();
const PORT = 3000;

// --- 1. MongoDB Connection ---
const MONGODB_URI = 'mongodb://localhost:27017/authDB'; // CHANGE 'authDB' to your database name

mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected successfully! ✅'))
    .catch(err => console.error('MongoDB connection error: ❌', err));

// --- 2. Mongoose Schema and Model ---
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Pre-save hook to hash the password
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const User = mongoose.model('User', userSchema);

// --- 3. Middleware Setup ---
app.use(express.urlencoded({ extended: true })); // To parse form data
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (HTML, CSS)

// Session setup
app.use(session({
    secret: 'a_very_secret_key_change_this', // Replace with a strong, random key
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 } // 1 hour
}));

// --- 4. Routes ---

// Default route (serves index.html which has the signup form)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// --- SIGNUP Route (from index.html form) ---
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password });
        await newUser.save();
        console.log(`User ${username} signed up.`);
        res.send('Signup successful! <a href="/login.html">Go to Login</a>');
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).send('User already exists. <a href="/">Try again</a>');
        }
        res.status(500).send('Error signing up.');
    }
});

// --- LOGIN Route (from login.html form) ---
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).send('Invalid username or password. <a href="/login.html">Try again</a>');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid username or password. <a href="/login.html">Try again</a>');
        }

        // Login successful - Set session
        req.session.userId = user._id;
        res.send(`Login successful! Welcome, ${username}! <a href="/logout">Logout</a>`);

    } catch (err) {
        res.status(500).send('Server error during login.');
    }
});

// --- LOGOUT Route ---
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Could not log out.');
        }
        // Redirect to login page or a logout confirmation page
        res.sendFile(path.join(__dirname, 'public', 'logout.html'));
    });
});

// --- 5. Start Server ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 🚀`);
});