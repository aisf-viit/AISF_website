// const express = require('express');
// const path = require("path");
// const bcrypt = require("bcrypt");
// const { MongoClient } = require('mongodb');
// const app = express();

//const { default: mongoose } = require("mongoose");

// // Convert data into JSON format
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Use EJS as view engine
// app.set('view engine', 'ejs');
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, 'views')));

// // Static file
// app.use(express.static("public"));

// // MongoDB connection URL
// const mongoURI = 'mongodb://localhost:27017/aisf'; // Update with your MongoDB connection URL

// // Route for rendering login page
// app.get("/", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'index.ejs'));
// });

// // Route for serving style1.css
// app.get('/style1.css', (req, res) => {
//     res.setHeader('Content-Type', 'text/css');
//     res.sendFile(path.join(__dirname, 'views', 'style1.css'));
// });

// // Route for rendering signup page
// app.get("/signup", (req, res) => {
//     res.render("join_us_signup.ejs");
// });

// // Register user
// app.post("/signup", async (req, res) => {
//     try {
//         // Connect to MongoDB
//         const client = new MongoClient(mongoURI);
//         await client.connect();

//         const db = client.db('aisf'); // Update with your database name
//         const collection = db.collection('users');

//         const data = {
//             name: req.body.username,
//             email: req.body.email,
//             password: req.body.password
//         };

//         // Check if the user already exists in the database
//         const existingUser = await collection.findOne({ name: data.name });
//         if (existingUser) {
//             res.send("User already exists. Please choose a different username.");
//         } else {
//             // Hash the password using bcrypt
//             const saltRounds = 10;
//             const hashedPassword = await bcrypt.hash(data.password, saltRounds);
//             data.password = hashedPassword;

//             // Insert the user data into the database
//             await collection.insertOne(data);
//             console.log("User registered successfully!");
//             res.send("User registered successfully!");
//         }

//         // Close the MongoDB connection
//         await client.close();
//     } catch (error) {
//         console.error("Error during user registration:", error);
//         res.status(500).send("Error during user registration. Please try again later.");
//     }
// });

// // Route for submitting the contact form
// app.post('/submit_form', async (req, res) => {
//     try {
//         const client = new MongoClient(mongoURI);
//         await client.connect();

//         const db = client.db('aisf');
//         const collection = db.collection('participant_info');

//         const data = {
//             name: req.body.name,
//             email: req.body.email,
//             message: req.body.message
//         };

//         await collection.insertOne(data);
//         console.log("Contact form submission saved successfully!");
//         res.status(200).send("Message sent successfully!");
        
//         await client.close();
//     } catch (error) {
//         console.error("Error saving contact form submission:", error);
//         res.status(500).send("Failed to send message.");
//     }
// });

// // Login user
// app.post("/login", async (req, res) => {
//     let client;
//     try {
//         client = new MongoClient(mongoURI);
//         await client.connect();
//         const db = client.db('aisf');
//         const collection = db.collection('users');

//         const user = await collection.findOne({ email: req.body.email });
//         if (!user) {
//             res.redirect("/join_us_signup.ejs");
//             return;
//         }

//         const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
//         if (isPasswordMatch) {
//             res.redirect("/events");
//         } else {
//             res.send("Wrong password");
//         }
//     } catch (error) {
//         console.error("Error during user login:", error);
//         res.status(500).send("Error during user login. Please try again later.");
//     } finally {
//         if (client) {
//             await client.close();
//         }
//     }
// });

// app.get("/index", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'index.ejs'));
// });

// app.get("/home", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'index.ejs'));
// });

// app.get("/about_us", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'about_us.ejs'));
// });

// app.get("/our_committee", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'our_committee.ejs'));
// });

// app.get("/contact_us", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'contact_us.ejs'));
// });

// app.get("/join_us", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'join_us.ejs'));
// });

// const port = 5000;
// app.listen(port, () => {
//     console.log(`Server running on port: ${port}`);
// });



























// const mongoose = require('mongoose');
// const express = require('express');
// const path = require("path");
// const app = express();
// const router=new express.Router();
// const nodemailer=require("nodemailer");
// var bcrypt=require("bcrypt");
// const jwt=require("jsonwebtoken");
// require('dotenv').config();
// //const bcrypt = require("bcrypt");
// const User = require('../src/models/User'); // Adjust the path as necessary
// app.use(express.json());
// const cors = require("cors");
// app.use(cors());
// app.use(express.urlencoded({ extended: false }));
// // const mongoose = require('mongoose');
// // const express = require('express');
// // const path = require("path");
// // const bcrypt = require("bcrypt");
// // const User = require('../src/models/User'); // Ensure the path is correct

