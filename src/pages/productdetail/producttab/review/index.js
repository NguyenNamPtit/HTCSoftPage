import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
//
import StarRateIcon from "@mui/icons-material/StarRate";

const Review = () => {
  const buttonColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--button-color");
  return (
    <Flex justifyContent={"center"}>
      <Flex
        marginTop={"40px"}
        gap={"16px"}
        direction={{ base: "column", md: "row" }}
        width={{ md: "812px", base: "100%" }}
      >
        <Flex
          direction={{ base: "row", md: "column" }}
          gap={"16px"}
          alignItems={"center"}
        >
          <Box>
            <Text fontSize={"64px"} fontWeight={800}>
              5.0
            </Text>
          </Box>
          <Flex direction={"column"} justifyContent={"flex-start"}>
            <Text fontSize={"16px"} fontWeight={600} marginLeft={"5px"}>
              4 Reviews
            </Text>
            <Box color={"#F8D002"}>
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
            </Box>
          </Flex>
        </Flex>
        <Flex
          direction={"column"}
          gap={"8px"}
          width={{ base: "100%", md: "70%" }}
          justifyContent={"flex-end"}
        >
          <Box>
            <Input
              backgroundColor={"#F5F5F5"}
              padding={"9px 12px"}
              placeholder="Your name"
            />
          </Box>
          <Box>
            <Input
              backgroundColor={"#F5F5F5"}
              height={"115px"}
              placeholder="What do you think about our product?"
            />
          </Box>
          <Button
            width={{ base: "100%", md: "35%" }}
            backgroundColor={buttonColor}
            color={"#FFF"}
            padding={"15px 24px"}
          >
            ADD YOUR REVIEW
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Review;
