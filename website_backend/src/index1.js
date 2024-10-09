const mongoosh=require('mongoose');
const express = require('express');
const path = require("path");
const bcrypt = require("bcrypt");
//const { MongoClient } = require('mongodb');
const app = express();
const DB='mongodb+srv://Ashish_Deshmukh:Satara@123@cluster0.g87yxcn.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0'
mongoosh.connect(DB,{
    UseNewUrlParser:true,
    UseCreateIndex:true,
    UseUnifiedTopology:true,
    UseFindAndModify:false
}).then(()=>{
    console.log('connection successful');
}).catch((err)=>console.log('not connected'))

// Convert data into JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use EJS as view engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'views')));

// Static file
app.use(express.static("public"));

// MongoDB connection URL
const mongoURI = 'mongodb+srv://Ashish_Deshmukh:Satara@123@cluster0.g87yxcn.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0'; // Update with your MongoDB connection URL

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
        // Connect to MongoDB
        const client = new MongoClient(mongoURI);
        await client.connect();

        const db = client.db('aisf'); // Update with your database name
        const collection = db.collection('users');

        const data = {
            name: req.body.username,
            email: req.body.email,
            password: req.body.password
        };

        // Check if the user already exists in the database
        const existingUser = await collection.findOne({ name: data.name });
        if (existingUser) {
            res.send("User already exists. Please choose a different username.");
        } else {
            // Hash the password using bcrypt
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(data.password, saltRounds);
            data.password = hashedPassword;

            // Insert the user data into the database
            await collection.insertOne(data);
            console.log("User registered successfully!");
            res.redirect("join_us.ejs");
        }

        // Close the MongoDB connection
        await client.close();
    } catch (error) {
        console.error("Error during user registration:", error);
        res.status(500).send("Error during user registration. Please try again later.");
    }
});

// Route for submitting the contact form
app.post('/submit_form', async (req, res) => {
    try {
        const client = new MongoClient(mongoURI);
        await client.connect();

        const db = client.db('aisf');
        const collection = db.collection('participant_info');

        const data = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        };

        await collection.insertOne(data);
        console.log("Contact form submission saved successfully!");
        res.status(200).send("Message sent successfully!");
        
        await client.close();
    } catch (error) {
        console.error("Error saving contact form submission:", error);
        res.status(500).send("Failed to send message.");
    }
});

// Login user
app.post("/login", async (req, res) => {
    let client;
    try {
        client = new MongoClient(mongoURI);
        await client.connect();
        const db = client.db('aisf');
        const collection = db.collection('users');

        const user = await collection.findOne({ email: req.body.email });
        if (!user) {
            res.redirect("/join_us_signup.ejs");
            return;
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
        if (isPasswordMatch) {
            res.redirect("/events");
        } else {
            res.send("Wrong password");
        }
    } catch (error) {
        console.error("Error during user login:", error);
        res.status(500).send("Error during user login. Please try again later.");
    } finally {
        if (client) {
            await client.close();
        }
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








const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

