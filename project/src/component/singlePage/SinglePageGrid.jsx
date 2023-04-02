import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'


const SinglePageGrid = ({datas}) => {
    console.log(datas)
  return (
    <div>
        <SimpleGrid columns={[1,2,2]} spacing={5}>
            {datas.map((el)=>{
                return (
                    <img src={el} alt="" />
                )
            })}
        </SimpleGrid>

      
    </div>
  )
}

export default SinglePageGrid
