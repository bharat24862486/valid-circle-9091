
import { Box, Button, Image,  Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CartEmpty = () => {

  const navigate = useNavigate()
  return (
    <Stack >
        <br />
    {/* <Box  borderBottom={'1px solid black'} position={'fixed'} top={'0'} bgColor={'white'} zIndex={'2'} style={{ width:'100%' , height: '8vh'}}>Navbar</Box> */}

    <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} p={'5rem'}>
     <Image w={'250px'} h={'300px'} objectFit={'contain'} src='https://constant.myntassets.com/checkout/assets/img/empty-bag.png' />
    <Text fontSize={'25px'} color={'black'}  > Hey, it feels so light!t</Text>
    <Text fontSize={'18px'} color={'black'}  > There is nothing in your bag. Let's add some items.</Text>
    <br />
    <Button onClick={()=> navigate('/')} variant={'solid'} _active={{all:'none'}} _hover={{boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px'}} bgColor={'#FF527B'} color={'white'} > SHOP NOW </Button>
    </Stack>
  </Stack>
  )
}

export default CartEmpty


 