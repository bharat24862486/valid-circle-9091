import React, { useState } from 'react'
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from '@chakra-ui/icons'
import "../../CSS/Nav.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiArrowDropDownLine } from 'react-icons/ri'
// RiArrowDropDownLine
import BANNER from '../imagess/Nbanner.webp'



const MobileNav = () => {
    const [hamburger, setHamburger] = useState(false)
    function handleInput() {

    }
    return (
        <div>
            <div className='NavMain'>

                <div className='HamBurger'>
                    <GiHamburgerMenu onClick={()=>setHamburger(!hamburger)}/>
                    <div>
                        <img src='https://i.ibb.co/kG5RxHg/StyleHub.png' alt="" style={{ width: "100px", marginLeft: "20px" }} />
                    </div>
                </div>
                <div className='firstNavMain'>
                    {/* <nav id="nav">
                        <ul>
                            <li>
                                Men

                            </li>
                            <li>
                                Women

                            </li>
                            <li>
                                Kids

                            </li>
                            <li>
                                Home & Living

                            </li>
                            <li>
                                Beauty

                            </li>
                            <li>
                                Studio

                            </li>
                        </ul>
                    </nav> */}
                </div>
                {/* <div className='secondNavMain'>
        <div>
        
        <input type="text"  onChange={handleInput} />
        <span><SearchIcon /></span>
        </div>


      </div> */}
                <div className='thirdNavMain'>
                    <div>
                        <img src="https://img.icons8.com/ios/256/gender-neutral-user--v1.png" style={{ width: "25px" }} alt="" />
                        <p>Profile</p>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/ios-glyphs/256/hearts.png" style={{ width: "25px" }} alt="" />
                        <p>Wishlist</p>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/windows/256/shopping-bag-full.png" style={{ width: "25px" }} alt="" />
                        <p>Bag</p>
                    </div>



                </div>
            </div>
            {hamburger ? <div className='HiddenPart'>
            <nav className="HamNav">
                <img src={BANNER} alt="" />

                        <ul>
                            <li style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                                Men
                                <p><RiArrowDropDownLine size={"30px"} /></p>

                            </li>
                            <li style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                                Women
                                 <p><RiArrowDropDownLine size={"30px"} /></p>

                            </li>
                            <li style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                                Kids
                                 <p><RiArrowDropDownLine size={"30px"} /></p>

                            </li>
                            <li style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                                Home & Living
                                 <p><RiArrowDropDownLine size={"30px"} /></p>

                            </li>
                            <li style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                                Beauty
                                 <p><RiArrowDropDownLine size={"30px"} /></p>

                            </li>
                            <li style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                                Studio
                                 <p><RiArrowDropDownLine size={"30px"} /></p>

                            </li>
                        </ul>
                    </nav>

            </div> : ''}
        </div>
    )
}

export default MobileNav
