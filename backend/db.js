const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/mqtt", { useNewUrlParser: true, useCreateIndex: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Mongoose is up and running");
});

const messageSchema = new Schema({
  title: String,
  message: String,
  longitude: Number,
  latitude: Number,
  date: String,
  time: String,
  city: String,
  expireAt: {
    type: Date,
    default: Date.now,
    index: { expires: '1d' },
  },
});

const Message = mongoose.model("Message", messageSchema);

const saveToDB = ({ title, message, longitude, latitude, date, time, city }) => {
  const newMessage = new Message({
    title,
    message,
    longitude,
    latitude,
    date,
    time,
    city
  });
  newMessage.save(function(err) {
    console.log(`Saved ${newMessage}`)
    return err ? false : true;
  });
};

const getFromDB = (nearestCity) => {
  return new Promise((resolve, reject) => {
    Message.find({city: nearestCity}, (err, response) => {
      err && reject(err);
      response && resolve(response);
  })

  })
}

module.exports = { saveToDB, getFromDB };
