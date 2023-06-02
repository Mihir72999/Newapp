

import Image from 'next/image'
import Style from './slider.module.css'
import { useEffect, useState } from 'react'
import { Slide } from '@mui/material'

const image=[
    'https://cdn.pixabay.com/photo/2020/04/23/18/32/book-5083590_640.jpg',
    'https://cdn.pixabay.com/photo/2016/09/21/11/48/smartphone-1684636_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/03/13/40/diet-1949478_1280.jpg'
]


 const slider = () =>{
    const [ index , setIndex] = useState(0)
    const [ item , setItem] = useState(false)
    const imageOne = (
        <div style={{background:'#e4001e', width:'100%',height:'400px' }} >
        <img style={{margin:'75px 500px'}} width={500} height={250} src={image[0]} alt='image'/>
        </div>  
    )
    const imageTwo = (
<div style={{background:'#5f4eeb', width:'100%',height:'400px' }} >
        <img style={{margin:'75px 500px'}} width={500} height={250} src={image[1]} alt='image'/>
        </div>  
    )
    const imageThree = (
        <div style={{background:'#f2575b', width:'100%',height:'400px' }} >
        <img style={{margin:'50px 500px'}} width={500} height={250} src={image[2]} alt='image'/>
        </div>  
    )
    const data = [
      imageOne,
      imageTwo,
      imageThree
    ]
    setTimeout(()=>{
       setItem(false)
    },7000)
    useEffect(()=>{
      const interval = setInterval(() => {
            setIndex(e=>(e + 1) % data.length)
          setItem(true) 
          setTimeout(()=>{
            setItem(false)
        },7000)   
        },7500)
     return () =>{
        clearInterval(interval)
     }
    },[])
    
  
return (
    <div style={{margin:'200px 0', width:'100%',height:'400px' }} >
    <Slide  direction={item ? 'left' : 'right'} in={item}>
    {data[index]}
     
    </Slide> 
</div>
)

}
export default slider