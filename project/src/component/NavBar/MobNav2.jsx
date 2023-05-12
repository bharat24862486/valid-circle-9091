// import { Box } from '@chakra-ui/react'
import React from 'react'
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from '@chakra-ui/icons'
// import "../../CSS/Nav.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'

import { Stack, Box, Text, HStack, Button, Flex, IconButton, Image } from "@chakra-ui/react";

const MobNav2 = ({hamburger,setHamburger}) => {
    return (
        <Box>
            <Box border={"none"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={"1%"}>

                <Box display={"flex"} alignItems={"center"} w={["25%","25%","25%"]}>
                    <IconButton onClick={() => setHamburger(true)}><GiHamburgerMenu /></IconButton>

                    <Box>
                        <Image src='https://i.ibb.co/kG5RxHg/StyleHub.png' alt="" w={["80%","70%","55%"]} />
                    </Box>
                </Box>

                <Box display={"flex"} w={"40%"} justifyContent={"space-between"} mt={"2%"} alignItems={"center"} >
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Image src="https://img.icons8.com/ios/256/gender-neutral-user--v1.png" style={{ width: "25px" }} alt="" />
                        <Text fontSize={"1.9vw"}>Profile</Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Image src="https://img.icons8.com/ios-glyphs/256/hearts.png" style={{ width: "25px" }} alt="" />
                        <Text fontSize={"1.9vw"}>Wishlist</Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Image src="https://img.icons8.com/windows/256/shopping-bag-full.png" style={{ width: "25px" }} alt="" />
                        <Text fontSize={"1.9vw"}>Bag</Text>
                    </Box>



                </Box>
            </Box>

        </Box>
    )
}

export default MobNav2
