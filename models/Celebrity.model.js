//  Add your code here
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const celebritySchema = new Schema(
  {
    name: {
      type: String,
      unique: true
    },
    occupation: {
      type: String,

    },
    catchPhrase: {
      type: String,
      unique: true
    }
  },

);

const Celebrity = model("celebrity", celebritySchema);

module.exports = User;