import {
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import facebook from "../../assets/images/Facebook.svg";
import google from "../../assets/images/Vector.svg";
import email from "../../assets/images/[Icon] mail-line.svg";
import password from "../../assets/images/[Icon] lock-2-line.svg";
import user from "../../assets/images/[Icon] user-line.svg";
import { Link } from "react-router-dom";
const SignUp = () => {
  const buttonColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--button-color");
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      padding={"40px"}
      gap={"24px"}
      width={{ base: "100%", sm: "440px" }}
      position={"absolute"}
      top={"80px"}
      right={{ base: "0px", sm: "30%" }}
      zIndex={12}
      backgroundColor={"#FFF"}
      boxShadow={"0px 24px 64px rgba(0, 0, 0, 0.1) !important"}
    >
      <Box>
        <Text fontSize={"28px"} fontWeight={800} lineHeight={"34px"}>
          Create account!
        </Text>
      </Box>
      <Box>
        <Flex
          alignItems={"center"}
          backgroundColor={"#F5F5F5"}
          padding={"9px 12px"}
          marginBottom={"16px"}
        >
          <Image src={user} />
          <Input placeholder="Name" type="type" border={"none"} />
        </Flex>
        <Flex
          alignItems={"center"}
          backgroundColor={"#F5F5F5"}
          padding={"9px 12px"}
          marginBottom={"16px"}
        >
          <Image src={email} />
          <Input placeholder="Email" type="email" border={"none"} />
        </Flex>
        <Flex
          alignItems={"center"}
          backgroundColor={"#F5F5F5"}
          padding={"9px 12px"}
          marginBottom={"16px"}
        >
          <Image src={password} />
          <Input placeholder="Password" type="text" border={"none"} />
        </Flex>
        <Flex
          alignItems={"center"}
          backgroundColor={"#F5F5F5"}
          padding={"9px 12px"}
          marginBottom={"16px"}
        >
          <Image src={password} />
          <Input placeholder="Confirm Password" type="text" border={"none"} />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex padding={"8px 12px"} gap={"8px"}>
            <Checkbox />
            <Text fontSize={"14px"} fontWeight={600} lineHeight={"18px"}>
              Agree with our
            </Text>
            <Link to={""}>
              <Text color={buttonColor}>Terms and Services</Text>
            </Link>
          </Flex>
        </Flex>
      </Box>
      <Button
        padding={"15px 24px"}
        borderRadius={"0px"}
        backgroundColor={buttonColor}
        color={"#FFF"}
      >
        SIGN UP
      </Button>
      <Flex alignItems={"center"} justifyContent={"center"} gap={"8px"}>
        <Text fontSize={"14px"} fontWeight={600} color={"#757575"}>
          Already have account?
        </Text>
        <Link>
          <Text fontSize={"14px"} fontWeight={600} color={buttonColor}>
            LOG IN
          </Text>
        </Link>
      </Flex>
      <Flex alignItems={"center"} justifyContent={"center"} gap={"16px"}>
        <Text fontSize={"14px"} fontWeight={600} color={"#757575"}>
          Or log in with
        </Text>
        <Image src={facebook} />
        <Image src={google} />
      </Flex>
    </Flex>
  );
};

export default SignUp;
