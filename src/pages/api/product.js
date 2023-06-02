import mongoose from "mongoose";
import connectdb from "../../../middleware/connectdb";
import product from "../../../schema/product";

const handler = async(req,res) =>{
    

  for (let  i = 0; i < req.body.length;  i++){

      const {name,id,brand,brandmodel,price,image,availableQty} = req.body[i]
          if(req.method === 'POST'){  
              const productData = await new product({
                  name,
                  id,
                  brand,
                  brandmodel,
                  price,
                  image,
                  availableQty
                })
              
                if(!name || !id || !brand || !brandmodel || !price || !image || !availableQty ){
                    res.status(400).json({message:"do not leave blank"})
                }else{
                    await productData.save()
                    res.status(200).json({message:"data send succesfuly"})
                }
            
          }
          if(req.method === "GET" ){
            res.status(400).json({message:"this req only for post"})

        }
        }  
     
}

export default connectdb(handler) 