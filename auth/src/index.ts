import {app} from './app'
import mongoose from 'mongoose';

const start = async() => {
    if(!process.env.JWT_KEY) throw new Error("No JWT_KEY foudn") 
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
        console.log('Connected to mongodb...')
    } catch (error) {
        console.error(error)
    }
}


app.listen(3000,()=> console.log("SERVER ON 3000!!!!!!!!!"));
start();