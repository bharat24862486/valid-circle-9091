import {   useToast } from "@chakra-ui/react"

export function ToastStatus ( {title, des, status}) {
    const toast = useToast()

    const statuses = ['success', 'error', 'warning', 'info']
  


    return (
       toast({
        title: title,
        description: des,
        duration: 3000,
        isClosable: true,
        status: statuses[status],
        position:'top',
        // icon: icon
       })

    )
  }