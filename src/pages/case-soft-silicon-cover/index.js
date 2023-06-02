
import {  Box, Breadcrumbs, TextField, Typography , Link, Pagination } from '@mui/material'

import React, { useEffect, useState } from 'react'

import LoadingBar from 'react-top-loading-bar'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import {useGetproductDataQuery} from '../../../state/redux/razorpay'



const Case = () => {


  const {data , isFetching  , isError} = useGetproductDataQuery()
  // const [value , setValue] = useState('')
  // const [searchData , setSearchData ] = useState([])
  const [progress, setProgress] = useState(0)
  const [count , setCount] = useState(10)
  const [datas , setDatas] = useState([])
  
  const [pageData , setpageData] = useState({
    counts:3,
    from:0,
    to:count
  })

  
  useEffect(()=>{
    setDatas(data)

    // const filterData = data && data.filter((e)=>{
    // return  e.name.toLowerCase().includes(value.toLowerCase())})
    // setSearchData(filterData)
    setProgress(100)
   
  },[data])  
  
if(isFetching){
  return  <LoadingBar className='loadingbar' height={63}  color='#FFFFFF'  progress={progress} waitingTime={800} onLoaderFinished={() => setProgress(0)}/>
     
}

if(isError){
  return <div style={{margin:"30%"}}>check you connection or something went wrong</div>
}
const handleClick = (event , page) =>{

const from = (page - 1) * count
const to = (page- 1) * count + count
setpageData({...pageData , from:from , to:to })

}
  return (
    <>
   
    <div className='home'>
    <Box   mt={2}>
            <Breadcrumbs area-label='breadcrumb'>
                <Link underline="hover" href="/">Home</Link>
            
               
                <Typography color='text.primary' >case-soft-silicon-cover</Typography> 
            </Breadcrumbs>

           </Box>
      
     {/* <div><TextField value={value} onChange={(e)=>setValue(e.target.value)} variant='outlined'  label="serch here"  /></div>  */}
      </div> 
    <div className={styles.apple}>
        {datas && datas.slice(pageData.from , pageData.to).map((e , i)=>{
      
        return <div className={styles.imgli} key={i}>
          <div className={styles.gears}> 
        <Image width={100} height={150} src={e.image} loading='lazy' alt={e.price}/>
        </div>
      <Link underline="hover" color='text.secondary'  href={`/product/${e.name}`}> <p className='desc' > {e.name.slice(0,30)}...</p></Link>
        <Typography className={styles.typos} variant='h6'><del className={styles.del}>₹{e.price * 2 - 40}</del>₹{e.price}</Typography>
        </div>
    
       
          
    })}</div>
    <div style={{display:'flex', justifyContent:'center'}}>
    <Pagination  onChange={handleClick}  count={pageData.counts} color="primary" />
    </div>
    </>
  )
  
}  


export default Case