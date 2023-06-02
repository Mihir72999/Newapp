
import {Link, AppBar, Button, Container, Fab, Toolbar, Typography, Stack, IconButton, Box } from '@mui/material'
import { CloseOutlined, MenuOutlined ,ShoppingCartRounded} from '@material-ui/icons'
import React, {   useState , useRef } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'


const Navbar = () => {
  const {cart}= useSelector(state=>state.add)
const [active , setActive] = useState(false)  
const router = useRouter()

const goToCart = () =>{
router.push('/cart')

}
const displayref = useRef(null)
const styleref = useRef(null)
const handleClick = () =>{
  displayref.current.style.display = 'flex'
  styleref.current.style.display = 'none'
  setActive(true)
}
const  handleClickRemove = () =>{
  displayref.current.style.display = 'none'
  styleref.current.style.display = 'flex'
  setActive(false)
}


return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ display:'flex' , justifyContent:'space-between', flexDirection:'row'}} position="fixed">
        <Toolbar  variant="dense">
 <IconButton ref={styleref} onClick={handleClick}edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 ,cursor:'pointer',color:'white' }}> 
             <MenuOutlined  />  
           </IconButton> 
       {active &&  <IconButton  onClick={handleClickRemove}edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 , cursor:'pointer',color:'white'  }}>
             <CloseOutlined /> 
          </IconButton> }
   
          <Typography className='navbar navhead' variant="h6" color="inherit" component="div">
          Navbar
          </Typography>
          
        </Toolbar>
        <Toolbar>
           
<Button style={{color:'white' }} >Login</Button>
<Button style={{color:'white',background:'navy'  }} variant='outlined' >Register</Button>
<ShoppingCartRounded  onClick={goToCart} style={{background:'navy', color:'white', margin:'0 10px',marginTop:'10px' }} />
{ cart.length > 0 &&  <div className='cart_length'>{cart.length}</div> }        
          
        </Toolbar>
      </AppBar>
    </Box>
    <div ref={displayref}  style={{display:'none' , flexDirection:'column',background:'white', position:'fixed', top:'65px' ,left:'20px',boxShadow:'0 4px 4px  navy',zIndex:'2',maxWidth:"200px",margin:'0px',fontSize:'20px', listStyle:"none" , textAlign:"start" ,hover:'color' }}>
      <Typography style={{width:"200px",padding:'10px'}}>snap cases<span style={{color:'white',background:'#8185d0', padding:'7px',fontSize:'.7rem',margin:'5px'}}>New</span></Typography>
      <hr style={{color:'blue'}}/>
      <Typography style={{width:"150%",padding:'10px'}}>snap cases</Typography>
      <hr/>
      <Typography style={{width:"150%",padding:'10px'}}>snap cases</Typography>
      <hr/>
      <Typography style={{width:"150%",padding:'10px'}}>snap cases</Typography>
      <hr/>
      <Typography style={{width:"150%",padding:'10px'}}>snap cases</Typography>
      <hr/>
      <Typography style={{width:"150%",padding:'10px'}}>snap cases</Typography>
      
    </div>
    </>
  )
}

export default Navbar