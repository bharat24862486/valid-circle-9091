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
  } from '@chakra-ui/react';
import { validate } from '../../redux/AdminReducer/action';
 
 
const AdminPageLogin = () => {

  const [userLogin, setUserLogin] = useState({mail:'rahul1905.sk@gmail.com', pass:''})
  

const handleLogin = (e) => {
  e.preventDefault();
  console.log(userLogin);
  const {mail, pass} = userLogin
  validate(mail, pass)
   
  setUserLogin({mail:'rahul1905.sk@gmail.com', pass:''})

}






 

  return (
    
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}

    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} w={'lg'} py={12} px={6}>
       
      <Stack align={'center'} maxW={'xxl'}>
        <Heading fontSize={'4xl'}>Welcome Back !</Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
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
            <Input type="password" value={userLogin.pass} onChange={(e)=> setUserLogin({...userLogin, pass:e.target.value})}  />
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