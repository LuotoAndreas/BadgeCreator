import mongoose from 'mongoose';

const uri = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydb';

mongoose.connect(uri)
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
