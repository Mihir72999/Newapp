import { TEMPORARY_REDIRECT_STATUS } from "next/dist/shared/lib/constants";
import connectdb from "../../../middleware/connectdb";
import Product from "../../../schema/product";
import mongoose from "mongoose";


const handler = async(req , res) =>{
if(req.method === 'GET'){


      const data = req.query.brandmodel      
        const myData = await Product.find({brandmodel:`${data}`})
        
      
      res.status(201).json({myData})
      
}
}
export default connectdb(handler)