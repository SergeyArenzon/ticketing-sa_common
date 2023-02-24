import {app} from './app'
import mongoose from 'mongoose';

const start = async() => {
    if(!process.env.JWT_KEY) throw new Error("No JWT_KEY found") 
    if(!process.env.MONGO_URI) throw new Error("No MONGO_URI found") 
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to mongodb...')
    } catch (error) {
        console.error(error)
    }
}


app.listen(3000,()=> console.log("SERVER ON 3000!!!!!!!!!"));
start();