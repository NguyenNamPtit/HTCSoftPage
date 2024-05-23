import { Box, Flex, FormLabel, Select, Text } from "@chakra-ui/react";
import React from "react";

const AccountDetail = () => {
  return (
    <Flex direction={"column"} gap={"24px"}>
      <Box>
        <Text>EMAIL</Text>
        <Flex>
          <Text>sample.email@gmail.com</Text>
          <Text>Change</Text>
        </Flex>
      </Box>
      <Box>
        <Text>NAME</Text>
        <Box>
          <Text>Ducky The Worrier</Text>
        </Box>
      </Box>
      <Box>
        
      </Box>
    </Flex>
  );
};

export default AccountDetail;
