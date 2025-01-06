const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://budhasujan3:bavVcPwBITuk1H71@cluster0.q5fiy.mongodb.net/");
    console.log(" MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectToDB;