import React from 'react'
import logo from '../../images/StyleHub.png'
import { Box, Button,  SimpleGrid, useMediaQuery } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = ({items, price, handleClick, bag,show }) => {

const [tabView] = useMediaQuery('(max-width: 990px)')
const navigate = useNavigate();
  return (
    <Box

        position={"fixed"}
        top={"0"}
        paddingBottom={'8px'}
        marginBottom={'20px'}
        // pl={'50px'}
        bgColor={"white"}
        zIndex={"2"}
        boxShadow= 'rgb(38, 57, 77) 0px 20px 30px -25px;'
        // boxShadow= 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;'
        style={{ width: "100%", height:"12vh"}}
      > <img onClick={()=>navigate('/')}  style={{width:'100px', padding:0, margin:0, marginLeft:'50px'}} src={logo} alt="logo" />
        {/* Navbar */}
        
{ tabView  && show && bag.length !== false &&   <SimpleGrid columns={3} mb={'20px'} border={'1px solid #eee'} w={'100%'} bgColor={'white'} >
          
<Button variant={'unstyled'}>{ `${items} ITEMS`} </Button> 
<Button variant={'unstyled'} borderLeft={'1px'} borderRight={'1px'} borderRadius={'0'}> {`₹ ${price}`} </Button> 
<Button onClick={()=>handleClick()} variant={'unstyled'} color={'#d3145a'}> {`BUY NOW >`} </Button>
        </SimpleGrid> }
      </Box>
  )
}

export default Navbar2