// // const app = express();
// const mongoURI =  'mongodb+srv://Ashish_Deshmukh:Satara%40123@cluster0.g87yxcn.mongodb.net/aisf?retryWrites=true&w=majority';
// const crypto = require('crypto');
// const keysecret = crypto.randomBytes(32).toString('hex'); // 64 hex characters
// console.log(keysecret);




// mongoose.set('debug', true); // Enable detailed logging

// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
//     socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
//     connectTimeoutMS: 10000 // Time out after 10s if not connected
// }).then(() => {
//     console.log('MongoDB connection successful');
// }).catch((err) => {
//     console.error('Failed to connect to MongoDB:', err);
// });

// // Convert data into JSON format
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Use EJS as view engine
// app.set('view engine', 'ejs');
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, 'views')));

// // Static file
// app.use(express.static("public"));

// // Route for rendering login page
// app.get("/", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'index.ejs'));
// });

// app.get("/join_us_signup.ejs", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'join_us_signup.ejs'));
// });

// app.get("/join_us.ejs", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'join_us.ejs'));
// });

// // Route for serving style1.css
// app.get('/style1.css', (req, res) => {
//     res.setHeader('Content-Type', 'text/css');
//     res.sendFile(path.join(__dirname, 'views', 'style1.css'));
// });

// // Route for rendering signup page
// app.get("/signup", (req, res) => {
//     res.render("join_us_signup.ejs");
// });

// // Register user
// app.post("/signup", async (req, res) => {
//     try {
//         const { username, email, password } = req.body;

//         // Log the incoming request data
//         console.log("Received signup request for:", { username, email });

//         // Check if the user already exists in the database
//         const existingUser = await User.findOne({ name: username });
//         if (existingUser) {
//             console.log("User already exists:", username);
//             return res.send("User already exists. Please choose a different username.");
//         }

//         // Hash the password using bcrypt
//         const saltRounds = 10;
//         const hashedPassword = await bcrypt.hash(password, saltRounds);

//         // Log hashed password
//         console.log("Hashed password:", hashedPassword);

//         // Create a new user
//         const newUser = new User({
//             name: username,
//             email: email,
//             password: hashedPassword
//         });

//         // Save the user in the database
//         await newUser.save();

//         // Log success message
//         console.log("User registered successfully:", username);
//         res.redirect("/join_us.ejs");
//     } catch (error) {
//         console.error("Error during user registration:", error);
//         res.status(500).send("Error during user registration. Please try again later.");
//     }
// });

// // Route for submitting the contact form
// app.post('/submit_form', async (req, res) => {
//     try {
//         const db = mongoose.connection;
//         const collection = db.collection('participant_info');

//         const data = {
//             name: req.body.name,
//             email: req.body.email,
//             message: req.body.message
//         };

//         await collection.insertOne(data);
//         console.log("Contact form submission saved successfully!");
//         res.status(200).send("Message sent successfully!");
//     } catch (error) {
//         console.error("Error saving contact form submission:", error);
//         res.status(500).send("Failed to send message.");
//     }
// });

// // Login user
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({ email: email });
//         if (!user) {
//             res.redirect("/join_us_signup.ejs");
//             return;
//         }

//         const isPasswordMatch = await bcrypt.compare(password, user.password);
//         if (isPasswordMatch) {
//             res.redirect("/index");
//         } else {
//             res.send("Wrong password");
//         }
//     } catch (error) {
//         console.error("Error during user login:", error);
//         res.status(500).send("Error during user login. Please try again later.");
//     }
// });

// app.get("/events", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'events.ejs'));
// });

// app.get("/index", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'index.ejs'));
// });

// app.get("/home", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'index.ejs'));
// });

// app.get("/about_us", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'about_us.ejs'));
// });

// app.get("/our_committee", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'our_committee.ejs'));
// });

// app.get("/contact_us", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'contact_us.ejs'));
// });

// app.get("/join_us", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'events.ejs'));
// });

// app.get("/forgotpass", (req, res) => {
//     res.render(path.join(__dirname, 'views', 'html_files', 'forgotpass.ejs'));
// });

