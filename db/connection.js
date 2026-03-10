import mongoose from 'mongoose';

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  DB Connection

async function connectionDB() {

  return await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce').then(() => {
    console.log("Database connected successfully");
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
}

export { connectionDB };