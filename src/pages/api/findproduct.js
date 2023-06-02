import mongoose from "mongoose";
import connectdb from "../../../middleware/connectdb";
import product from "../../../schema/product";


const handler = async(req,res) =>{
  
    let items = {}
      if(req.method === 'GET'){
   
        const getProductData = await product.find({})
      for (let item of getProductData){

        
            if(item.name in items){
             
            }
             else{
              items[item.name] = JSON.parse(JSON.stringify(item))
            
              
             }
            }
          
        }
       res.status(200).json({items})
  
}
export default connectdb(handler)
