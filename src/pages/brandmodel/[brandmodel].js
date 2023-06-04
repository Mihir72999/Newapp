import { Box, Breadcrumbs, Button, Card, CardContent, CardMedia, Link, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Style from './brandmodel.module.css'
import Image from 'next/image'
import mongoose from 'mongoose'
import product from '../../../schema/product'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { brandmodelData } from '../../../state/redux/findmodel'

const brandmodel = ({myData }) => {

  const dispatch = useDispatch()
  const {datas} = useSelector(state=>state.model)

  const router = useRouter()
const data = router.query.brandmodel
const dat = myData.map(e=>e.brandmodel)
const moredata = dat.includes(data)



return (
    < div className={Style.div}>
     <Box   mt={15}>
            <Breadcrumbs area-label='breadcrumb'>
                <Link underline="hover" href="/">Home</Link>
                <Link underline="hover" href="/blog">select brandmodel cover</Link>
            
               
                <Typography color='text.primary' >{moredata && data} cover</Typography> 
            </Breadcrumbs>

           </Box>
        {moredata && <Typography textAlign='center' marginTop='20px' variant='h4'>{ data } Back cover </Typography>}
         {moredata &&  <Typography  margin='10px 0' variant='subtitle1'>{ data} Back Cover- Buy Stylish { data} Back Covers and Cases Just at Rs. 99 On Zapvi. Shop Best {data} Back Cover Online in India with Reasonable Price. Checkout and Order Latest { data} Cover of Trendy Huge Collection.</Typography>}
              <div className={Style.grid}>
                {myData && myData.map((e , i)=>{
                return  <Card key={i}  sx={{margin:'10px'}} >
                
                   
                      <Image src={e.image} loading='lazy' alt = '' height={230} width={175}/>
                   
                    <CardContent className={Style.content}>
                      <Typography variant='subtitle2'>{e.name}</Typography>
                    </CardContent>
                   <Link href={`/products/${e.name}`}>  <Button className={Style.button}  variant='contained'  size="small" color='primary'>add to cart</Button></Link>
                    </Card>
                
                })
                
              }
             {!moredata && <Typography variant= 'h3' color = 'secondary' width='100%'>something went wrong</Typography>}
                </div> 
           </div>
    
    
  )
}
export async function getStaticPaths(contaxt){

  try{
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(`${process.env.MONGO_URI}`)
  }
  const item = await product.find()
  const paths = item.map(e=>{
   return{ 
    params:{
      brandmodel: e.brandmodel.toString()
    }
  }
  })
 return{
  paths,
  fallback:false  //may be blocking or true
 }
  }catch(error){
    console.log(error.message)
  }finally{
    mongoose.disconnect()
    console.log('mongoose disconnected')
  }
}
export async function getStaticProps({params}){
  const data = params.brandmodel
  
  try{
 
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(`${process.env.MONGO_URI}`)
  } 
  
  const myData = await product.find({brandmodel:`${data}`})
  

 return{
  props:{myData:JSON.parse(JSON.stringify(myData))  }
 }   
}catch(error){
  console.log(error.message)
}finally{
  mongoose.disconnect()
  console.log('mongoose disconnected')
}

}
export default brandmodel
