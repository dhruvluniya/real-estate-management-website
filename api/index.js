import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js'

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err); 
})

const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000!!")
});


app.get('/',(req,res) => {
    res.send("Hello World");
});

app.use('/api/user',userRouter)