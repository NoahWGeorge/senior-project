import '../App.css'
import { HStack, Image} from "@chakra-ui/react"
import logo from '../assets/siteIcon.png'
import ColorModeSwitch from "./ColorModeSwitch"
import React from "react"
//import { IconButton } from '@chakra-ui/react'

interface NavbarProps {
  onHomeClick: () => void;
  onGalleryClick: () => void;
  onAboutClick: () => void;
}




const NavBar: React.FC<NavbarProps> = ({ onHomeClick, onGalleryClick, onAboutClick }) => {
  return (
    <HStack justifyContent={'space-between'}  >
        <Image src={logo} boxSize='60px' />
        <ul >
        
          <button className= "homebtn" >Home</button>
        
        
          <button className="gallerybtn" >Gallery</button>
        
        
          <button className= "aboutbtn" >About</button>
      
      </ul>
        <ColorModeSwitch   />
        

        
        
    
    </HStack>
  )
}

export default NavBar