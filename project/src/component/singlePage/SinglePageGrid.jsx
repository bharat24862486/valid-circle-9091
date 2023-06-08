import React from 'react'
import { Box, Image, SimpleGrid } from '@chakra-ui/react'


const SinglePageGrid = ({datas}) => {
    console.log(datas)
  return (
    <Box>
        <SimpleGrid columns={[1,2,2]} spacing={"1%"}>
            {datas.map((el)=>{
                return (
                    <Image src={el} alt="" w={["100%","100%","100%"]}/>
                )
            })}
        </SimpleGrid>

      
    </Box>
  )
}

export default SinglePageGrid
