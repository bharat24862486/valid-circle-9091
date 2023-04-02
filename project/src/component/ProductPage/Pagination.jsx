import { Stack, Button } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({page, setPage, totalPage}) => {
      
    
  return (
    <Stack direction={"row"}>
<Button onClick={()=>setPage(page-1)} isDisabled={page===1} >{"Previous"}</Button>
    
{new Array(totalPage).fill("page").map((_,index)=>(
<Button color={page === index+ 1 ? "red" :"black"} onClick={()=> setPage(index+1)} key={index}>{index+1}</Button>
    ))}
<Button onClick={()=>setPage(page+1)}  isDisabled={page===totalPage} >{"Next"}</Button>


    </Stack>
  )
}

export default Pagination