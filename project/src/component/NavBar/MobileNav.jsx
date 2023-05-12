import React, { useState } from 'react'
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from '@chakra-ui/icons'
import "../../CSS/Nav.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'

import { Stack, Box, Text, HStack, Button, Flex, IconButton, Image } from "@chakra-ui/react";
// RiArrowDropDownLine
import BANNER from '../imagess/Nbanner.webp'
// import {Box} from ""



const MobileNav = ({setHamburger,hamburger}) => {
    
    function handleInput() {

    }
    return (
        <Box border={"none"} >
            {hamburger ? <Box  w={"100%"} p={"1%"} border={"none"}>
                <nav className="HamNav">
                    <Flex color={"black"} justifyContent={"space-between"}><IconButton onClick={()=>setHamburger(false)} color={"black"} bgColor={"white"}><RxCross2 /></IconButton> <Button color={"white"} bgColor={"#E91E63"}>Login</Button></Flex>
                    <img src={BANNER} alt="" />

                    <ul>
                        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            Men
                            <p><RiArrowDropDownLine size={"30px"} /></p>

                        </li>
                        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            Women
                            <p><RiArrowDropDownLine size={"30px"} /></p>

                        </li>
                        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            Kids
                            <p><RiArrowDropDownLine size={"30px"} /></p>

                        </li>
                        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            Home & Living
                            <p><RiArrowDropDownLine size={"30px"} /></p>

                        </li>
                        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            Beauty
                            <p><RiArrowDropDownLine size={"30px"} /></p>

                        </li>
                        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            Studio
                            <p><RiArrowDropDownLine size={"30px"} /></p>

                        </li>
                    </ul>
                </nav>

            </Box> : ''
                
            }

        </Box>
    )
}

export default MobileNav
