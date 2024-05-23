import React, { useState } from "react";
import CustomContainer from "../../../components/container";
import { Box, Flex, Text } from "@chakra-ui/react";
import Desciption from "./description";
import Faq from "./faq";
import Review from "./review";
import ChangeLog from "./changelog";

const ProductTab = () => {
  const [currentTab, setcurrentTab] = useState(0);

  const productTab = [
    {
      title: "DESCRIPTION",
      content: <Desciption />,
    },
    {
      title: "FAQ",
      content: <Faq />,
    },
    {
      title: "REVIEW",
      content: <Review />,
    },
    {
      title: "CHANGELOG",
      content: <ChangeLog />,
    },
  ];
  return (
    <CustomContainer
      marginLeft={{ base: "16px", md: "59px", "2xl": "auto" }}
      marginRight={{ base: "16px", md: "59px", "2xl": "auto" }}
    >
      <Flex
        justifyContent={"center"}
        gap={{base:"15px", md: "40px"}}
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
                color={
                  currentTab == index ? "var(--Primary-400, #1A5BDA)" : "black"
                }
              >
                {e?.title}
              </Text>
            </Box>
          );
        })}
      </Flex>

      <Box>{productTab[currentTab].content}</Box>
    </CustomContainer>
  );
};

export default ProductTab;
