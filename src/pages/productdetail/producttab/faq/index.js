import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Faq = () => {
  const buttonColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--button-color");
  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      marginTop={"40px"}
      gap={"10px"}
    >
      <Button backgroundColor={buttonColor} color={"#FFF"}>
        ASK QUESTION
      </Button>
      <Box>
        <Text>No questions yet. Be the first to ask the question!</Text>
      </Box>
    </Flex>
  );
};

export default Faq;
