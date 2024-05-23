import React, { useState } from "react";
import CustomContainer from "../../components/container";
import { Box, Flex, Text } from "@chakra-ui/react";
import AvatarUpload from "./avatarupload/index,";
import AccountDetail from "./accountdetail";

const Account = () => {
  const [currentTab, setcurrentTab] = useState(0);

  const productTab = [
    {
      title: "Account detail",
      content: <AccountDetail/>,
    },
    {
      title: "Order history",
      content: 2,
    },
    {
      title: "Security",
      content: 3,
    },
    {
      title: "Newsletter",
      content: 4,
    },
    {
      title: "My reviews",
      content: 5,
    },
  ];
  return (
    <CustomContainer
      marginLeft={{ base: "16px", md: "59px", "2xl": "auto" }}
      marginRight={{ base: "16px", md: "59px", "2xl": "auto" }}
      marginBottom={"64px"}
    >
      <Flex direction={"column"} gap={"24px"}>
        <Box paddingLeft={"20%"} marginLeft={"24px"}>
          <Text fontSize={"64px"} fontWeight={800} lineHeight={"76px"}>
            Your Account
          </Text>
        </Box>
        <Flex gap={"24px"}>
          <Box width={"20%"} marginTop={"42px"}>
            <AvatarUpload />
          </Box>
          <Flex direction={"column"}>
            <Flex
              justifyContent={"center"}
              gap={{ base: "15px", md: "40px" }}
              borderBottom="1px solid var(--Shade-200, #EEE)"
            >
              {productTab.map((e, index) => {
                return (
                  <Box
                    key={index}
                    onClick={() => setcurrentTab(index)}
                    cursor={"pointer"}
                    padding={"12px 0"}
                    borderBottom={
                      currentTab === index
                        ? "2px solid var(--Primary-400, #1A5BDA)"
                        : "none"
                    }
                  >
                    <Text
                      fontSize={"14px"}
                      fontWeight={600}
                      lineHeight={"16px"}
                      letterSpacing={"1px"}
                      textTransform={"uppercase"}
                      color={
                        currentTab == index
                          ? "var(--Primary-400, #1A5BDA)"
                          : "black"
                      }
                    >
                      {e?.title}
                    </Text>
                  </Box>
                );
              })}
            </Flex>

            <Box>{productTab[currentTab].content}</Box>
          </Flex>
        </Flex>
      </Flex>
    </CustomContainer>
  );
};

export default Account;
