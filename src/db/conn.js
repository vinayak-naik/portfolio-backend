const mongoose = require('mongoose');
// const URI = "mongodb+srv://vinayak:vinayak@cluster0.d4nss.mongodb.net/test1111?retryWrites=true&w=majority";
const URI = "mongodb+srv://vinayak:vinayak@cluster0.nmngm.mongodb.net/portfolio?retryWrites=true&w=majority";

mongoose.connect(URI, {useNewUrlParser : true, useUnifiedTopology : true, useFindAndModify : false}, (err) => {
  if(err) {
    console.log(`Could not connect to MongoDB Atlas : ${err}`);
  }
  else {
    console.log('Connected to MongoDB Atlas successfully.');
  }
});
