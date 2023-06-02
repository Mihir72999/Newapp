import mongoose from "mongoose"
let mongoClient;
const connectdb= handler => async(req , res) =>{

  try{
    if(mongoose.connections[0].readyState){
    return handler(req,res)
    }
    await  mongoose.connect(`${process.env.MONGO_URI}`)
  
   
     return  handler(req,res) 
    } catch(error){
        console.log(error)
        res.json({message:error.message})
    } 
}

export default connectdb 