const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  codePostal: {
    type: String,
  },
  codeCommune: {
    type: String,
  },
  nomCommune: {
    type: String,
  },
  libelleAcheminement: {
    type: String,
  },
});

module.exports = mongoose.model("City", citySchema);