// app.get('/reset_password', (req, res) => {
//     const token = req.query.token;
//     res.render(path.join(__dirname, 'views', 'html_files', 'reset_password.ejs'), { token });
// });



// // const port = 5000;
// // app.listen(port, () => {
// //     console.log(`Server running on port: ${port}`);
// // });








// //Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));


// // Nodemailer transporter setup
// const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass:  process.env.EMAIL_PASS
//     }
// });

// // Forgot Password Route
// app.post('/forgot_password', async (req, res) => {
//     try {
//         const { email } = req.body;

//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).send('User not found');
//         }

//         const token = jwt.sign({ userId: user._id }, keysecret, { expiresIn: '1h' });
//         user.resetToken = token;
//         user.resetTokenExpiration = Date.now() + 3600000; // 1 hour
//         await user.save();

//         const mailOptions = {
//             from: 'ashish.22211117@viit.ac.in',
//             to: user.email,
//             subject: 'Password Reset',
//             text: `You requested a password reset. Click the following link to reset your password: http://localhost:5000/reset_password?token=${token}`
//         };

//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 return console.error('Error sending email:', error);
//             }
//             console.log('Email sent:', info.response);
//             res.send('Password reset email sent');
//         });
//     } catch (error) {
//         console.error('Error during forgot password process:', error);
//         res.status(500).send('Error during forgot password process. Please try again later.');
//     }
// });





// app.post('/reset_password', async (req, res) => {
//     try {
//         const { email, password, token } = req.body;

//         // Verify the token
//         const decoded = jwt.verify(token, keysecret);
//         const user = await User.findOne({ _id: decoded.userId, email });

//         if (!user) {
//             return res.status(404).json({ error: 'User not found' });
//         }

//         // Check if the token is still valid
//         if (user.resetToken !== token || user.resetTokenExpiration < Date.now()) {
//             return res.status(400).json({ error: 'Token is invalid or has expired' });
//         }

//         // Hash the new password
//         const saltRounds = 10;
//         const hashedPassword = await bcrypt.hash(password, saltRounds);

//         // Update user's password
//         user.password = hashedPassword;
//         console.log('Password reset successfully. New password:',  hashedPassword);
//         user.resetToken = undefined; // Remove the reset token
//         user.resetTokenExpiration = undefined; // Remove the expiration
//         await user.save();

//         // Print the new password to the console (for debugging/testing)
//         console.log('Password reset successfully. New password:', password);

//         res.json({ message: 'Password reset successfully' });
//     } catch (error) {
//         console.error('Error resetting password:', error);
//         res.status(500).json({ error: 'Error resetting password. Please try again later.' });
//     }
// });



// //Listen on port
// const port = 5000;
// app.listen(port, () => {
//     console.log(`Server running on port: ${port}`);
// });





const mongoose = require('mongoose');
const express = require('express');
const path = require("path");
const app = express();
const router = new express.Router();
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const User = require('../src/models/User'); // Adjust the path as necessary
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));

const mongoURI = 'mongodb+srv://Ashish_Deshmukh:Satara%40123@cluster0.g87yxcn.mongodb.net/aisf?retryWrites=true&w=majority';
const crypto = require('crypto');
const keysecret = crypto.randomBytes(32).toString('hex'); // 64 hex characters
console.log(keysecret);

mongoose.set('debug', true); // Enable detailed logging

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    connectTimeoutMS: 10000 // Time out after 10s if not connected
}).then(() => {
    console.log('MongoDB connection successful');
}).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
});

// Use EJS as view engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'views')));

// Static file
app.use(express.static("public"));

// Route for rendering login page
app.get("/", (req, res) => {
    res.render(path.join(__dirname, 'views', 'html_files', 'index.ejs'));
});

app.get("/join_us_signup.ejs", (req, res) => {
    res.render(path.join(__dirname, 'views', 'html_files', 'join_us_signup.ejs'));
});

app.get("/join_us.ejs", (req, res) => {
    res.render(path.join(__dirname, 'views', 'html_files', 'join_us.ejs'));
});

// Route for serving style1.css
app.get('/style1.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'views', 'style1.css'));
});

// Route for rendering signup page
app.get("/signup", (req, res) => {
    res.render("join_us_signup.ejs");
});

