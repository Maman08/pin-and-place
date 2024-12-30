import mongoose from 'mongoose';
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect('mongodb+srv://a34mritunjaysingh:zp8WLlLD94ocYfYZ@cluster0.geqrz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/gmap')
        console.log(`Mongo DB Connected : ${conn.connection.host}`);

    }catch(error){
        console.error(`${error.message}`)
        process.exit(1)
    }
}
export default connectDB;