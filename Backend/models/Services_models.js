const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ServiceSchema = new schema({
  title: { type: String },
  description: { type: String },
  service_Provider: { type: String },
  phone_number: { type: Number },
});

module.exports = Service = mongoose.model("service", ServiceSchema);