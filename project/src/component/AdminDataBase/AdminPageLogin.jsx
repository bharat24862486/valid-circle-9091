import React, {  useState } from 'react'
 
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast, 
  } from '@chakra-ui/react';
import { validate } from '../../redux/AdminReducer/action';
 

 
const AdminPageLogin = () => {


  const [userLogin, setUserLogin] = useState({mail:'rahul1905.sk@gmail.com', pass:''})
  
  const toast = useToast()

  const sucessToast = (title, des) => {

    toast({
      title: title,
      description: des, 
      status: 'success',
      position: 'top',
      duration: 3000,
      isClosable: true,
    })
  }
 
  const wrongPassToast = (title, des) => {

    toast({
      title: title,
      description: des, 
      status: 'error',
      position: 'top',
      duration: 3000,
      isClosable: true,
    })
  }
  const defaultPassToast = () => {

    toast({
      title: `Default Password is 1111`,
      description: 'You can also reset from forget password', 
      status: 'info',
      position: 'top',
      duration: 3000,
      isClosable: true,
    })
  }
  const wrongEmailToast = (title, des) => {

    toast({
      title: title,
      description: des, 
      status: 'warning',
      position: 'top',
      duration: 3000,
      isClosable: true,
    })
  }
  
  
  


const handleLogin = (e) => {
  e.preventDefault();
  console.log(userLogin);
  const {mail, pass} = userLogin
  validate(mail, pass, sucessToast,wrongEmailToast, wrongPassToast, defaultPassToast)
   
  setUserLogin({mail:'rahul1905.sk@gmail.com', pass:''})

}







 

  return (
    
    <Flex 
    style={{
      // backgroundImage: `url(https://i.ibb.co/Pg99n76/admin-Page-bg.jpg)`, backgroundRepeat:'no-repeat',backgroundSize:'cover', 
     
    backgroundImage:'linear-gradient(90deg, rgba(255,4,224,0.8) 0%, rgba(255,235,0,0.8) 99%)', backgroundFilter:'brightness(20%)'}}
    // bgImage = 'url('https://i.ibb.co/Pg99n76/admin-Page-bg.jpg')'
    minH={'100vh'}
    h='100vh'
    
    align={'center'}
    justify={'center'}

    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} w={'lg'} py={12} px={6}>
       
      <Stack align={'center'} maxW={'xxl'}>
        <Heading color='white' textShadow='0 0 3px black'  fontSize={'4xl'}>Welcome Back !</Heading>
        <Text color='white'  textShadow='0 0 3px black' fontSize={'lg'} >
        Log in to your Admin account below  
        </Text>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <form onSubmit={handleLogin} > 
          <FormControl id="email" isRequired >
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={userLogin.mail} onChange={(e)=> setUserLogin({...userLogin, mail:e.target.value})}  />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" onClick={()=>defaultPassToast()} value={userLogin.pass} onChange={(e)=> setUserLogin({...userLogin, pass:e.target.value})}  />
          </FormControl>
        
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.400'}>Forgot password?</Link>
            </Stack>
            <Button
            type="submit"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }} 
               >
              Sign in
            </Button>
          </Stack> 
          </form>
           
        </Stack>
      </Box>
    </Stack>
  </Flex>



  )
}

export default AdminPageLogin