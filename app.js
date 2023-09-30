const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const Contact = require('./models/Contact'); // Create a Contact model



// MongoDB Connection
mongoose.connect('mongodb+srv://hafeez:hafeez123@cluster0.ej1noqo.mongodb.net/CustomerDetails', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


// EJS Templating Engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/contact', (req, res) => {
    res.render('contactus');
});

app.post('/contact', (req, res) => {
    console.log(req.body)
    const { studentName, PlaceName, state,contactNo, email} = req.body;
  
    // Create a new contact instance
    const newContact = new Contact({
      studentName,
      PlaceName,
      contactNo,
      state,
      email
    });
  
    // Save the contact to the database
    newContact.save()
      .then(() => {
        res.send('Message sent successfully!');
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Internal Server Error');
      });
  });

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
