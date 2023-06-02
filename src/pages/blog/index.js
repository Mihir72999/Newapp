"use client"
import { Box, Breadcrumbs, Container , FormControl, InputLabel, Link, MenuItem, Select, Typography  } from '@mui/material'
import React, { useState , useEffect } from 'react'
import { useGlobalContext } from '../../../state/context'
import styles from '../../styles/Home.module.css'
import LoadingBar from 'react-top-loading-bar'
import {useGetproductQuery} from '../../../state/redux/findproducts'
import mongoose from 'mongoose'
import Product from '../../../schema/product'
import { useRouter } from 'next/router'
const blog = () => {
const [progress, setProgress] = useState(0)
const {data:itemData, isFetching } = useGetproductQuery()
const apple = itemData && itemData.myItems.apple.brandmodel.map(e=>e) 
    const samsung = itemData && itemData.myItems.samsung.brandmodel.map(e=>e)
    

   const {data} = useGlobalContext() 

   
const router = useRouter()
   useEffect(()=>{

  setProgress(100)
 },[])
if(isFetching){
    return <LoadingBar className='loadingbar' height={63}  color='#FFFFFF'  progress={progress} waitingTime={800} onLoaderFinished={() => setProgress(0)}/>
    
}

const handleChange = (e , i) =>{

  router.push(`brandmodel/${i.props.children}`)
}
  
    return (   
      <>
    
     <main >

<div className={styles.bg}>
</div>
<div className={`${styles.main} heading`}>
  <Container>

    <div  className='heading' >{data.heading}</div>
    <Typography variant='h4'>{data.title}</Typography>
  </Container>
</div>
</main>

        <hr />
        <Box display='flex' justifyContent='center'  mt={2}>
            <Breadcrumbs area-label='breadcrumb'>
                <Link underline="hover" href="/">Home</Link>
            
               
                <Typography color='text.primary' >Select Model Cover</Typography> 
            </Breadcrumbs>

           </Box>
      
      <div className = 'mobile' >
        
        <Box className = 'box'>Select your model</Box>
        {/* <div className='select'>
        <det  ails>
  <summary className='summary'>{getData.brand}</summary>
  { apple?.map(e=> <p className='p' key={e} >{e}</p> ) }


</details>
<details>
  
  <summary className='summary'>{getSamsung.brand}</summary>
  { samsung?.map(e=> <p className='p' key={e} >{e}</p> ) }

</details>
</div> */}
    
      <FormControl sx={{color:'black', mx: 110, minWidth: 200 , my:1}}>
      <InputLabel id="demo-simple-select-autowidth-label">Apple</InputLabel>
      <Select
    labelId="demo-simple-select-autowidth-label"
    id="demo-simple-select-autowidth"
    
    label="Apple"
    color='primary'
    onChange={handleChange}
   
>
   { apple?.map((e,i) =>  <MenuItem  key={i} value={e} >{e}</MenuItem>)}
     </Select>
    </FormControl>
    <FormControl sx={{color:'black', mx: 110, minWidth: 200 , my:1}}>
      <InputLabel id="demo1-simple-select-autowidth-label">Samsung</InputLabel>
      <Select
    labelId="demo1-simple-select-autowidth-label"
    id="demo1-simple-select-autowidth"
    
    label="Samsung"
    color='primary'
    onChange={handleChange}
  > 
   { samsung?.map((e,i) =>  <MenuItem key={i} value={e}  >{e}</MenuItem>)}
     </Select>
    
   </FormControl>
    </div>
      </>
  )
}



export default blog