import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { Image,Heading  } from '@chakra-ui/react'

const HomePart = ({text,data,length}) => {
    // console.log(data,text,length)
  return (
    <div>
        <Heading as='h2' size='lg' mt={"4%"} ml={"2%"}>{text}</Heading>

       <SimpleGrid columns={[length-4,length-2,length]} spacing={0} mt={"4%"}>
        {data.map((el)=>{
            return <Image src={el}/>
        })}

       </SimpleGrid>
      
    </div>
  )
}

export default HomePart
