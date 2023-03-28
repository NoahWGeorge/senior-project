import React from "react";
import "../App.css";
import sitelogo from "../assets/siteIcon.png";
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
      <Image src={sitelogo} boxSize="60px" />
      <ul>
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
     
      <div className="dropdown">
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

          <button className="shopbtn">
            <Image src={shopimage} boxSize="45px"></Image>{" "}
          </button>
        </ul>
      </div>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
