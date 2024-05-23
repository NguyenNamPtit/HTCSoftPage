import React, { useEffect, useRef, useState } from "react";
import CustomContainer from "../../../components/container";
import { Box, Button, Checkbox, Flex, Image, Text } from "@chakra-ui/react";
import Slide from "../../../components/swipperslide/index";
//
import checkbox from "../../../assets/images/CheckBox.svg";
import cart from "../../../assets/images/[Icon] shopping-bag-line.svg";
import monneyback from "../../../assets/images/[Icon] refund-2-line.svg";
import timeupdate from "../../../assets/images/[Icon] calendar-check-line.svg";
import headphone from "../../../assets/images/[Icon] headphone-line.svg";
import arrowright from "../../../assets/images/[Icon] arrow-right-line.svg";

const ProductInfo = () => {
  const buttonColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--button-color");
  const background = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--background");
  const textprice = getComputedStyle(document.documentElement).getPropertyValue(
    "--text"
  );
  const text = getComputedStyle(document.documentElement).getPropertyValue(
    "--secondary-text-color"
  );
  return (
    <>
      <style>
        {`
          input[type="checkbox"] {
            display: none;
          }
          input[type="checkbox"]:checked + label span {
            color: ${buttonColor};
          }
        `}
      </style>
      <CustomContainer
        marginLeft={{ base: "16px", md: "59px", "2xl": "auto" }}
        marginRight={{ base: "16px", md: "59px", "2xl": "auto" }}
        marginBottom={"64px"}
      >
        <Flex
          gap={"8px"}
          marginBottom={"8px"}
          display={{ base: "none", md: "flex" }}
        >
          <Box padding={"10px 0px"}>
            <Text fontSize={"14px"} fontWeight={"600"}>
              PRODUCTS
            </Text>
          </Box>
          <Text padding={"10px 0px"} fontSize={"14px"} fontWeight={"600"}>
            /
          </Text>
          <Box padding={"10px 0px"}>
            <Text fontSize={"14px"} fontWeight={"600"}>
              SHOPWARE
            </Text>
          </Box>
          <Text padding={"10px 0px"} fontSize={"14px"} fontWeight={"600"}>
            /
          </Text>
          <Box
            padding={"10px 0px"}
            fontSize={"14px"}
            color={"#1A5BDA"}
            fontWeight={"600"}
          >
            Shopware 6 - Product attachment
          </Box>
        </Flex>
        <Flex gap={"24px"} direction={{ base: "column", md: "row" }}>
          <Box
            width={{ base: "100%", md: "50%" }}
            gap={"12px"}
            height={"100%"}
            display={{ base: "none", md: "block" }}
          >
            <Slide />
            <Flex justifyContent={"center"} gap={"24px"}>
              <Text fontSize={"16px"} fontWeight={"600"} color={buttonColor}>
                FRONTEND DEMO
              </Text>
              <Text fontSize={"16px"} fontWeight={"600"} color={buttonColor}>
                BACKEND DEMO
              </Text>
            </Flex>
          </Box>

          <Flex
            direction={"column"}
            width={{ base: "100%", md: "50%" }}
            gap={"40px"}
          >
            <Box>
              <Text
                fontSize={{ base: "28px", md: "40px" }}
                fontWeight={800}
                lineHeight={{ base: "34px", md: "48px" }}
                marginBottom={"8px"}
              >
                Shopware 6 - Product attachment
              </Text>
              <Flex alignItems={"flex-end"}>
                <Text
                  fontSize={{ base: "28px", md: "40px" }}
                  color={buttonColor}
                  fontWeight={800}
                  marginRight={"8px"}
                >
                  $14.23
                </Text>
                <Text
                  fontSize={{ base: "16px", md: "20px" }}
                  fontWeight={600}
                  marginBottom={"5px"}
                  color={textprice}
                >
                  $40.55
                </Text>
              </Flex>
            </Box>
            <Box
              width={{ base: "100%", md: "50%" }}
              gap={"12px"}
              height={"100%"}
              display={{ base: "block", md: "none" }}
            >
              <Slide />
              <Flex justifyContent={"center"} gap={"24px"}>
                <Text fontSize={"16px"} fontWeight={"600"} color={buttonColor}>
                  FRONTEND DEMO
                </Text>
                <Text fontSize={"16px"} fontWeight={"600"} color={buttonColor}>
                  BACKEND DEMO
                </Text>
              </Flex>
            </Box>
            <Box>
              <Text
                fontSize={"14px"}
                fontWeight={600}
                textTransform="uppercase"
                lineHeight={"16px"}
                letterSpacing="1px"
              >
                Additional services
              </Text>
              <Box width={{ base: "100%", xl: "50%" }}>
                <Flex
                  gap={"8px"}
                  padding={"8px 16px"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Checkbox  />
                  <Text width={"80%"}>Service 1</Text>
                  <Text>1</Text>
                </Flex>
                <Flex
                  gap={"8px"}
                  padding={"8px 16px"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Checkbox/>
                  <Text width={"80%"}>Service sample 2</Text>
                  <Text>1</Text>
                </Flex>
                <Flex
                  gap={"8px"}
                  padding={"8px 16px"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Checkbox/>
                  <Text width={"80%"}>Sample service 3</Text>
                  <Text>1</Text>
                </Flex>
              </Box>
            </Box>
            <Button backgroundColor={buttonColor} color={"#FFF"}>
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <Image color="#FFF" src={cart} />
                <Text>ADD TO CART</Text>
              </Box>
            </Button>
            <Flex
              backgroundColor={background}
              padding={"16px 40px"}
              gap={"16px"}
              justifyContent={"space-between"}
            >
              <Flex direction={"column"} alignItems={"center"} gap={"8px"}>
                <Image src={monneyback} />
                <Text textAlign={"center"}>60-day money back</Text>
              </Flex>
              <Flex direction={"column"} alignItems={"center"} gap={"8px"}>
                <Image src={timeupdate} />
                <Text textAlign={"center"}>Life time update</Text>
              </Flex>
              <Flex direction={"column"} alignItems={"center"} gap={"8px"}>
                <Image src={headphone} />
                <Text textAlign={"center"}>365-day support</Text>
              </Flex>
            </Flex>
            <Box>
              <Text
                fontSize={"16px"}
                fontWeight={600}
                lineHeight={"22px"}
                color={text}
              >
                The Product Label module provided by HTC is a great module
                because it helps to highlight new products and other special
                products to attract customers' attention. At the same time, this
                module also supports your marketing campaign effectively and
                helps increase sales. Features: Attract customers by
                highlighting products: new product, best-seller, freeship,
                discount,... Can highlight for product or category Hide this
                label if the product has another label with a higher priority
                being used Can choose store view to display
              </Text>
              <Flex gap={"6px"} padding={"14px 0"}>
                <Text
                  fontSize={"16px"}
                  fontWeight={600}
                  lineHeight={"18px"}
                  letterSpacing={"1.2px"}
                  color={buttonColor}
                >
                  READ MORE
                </Text>
                <Image src={arrowright} />
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </CustomContainer>
    </>
  );
};

export default ProductInfo;
