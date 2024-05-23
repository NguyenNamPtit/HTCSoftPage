import React, { useState } from "react";
import CustomContainer from "../container";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  ListItem,
  Select,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import menuIcon from "../../assets/images/[Icon] menu-fill.svg";
import searchLogo from "../../assets/images/[Icon] search-line.svg";
import appLogo from "../../assets/images/[Cell] Logo.png";
import cartLogo from "../../assets/images/Cart.svg";
import userLogo from "../../assets/images/[Icon] user-line.svg";
import close from "../../assets/images/[Icon] close.svg";
import Navbar from "../Navbar/Navbar";
//
import product1 from "../../assets/images/[Product] Image.png";
import "./index.css";
import SignIn from "../../pages/signin";
import SignUp from "../../pages/signup";
const Header = () => {
  const buttonColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--button-color");
  const [shownavbar, setshownacbar] = useState(false);
  const [showSearchInput, setshowSearchInput] = useState(true);
  const [closeSearchInput, setcloseSearchInput] = useState(false);
  const [showCart, setshowCart] = useState(false);
  const [showuser, setshowuser] = useState(false);
  const [showsignin, setshowsignin] = useState(false);
  const [showsignup, setshowsignup] = useState(false);
  const handleShowNavbar = () => {
    setshownacbar(!shownavbar);
  };
  //
  const handleOpenSearch = () => {
    setshowSearchInput(!showSearchInput);
    setcloseSearchInput(!closeSearchInput);
  };
  const handleCloseSearch = () => {
    setcloseSearchInput(!closeSearchInput);
    setshowSearchInput(!showSearchInput);
  };
  const handleShowCart = () => {
    setshowCart(!showCart);
  };
  const handleShowUser = () => {
    setshowuser(!showuser);
  };
  const handleSignIn = () => {
    setshowsignin(!showsignin);
  };
  const handleSignUp = () => {
    setshowsignup(!showsignup);
  };
  return (
    <Box>
      <CustomContainer
        paddingBottom={"0px"}
        marginLeft={{ base: "16px", md: "59px", "2xl": "auto" }}
        marginRight={{ base: "16px", md: "59px", "2xl": "auto" }}
        position="relative"
      >
        {showSearchInput && (
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            padding={"20px 0"}
            height={"80px"}
          >
            <Flex alignItems={"center"} gap={"46px"}>
              <Flex gap={"16px"} alignItems={"center"}>
                <Box display={{ base: "block", md: "block", lg: "none" }}>
                  <Image src={menuIcon} onClick={handleShowNavbar} />
                </Box>
                <Link to="">
                  <Image src={appLogo} alt="logo" />
                </Link>
              </Flex>
              <Flex display={{ base: "none", md: "none", lg: "block" }}>
                <UnorderedList
                  listStyleType={"none"}
                  display={"flex"}
                  gap={"24px"}
                >
                  <ListItem
                    display={"flex"}
                    gap={"4px"}
                    alignItems={"center"}
                    padding={"12px"}
                  >
                    <Box
                      width={"6px"}
                      height={"6px"}
                      backgroundColor={buttonColor}
                    />
                    <Link to="/">
                      <Text
                        fontSize={"14px"}
                        fontWeight={"600"}
                        color={buttonColor}
                      >
                        HOME
                      </Text>
                    </Link>
                  </ListItem>
                  <ListItem
                    display={"flex"}
                    gap={"4px"}
                    alignItems={"center"}
                    padding={"12px"}
                  >
                    <Box
                      width={"6px"}
                      height={"6px"}
                      backgroundColor={buttonColor}
                      display={"none"}
                    />
                    <Link to="/Products">
                      <Text fontSize={"14px"} fontWeight={"600"}>
                        PRODUCTS
                      </Text>
                    </Link>
                  </ListItem>
                  <ListItem
                    display={"flex"}
                    gap={"4px"}
                    alignItems={"center"}
                    padding={"12px"}
                  >
                    <Box
                      width={"6px"}
                      height={"6px"}
                      backgroundColor={buttonColor}
                      display={"none"}
                    />
                    <Link to="/About Us">
                      <Text fontSize={"14px"} fontWeight={"600"}>
                        ABOUT US
                      </Text>
                    </Link>
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
            <Flex alignItems={"center"} gap={"16px"}>
              <Flex
                alignItems={"center"}
                padding={"12px 8px"}
                display={{ base: "none", md: "none", lg: "flex" }}
              >
                <Text fontSize={"14px"} fontWeight={"600"}>
                  $
                </Text>
                <form
                  onFocus={(e) => {
                    e.target.blur();
                  }}
                >
                  <Select border={"none"} outline={"none"}>
                    <option value="true">USD</option>
                    <option value="true">EURO</option>
                  </Select>
                </form>
              </Flex>

              <Box display={{ base: "none", md: "none", lg: "block" }}>
                <Image src={searchLogo} onClick={handleOpenSearch} />
              </Box>
              <Box>
                <Image src={cartLogo} onClick={handleShowCart} />
              </Box>
              <Box>
                <Image src={userLogo} onClick={handleShowUser} />
              </Box>
            </Flex>
          </Flex>
        )}
        {closeSearchInput && (
          <Flex justifyContent={"center"}>
            <Flex
              alignItems={"center"}
              justifyContent={"space-around"}
              padding={"20px 0"}
              height={"80px"}
              width={"640px"}
              className="animation"
            >
              <Image src={searchLogo} />
              <Input
                border={"none"}
                type="text"
                placeholder="Search products..."
              />
              <Image src={close} onClick={handleCloseSearch} />
            </Flex>
          </Flex>
        )}
        {showCart && (
          <Flex
            gap={"16px"}
            direction={"column"}
            position={"absolute"}
            top={"80px"}
            right={0}
            minWidth={"unset"}
            width={{ base: "100%", sma: "440px" }}
            backgroundColor={"#FFF"}
            boxShadow={"0px 24px 64px rgba(0, 0, 0, 0.1) !important"}
            zIndex={10}
            padding={"16px 24px"}
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text fontSize={"16px"} fontWeight={800}>
                Cart()
              </Text>
              <Image src={close} onClick={handleShowCart} />
            </Flex>
            <Flex alignItems={"center"} gap={"12px"}>
              <Image src={product1} width={"80px"} height={"60px"} />
              <Flex direction={"column"} gap={"4px"} width={"100%"}>
                <Text fontSize={"14px"} fontWeight={600}>
                  Shopware 6 - Product attachment
                </Text>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Text fontSize={"16px"} fontWeight={600} color={buttonColor}>
                    $14.43
                  </Text>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Button
                      border={"none"}
                      backgroundColor={"#FFF"}
                      _hover={{ backgroundColor: "#FFF" }}
                    >
                      -
                    </Button>
                    <Text>1</Text>
                    <Button
                      border={"none"}
                      backgroundColor={"#FFF"}
                      _hover={{ backgroundColor: "#FFF" }}
                    >
                      +
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Box>
              <Link to="cart">
                <Text
                  fontSize={"16px"}
                  fontWeight={600}
                  textAlign={"center"}
                  color={buttonColor}
                  cursor={"pointer"}
                >
                  VIEW CART
                </Text>
              </Link>
            </Box>
          </Flex>
        )}
        {showuser && (
          <Flex
            position={"absolute"}
            top={"80px"}
            right={"0px"}
            width={"125px"}
            backgroundColor={"#FFF"}
            boxShadow={"0px 24px 64px rgba(0, 0, 0, 0.1) !important"}
            direction={"column"}
            zIndex={"11"}
          >
            <Box _hover={{ backgroundColor: "#BDBDBD" }} padding={"5px 10px"}>
              <Link to={"account"}>My Account</Link>
            </Box>
            <Box
              _hover={{ backgroundColor: "#BDBDBD" }}
              padding={"5px 10px"}
              onClick={handleSignUp}
            >
              <Text>Create Account</Text>
            </Box>
            <Box
              _hover={{ backgroundColor: "#BDBDBD" }}
              padding={"5px 10px"}
              onClick={handleSignIn}
            >
              <Text>Sign In</Text>
            </Box>
          </Flex>
        )}
        {showsignin && <SignIn />}
        {showsignup && <SignUp />}
      </CustomContainer>

      {shownavbar && <Navbar />}
    </Box>
  );
};

export default Header;
