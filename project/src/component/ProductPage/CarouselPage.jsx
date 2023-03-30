import React from 'react'
import Carousel from 'nuka-carousel' 
import { Stack } from '@chakra-ui/react'

export const CarouselPage = ({arr}) => {





  return (
     
   <Carousel autoplay={true} wrapAround={true} style={{width:'350px', height:"250px", margin:'auto'}}   pauseOnHover={false} defaultControlsConfig={{
       nextButtonText: 'Custom Next',
    prevButtonText: 'Custom Prev',
    nextButtonStyle:{display:'none'},
    prevButtonStyle:{display:'none'},
       
    pagingDotsStyle: {
      fill: 'red', 
      margin:'1px',
    }
  }}  >
 
    {/* <Stack height={'17.5rem'}>

  {arr.map((e,i)=> <img key={i} src={e} />)}
    </Stack> */}



</Carousel>
       
  )
}


 