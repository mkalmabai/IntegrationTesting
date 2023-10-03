const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let donorSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  blood_type: {
    type: String
  },
  number_of_packets: {
    type: Number
  }
}, {
    collection: 'donors'
  })
  
module.exports = mongoose.model('Donor', donorSchema)