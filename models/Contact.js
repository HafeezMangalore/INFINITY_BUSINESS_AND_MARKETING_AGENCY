const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  PlaceName: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  contactNo: {
    type: String
  },
  email: {
    type: String
  
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
