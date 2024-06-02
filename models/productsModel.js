const mongoose = require("mongoose");

const prodSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const Products = mongoose.model("Products", prodSchema);

module.exports = Products;
