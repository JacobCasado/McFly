const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Schema = mongoose.Schema;

var noteSchema = new Schema({
  text: {
    type: String,
    required: 'Required field'
  },
  user: {
    type: String,
    required: 'Required field'
  },
  favorite: {
    type: NumberInt,
    default: 0}
});

const Notes = mongoose.model('Notes', noteSchema);
module.exports = Notes;