// Register user
app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Log the incoming request data
        console.log("Received signup request for:", { username, email });

        // Check if the user already exists in the database
        const existingUser = await User.findOne({ name: username });
        if (existingUser) {
            console.log("User already exists:", username);
            return res.send("User already exists. Please choose a different username.");
        }

        // Hash the password using bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Log hashed password
        console.log("Hashed password:", hashedPassword);

        // Create a new user
        const newUser = new User({
            name: username,
            email: email,
            password: hashedPassword
        });

        // Save the user in the database
        await newUser.save();

        // Log success message
        console.log("User registered successfully:", username);
        res.redirect("/join_us.ejs");
    } catch (error) {
        console.error("Error during user registration:", error);
        res.status(500).send("Error during user registration. Please try again later.");
    }
});

// Route for submitting the contact form
app.post('/submit_form', async (req, res) => {
    try {
        const db = mongoose.connection;
        const collection = db.collection('participant_info');

        const data = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        };

        await collection.insertOne(data);
        console.log("Contact form submission saved successfully!");
        res.status(200).send("Message sent successfully!");
    } catch (error) {
        console.error("Error saving contact form submission:", error);
        res.status(500).send("Failed to send message.");
    }
});

// Login user
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });
        if (!user) {
            res.redirect("/join_us_signup.ejs");
            return;
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
            res.redirect("/index");
        } else {
            res.send("Wrong password");
        }
    } catch (error) {
        console.error("Error during user login:", error);
        res.status(500).send("Error during user login. Please try again later.");
    }
});

app.get("/events", (req, res) => {
    res.render(path.join(__dirname, 'views', 'html_files', 'events.ejs'));
});

app.get("/index", (req, res) => {
    res.render(path.join(__dirname, 'views', 'html_files', 'index.ejs'));
});

app.get("/home", (req, res) => {
    res.render(path.join(__dirname, 'views', 'html_files', 'index.ejs'));
});

app.get("/about_us", (req, res) => {
    res.render(path.join(__dirname, 'views', 'html_files', 'about_us.ejs'));
});

app.get("/our_committee", (req, res) => {
    res.render(path.join(__dirname, 'views', 'html_files', 'our_committee.ejs'));
});

app.get("/contact_us", (req, res) => {
    res.render(path.join(__dirname, 'views', 'html_files', 'contact_us.ejs'));
});

app.get("/join_us", (req, res) => {
    res.render(path.join(__dirname, 'views', 'html_files', 'events.ejs'));
});

app.get("/forgotpass", (req, res) => {
    res.render(path.join(__dirname, 'views', 'html_files', 'forgotpass.ejs'));
});

app.get('/reset_password', (req, res) => {
    const token = req.query.token;
    res.render(path.join(__dirname, 'views', 'html_files', 'reset_password.ejs'), { token });
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Forgot Password Route
app.post('/forgot_password', async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send('User not found');
        }

        // Generate token
        const token = jwt.sign({ userId: user._id }, keysecret, { expiresIn: '1h' });

        // Update user with token and expiration
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000; // 1 hour
        await user.save();

        // Send email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Password Reset',
            text: `You requested a password reset. Click the following link to reset your password: http://localhost:5000/reset_password?token=${token}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).send('Error sending email.');
            }
            console.log('Password reset email sent:', info.response);
            res.send('Password reset email sent');
        });
    } catch (error) {
        console.error('Error during forgot password process:', error);
        res.status(500).send('Error during forgot password process. Please try again later.');
    }
});


app.post('/reset_password', async (req, res) => {
    try {
        const { email, password, token } = req.body;

        // Verify the token
        let decoded;
        try {
            decoded = jwt.verify(token, keysecret);
        } catch (error) {
            return res.status(400).json({ error: 'Token is invalid or has expired' });
        }

        const user = await User.findOne({ _id: decoded.userId, email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if the token is still valid
        if (user.resetToken !== token || user.resetTokenExpiration < Date.now()) {
            return res.status(400).json({ error: 'Token is invalid or has expired' });
        }

        // Hash the new password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Update user's password
        user.password = hashedPassword;
        user.resetToken = undefined; // Remove the reset token
        user.resetTokenExpiration = undefined; // Remove the expiration
        await user.save();

        // Log success message
        console.log(`Password updated successfully for user: ${user.email}`);

        // Send success response
        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ error: 'Error resetting password. Please try again later.' });
    }
});


// Listen on port
const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
