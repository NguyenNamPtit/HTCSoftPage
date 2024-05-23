import {
  Box,
  Flex,
  ListItem,
  Select,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const ChangeLog = () => {
  const buttonColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--button-color");
  return (
    <Flex justifyContent={"center"}>
      <Flex
        direction={"column"}
        marginTop={"40px"}
        gap={"12px"}
        width={{ md: "812px" }}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Text
              fontSize={"16px"}
              fontWeight={600}
              lineHeight={"18px"}
              letterSpacing={"1.2px"}
              textTransform={"uppercase"}
            >
              version:
            </Text>
            <form
              onFocus={(e) => {
                e.target.blur();
              }}
            >
              <Select border={"none"} outline={"none"}>
                <option value="true">4.9.15</option>
                <option value="true">4.9.14</option>
                <option value="true">4.9.13</option>
                <option value="true">4.9.12</option>
                <option value="true">4.9.11</option>
              </Select>
            </form>
          </Flex>
          <Box>
            <Text fontSize={"14px"} fontWeight={600}>
              Last update:{" "}
            </Text>
          </Box>
        </Flex>
        <Flex direction={"column"}>
          <Text fontSize={"16px"} fontWeight={600} color={buttonColor}>
            New:
          </Text>
          <UnorderedList marginLeft={"30px"} fontSize={"16px"} fontWeight={500}>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </ListItem>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </ListItem>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud{" "}
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex direction={"column"}>
          <Text fontSize={"16px"} fontWeight={600} color={buttonColor}>
            Improvement:
          </Text>
          <UnorderedList marginLeft={"30px"} fontSize={"16px"} fontWeight={500}>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </ListItem>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </ListItem>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud{" "}
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex direction={"column"}>
          <Text fontSize={"16px"} fontWeight={600} color={buttonColor}>
            Fix:
          </Text>
          <UnorderedList marginLeft={"30px"} fontSize={"16px"} fontWeight={500}>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </ListItem>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </ListItem>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud{" "}
            </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ChangeLog;
