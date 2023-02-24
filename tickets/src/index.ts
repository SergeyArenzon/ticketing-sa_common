import {app} from './app'
import mongoose from 'mongoose';

const start = async() => {
    if(!process.env.JWT_KEY) throw new Error("No JWT_KEY foudn") 

    if(!process.env.MONGO_URI){
        throw new Error('MONGO_URI must be defined');
    }
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(error);
        
    }
}


app.listen(3000,()=> console.log("SERVER ON 3000!!!!!!!!![tickets server]"));
start();