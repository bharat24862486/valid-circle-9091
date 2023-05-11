import OtherNavbar from '../component/OtherNavbar';
import OtherFooter from '../component/OtherFooter';
import { Box, Button, HStack, VStack,Image } from '@chakra-ui/react';
import axios from 'axios';

const PaymentSuccess = () => {


  return (
              <VStack h="100vh" justify="space-between">
              <OtherNavbar/>
 <Box w="100%">
         <VStack w={"60%"} m="auto" spacing={16}>
          <Image w="full" src="https://www.knowband.com/blog/wp-content/uploads/2020/03/THANKYOU-PAGE-2.png" />
          <Button 
          variant={"outline"}
         colorScheme="pink"
         fontWeight={"bold"} 
         _hover={{bgColor:"pink"}} 
          >
            CONTINUE SHOPPING
          </Button>
         </VStack>
 </Box>
              <OtherFooter/>
              </VStack>
  )
}

export default PaymentSuccess




