import React from "react";
import "../App.css";
import sitelogo2 from "../assets/siteIcon2.png";
import usrimage from "../assets/user.png";
import shopimage from "../assets/shopping.png";
import ColorModeSwitch from "./ColorModeSwitch";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface NavbarProps {
  onHomeClick: () => void;
  onGalleryClick: () => void;
  onAboutClick: () => void;
}

const NavBar: React.FC<NavbarProps> = ({
  onHomeClick,
  onGalleryClick,
  onAboutClick,
}) => {
  return (

    <HStack justifyContent={"space-between"}>
      <Image src={sitelogo2} boxSize="60px" />
      <ul justify-content-between>
        <Link to="/">
          <button className="homebtn">Home</button>
        </Link>

        <Link to="/gallery">
          <button className="gallerybtn">Gallery</button>
        </Link>

        <Link to="/about">
          <button className="aboutbtn">About</button>
        </Link>
      </ul>
     
      <div className="SideButtons" style={{ display: "flex", justifyContent: "space-between" }}>
        <ul>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Profile
            </MenuButton>
            <MenuList>
              <MenuItem>likes</MenuItem>
              <Link to ="/SignUpForm">
              <MenuItem>sign in/up</MenuItem>
              </Link>
              <MenuItem>settings</MenuItem>

            </MenuList>
          </Menu>
          </ul>

          <Link to ="/ShoppingCart" className="shopbtn">
            <Image src={shopimage} boxSize="45px"></Image>{" "}
          </Link>
        

        <ColorModeSwitch />
      </div>

    </HStack>
  );
};

export default NavBar;
