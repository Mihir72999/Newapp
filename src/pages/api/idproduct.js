import mongoose from "mongoose";
import connectdb from "../../../middleware/connectdb";
import product from "../../../schema/product";

const handler = async(req,res) =>{
 
  
      
      const name =req.query.name
 
      if(req.method === 'GET'){

        const data = await product.findOne({name})
       if(data){
         res.status(200).json(data)
         }else{
          res.status(400).json({message:"datanull"})
         }
          
        }
  
}
export default  connectdb(handler) 


