import mongoose from "mongoose"
import connectdb from "../../../middleware/connectdb"
import Order from "../../../schema/order"


const handler = async(req, res)=>{
if(req.method === 'POST'){
 
        const {fname ,lname , street,town ,pin ,phone , email , state } = req.body
         const product = req.body.cart 
         const orderId = req.body.id
         
         const data = await  Order({fname ,lname , street,town ,pin ,phone , email ,state,orderId,product })
       if(!fname  || !lname || !street || !town || !pin || !phone || !email || !state || !product || !orderId){
        res.status(401).json({message:"fill all the field"})

       }else{
           await data.save()
           res.status(201).json({status:"ok"})
      }  
  
}
}
export default connectdb(handler)