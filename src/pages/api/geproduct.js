

import connectdb from "../../../middleware/connectdb";
import product from "../../../schema/product";

const handler =  async(req, res) => {
  if(req.method === 'GET'){
    const result = await product.find({}) 
   
 
    res.status(200).json(result)}
    
  
   
     
    
    }
   

export default  connectdb(handler)

   