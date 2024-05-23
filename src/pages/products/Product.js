import React from "react";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import CustomContainer from "../../components/container";
import StarRateIcon from "@mui/icons-material/StarRate";
import { NavLink } from "react-router-dom";
//
import checkbox from "../../assets/images/CheckBox.svg";
import moneydollar from "../../assets/images/MoneyDollar.svg";
import arrowup from "../../assets/images/ArrowUp.svg";
import arrowdown from "../../assets/images/ArrowDown.svg";
import product1 from "../../assets/images/[Product] Image.png";
import arrowleft from "../../assets/images/ArrowLeft.svg";
import arrowRight from "../../assets/images/ArrowRight.svg";
import listproduct from "../../assets/images/IconListProduct.svg";
const Product = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <CustomContainer width={"100%"}>
        <Flex>
          <Box width={{ base: "0%", md: "25%" }}></Box>
          <Box width={{ base: "100%", md: "75%" }} paddingLeft={{ md: "24px" }}>
            <Text fontSize={{ base: "40px", md: "64px" }} fontWeight={"800"}>
              Products
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Flex
            display={{ base: "none", lg: "block" }}
            width={"25%"}
            paddingRight={{ md: "24px" }}
          >
            <Flex direction={"column"} gap={"8px"} marginBottom={"24px"}>
              <Box>
                <Text fontSize={"16px"} fontWeight={"800"}>
                  Category
                </Text>
              </Box>
              <Flex direction={"column"}>
                <Flex
                  padding={"11px 16px"}
                  gap={"8px"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={"14px"}>All</Text>
                  <Text fontSize={"14px"}>12</Text>
                </Flex>
                <Flex
                  padding={"11px 16px"}
                  gap={"8px"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={"14px"}>Magento 2</Text>
                  <Text fontSize={"14px"}>9</Text>
                </Flex>
                <Flex
                  padding={"11px 16px"}
                  gap={"8px"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={"14px"}>Software</Text>
                  <Text fontSize={"14px"}>3</Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={"8px"} marginBottom={"24px"}>
              <Box>
                <Text fontSize={"16px"} fontWeight={"800"}>
                  Platform
                </Text>
              </Box>
              <Flex direction={"column"}>
                <Flex padding={"8px 16px"} gap={"8px"}>
                  <Checkbox />
                  <Text fontSize={"14px"}>Magento 2</Text>
                </Flex>
                <Flex padding={"8px 16px"} gap={"8px"}>
                  <Checkbox />
                  <Text fontSize={"14px"}>Shopware 6</Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={"8px"} marginBottom={"24px"}>
              <Box>
                <Text fontSize={"16px"} fontWeight={"800"}>
                  Rating
                </Text>
              </Box>
              <Flex direction={"column"}>
                <Flex padding={"8px 16px"} gap={"8px"}>
                  <Checkbox />
                  <Text fontSize={"14px"}>5 stars</Text>
                </Flex>
                <Flex padding={"8px 16px"} gap={"8px"}>
                  <Checkbox />
                  <Text fontSize={"14px"}>From 4 stars</Text>
                </Flex>
                <Flex padding={"8px 16px"} gap={"8px"}>
                  <Checkbox />
                  <Text fontSize={"14px"}>From 3 stars</Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={"8px"} marginBottom={"8px"}>
              <Box>
                <Text fontSize={"16px"} fontWeight={"800"}>
                  Price range
                </Text>
              </Box>
              <Flex direction={"column"}>
                <Flex padding={"8px 16px"} gap={"8px"}>
                  <Checkbox />
                  <Text fontSize={"14px"}>$0 - $10</Text>
                </Flex>
                <Flex padding={"8px 16px"} gap={"8px"}>
                  <Checkbox />
                  <Text fontSize={"14px"}>$10 - $30</Text>
                </Flex>
                <Flex padding={"8px 16px"} gap={"8px"}>
                  <Checkbox />
                  <Text fontSize={"14px"}>$30 - $50</Text>
                </Flex>
                <Flex padding={"8px 16px"} gap={"8px"}>
                  <Checkbox />
                  <Text fontSize={"14px"}>$50 - $100</Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={"16px"}>
              <Flex gap={"16px"}>
                <InputGroup backgroundColor={"#F5F5F5"} borderColor={"none"}>
                  <InputLeftElement>
                    <Image src={moneydollar} />
                  </InputLeftElement>
                  <Input placeholder="0"></Input>
                </InputGroup>
                <InputGroup backgroundColor={"#F5F5F5"} borderColor={"none"}>
                  <InputLeftElement>
                    <Image src={moneydollar} />
                  </InputLeftElement>
                  <Input placeholder="0"></Input>
                </InputGroup>
              </Flex>
              <Button
                padding={"15px 24px"}
                backgroundColor={"#1A5BDA"}
                opacity={"0.3"}
                borderRadius={"0px"}
              >
                <Text color={"#FFF"}>APPLY</Text>
              </Button>
            </Flex>
          </Flex>
          <Flex
            width={{ base: "100%", md: "100%", lg: "75%" }}
            paddingLeft={{ md: "24px" }}
            gap={"24px"}
            direction={"column"}
          >
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Flex gap={"24px"} alignItems={"center"}>
                <Box display={{ base: "none", md: "block" }}>
                  <Text fontSize={"16px"} fontWeight={"800"}>
                    Sort by
                  </Text>
                </Box>
                <Flex gap={"8px"}>
                  <Button borderRadius={"0px"} padding={"9px 10px"}>
                    <Text fontSize={"14px"}>Featured</Text>
                  </Button>
                  <Button
                    borderRadius={"0px"}
                    padding={"9px 10px"}
                    backgroundColor={"#1A5BDA"}
                    color={"#FFF"}
                  >
                    <Text fontSize={"14px"}>Newest</Text>
                  </Button>
                  <Button borderRadius={"0px"} padding={"9px 10px"} gap={"8px"}>
                    <Text fontSize={"14px"}>Price</Text>
                    <Image
                      display={{ base: "none", md: "block " }}
                      src={arrowup}
                    />
                  </Button>
                  <Button
                    borderRadius={"0px"}
                    padding={"9px 10px"}
                    gap={"8px"}
                    display={{ base: "none", md: "flex" }}
                  >
                    <Text fontSize={"14px"}>Price</Text>
                    <Image src={arrowdown} />
                  </Button>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={"24px"}>
                <Box display={{ base: "none", md: "block" }}>
                  <Text>Show</Text>
                </Box>
                <Flex gap={"8px"}>
                  <Button
                    borderRadius={"0px"}
                    backgroundColor={"#1A5BDA"}
                    padding={"9px 10px"}
                    color={"#FFF"}
                    display={{ base: "none", md: "block" }}
                  >
                    <Text fontSize={"14px"}>12</Text>
                  </Button>
                  <Button
                    borderRadius={"0px"}
                    padding={"9px 10px"}
                    display={{ base: "none", md: "block" }}
                  >
                    <Text fontSize={"14px"}>24</Text>
                  </Button>
                  <Button
                    display={{ base: "block", md: "none" }}
                    padding={{ base: "8px" }}
                    borderRadius={"none"}
                  >
                    <Image src={listproduct} />
                  </Button>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={""}>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(3, 1fr)",
                }}
                gap={"24px"}
                marginBottom={"40px"}
              >
                <GridItem width={"full"} alignItems={"center"}>
                  <Image width={"100%"} marginBottom={"12px"} src={product1} />
                  <Flex direction={"column"} gap={"8px"}>
                    <Text color={"#1A5BDA"}>New</Text>
                    <Flex color={"#F8D002"} alignItems={"center"} gap={"4px"}>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <Text color={"#757575"} fontSize={"12px"}>
                        4.8(12)
                      </Text>
                    </Flex>
                    <NavLink to="/productdetail">
                      <Text fontSize={"16px"} fontWeight={600}>
                        Shopware 6 - Product attachment
                      </Text>
                    </NavLink>
                    <Text fontSize={"16px"} fontWeight={600}>
                      $14.23
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem width={"full"}>
                  <Image width={"100%"} marginBottom={"12px"} src={product1} />
                  <Flex direction={"column"} gap={"8px"}>
                    <Text color={"#1A5BDA"}>New</Text>
                    <Flex color={"#F8D002"} alignItems={"center"} gap={"4px"}>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <Text color={"#757575"} fontSize={"12px"}>
                        4.8(12)
                      </Text>
                    </Flex>
                    <Text fontSize={"16px"} fontWeight={600}>
                      Shopware 6 - Product attachment
                    </Text>
                    <Text fontSize={"16px"} fontWeight={600}>
                      $14.23
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem width={"full"}>
                  <Image width={"100%"} marginBottom={"12px"} src={product1} />
                  <Flex direction={"column"} gap={"8px"}>
                    <Text color={"#1A5BDA"}>New</Text>
                    <Flex color={"#F8D002"} alignItems={"center"} gap={"4px"}>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <Text color={"#757575"} fontSize={"12px"}>
                        4.8(12)
                      </Text>
                    </Flex>
                    <Text fontSize={"16px"} fontWeight={600}>
                      Shopware 6 - Product attachment
                    </Text>
                    <Text fontSize={"16px"} fontWeight={600}>
                      $14.23
                    </Text>
                  </Flex>
                </GridItem>
              </Grid>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(3, 1fr)",
                }}
                gap={"24px"}
                justify="center"
                marginBottom={"40px"}
              >
                <GridItem width={"full"}>
                  <Image width={"100%"} marginBottom={"12px"} src={product1} />
                  <Flex direction={"column"} gap={"8px"}>
                    <Text color={"#1A5BDA"}>New</Text>
                    <Flex color={"#F8D002"} alignItems={"center"} gap={"4px"}>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <Text color={"#757575"} fontSize={"12px"}>
                        4.8(12)
                      </Text>
                    </Flex>
                    <Text fontSize={"16px"} fontWeight={600}>
                      Shopware 6 - Product attachment
                    </Text>
                    <Text fontSize={"16px"} fontWeight={600}>
                      $14.23
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem width={"full"}>
                  <Image width={"100%"} marginBottom={"12px"} src={product1} />
                  <Flex direction={"column"} gap={"8px"}>
                    <Text color={"#1A5BDA"}>New</Text>
                    <Flex color={"#F8D002"} alignItems={"center"} gap={"4px"}>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <Text color={"#757575"} fontSize={"12px"}>
                        4.8(12)
                      </Text>
                    </Flex>
                    <Text fontSize={"16px"} fontWeight={600}>
                      Shopware 6 - Product attachment
                    </Text>
                    <Text fontSize={"16px"} fontWeight={600}>
                      $14.23
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem width={"full"}>
                  <Image width={"100%"} marginBottom={"12px"} src={product1} />
                  <Flex direction={"column"} gap={"8px"}>
                    <Text color={"#1A5BDA"}>New</Text>
                    <Flex color={"#F8D002"} alignItems={"center"} gap={"4px"}>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <Text color={"#757575"} fontSize={"12px"}>
                        4.8(12)
                      </Text>
                    </Flex>
                    <Text fontSize={"16px"} fontWeight={600}>
                      Shopware 6 - Product attachment
                    </Text>
                    <Text fontSize={"16px"} fontWeight={600}>
                      $14.23
                    </Text>
                  </Flex>
                </GridItem>
              </Grid>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(3, 1fr)",
                }}
                gap={"24px"}
                justify="center"
                marginBottom={"40px"}
              >
                <GridItem width={"full"}>
                  <Image width={"100%"} marginBottom={"12px"} src={product1} />
                  <Flex direction={"column"} gap={"8px"}>
                    <Text color={"#1A5BDA"}>New</Text>
                    <Flex color={"#F8D002"} alignItems={"center"} gap={"4px"}>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <Text color={"#757575"} fontSize={"12px"}>
                        4.8(12)
                      </Text>
                    </Flex>
                    <Text fontSize={"16px"} fontWeight={600}>
                      Shopware 6 - Product attachment
                    </Text>
                    <Text fontSize={"16px"} fontWeight={600}>
                      $14.23
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem width={"full"}>
                  <Image width={"100%"} marginBottom={"12px"} src={product1} />
                  <Flex direction={"column"} gap={"8px"}>
                    <Text color={"#1A5BDA"}>New</Text>
                    <Flex color={"#F8D002"} alignItems={"center"} gap={"4px"}>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <Text color={"#757575"} fontSize={"12px"}>
                        4.8(12)
                      </Text>
                    </Flex>
                    <Text fontSize={"16px"} fontWeight={600}>
                      Shopware 6 - Product attachment
                    </Text>
                    <Text fontSize={"16px"} fontWeight={600}>
                      $14.23
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem width={"full"}>
                  <Image width={"100%"} marginBottom={"12px"} src={product1} />
                  <Flex direction={"column"} gap={"8px"}>
                    <Text color={"#1A5BDA"}>New</Text>
                    <Flex color={"#F8D002"} alignItems={"center"} gap={"4px"}>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <Text color={"#757575"} fontSize={"12px"}>
                        4.8(12)
                      </Text>
                    </Flex>
                    <Text fontSize={"16px"} fontWeight={600}>
                      Shopware 6 - Product attachment
                    </Text>
                    <Text fontSize={"16px"} fontWeight={600}>
                      $14.23
                    </Text>
                  </Flex>
                </GridItem>
              </Grid>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(3, 1fr)",
                }}
                gap={"24px"}
                justify="center"
                marginBottom={"40px"}
              >
                <GridItem width={"100%"}>
                  <Image width={"100%"} marginBottom={"12px"} src={product1} />
                  <Flex direction={"column"} gap={"8px"}>
                    <Text color={"#1A5BDA"}>New</Text>
                    <Flex color={"#F8D002"} alignItems={"center"} gap={"4px"}>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <Text color={"#757575"} fontSize={"12px"}>
                        4.8(12)
                      </Text>
                    </Flex>
                    <Text fontSize={"16px"} fontWeight={600}>
                      Shopware 6 - Product attachment
                    </Text>
                    <Text fontSize={"16px"} fontWeight={600}>
                      $14.23
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem width={"100%"}>
                  <Image width={"100%"} marginBottom={"12px"} src={product1} />
                  <Flex direction={"column"} gap={"8px"}>
                    <Text color={"#1A5BDA"}>New</Text>
                    <Flex color={"#F8D002"} alignItems={"center"} gap={"4px"}>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <Text color={"#757575"} fontSize={"12px"}>
                        4.8(12)
                      </Text>
                    </Flex>
                    <Text fontSize={"16px"} fontWeight={600}>
                      Shopware 6 - Product attachment
                    </Text>
                    <Text fontSize={"16px"} fontWeight={600}>
                      $14.23
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem width={"100%"}>
                  <Image width={"100%"} marginBottom={"12px"} src={product1} />
                  <Flex direction={"column"} gap={"8px"}>
                    <Text color={"#1A5BDA"}>New</Text>
                    <Flex color={"#F8D002"} alignItems={"center"} gap={"4px"}>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <Text color={"#757575"} fontSize={"12px"}>
                        4.8(12)
                      </Text>
                    </Flex>
                    <Text fontSize={"16px"} fontWeight={600}>
                      Shopware 6 - Product attachment
                    </Text>
                    <Text fontSize={"16px"} fontWeight={600}>
                      $14.23
                    </Text>
                  </Flex>
                </GridItem>
              </Grid>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                gap={"16px"}
              >
                <Button
                  width={"36px"}
                  borderRadius={"0px"}
                  padding={"8px"}
                  backgroundColor={"#FFF"}
                >
                  <Image width={"20px"} src={arrowleft} />
                </Button>
                <Button
                  width={"36px"}
                  borderRadius={"0px"}
                  backgroundColor={"#FFF"}
                >
                  1
                </Button>
                <Button
                  width={"36px"}
                  borderRadius={"0px"}
                  backgroundColor={"#FFF"}
                >
                  2
                </Button>
                <Button
                  width={"36px"}
                  borderRadius={"0px"}
                  backgroundColor={"#FFF"}
                  display={{ base: "none", md: "block" }}
                >
                  3
                </Button>
                <Button
                  width={"36px"}
                  borderRadius={"0px"}
                  backgroundColor={"#FFF"}
                  display={{ base: "none", md: "block" }}
                >
                  4
                </Button>
                <Button
                  width={"36px"}
                  padding={"8px"}
                  borderRadius={"0px"}
                  backgroundColor={"#FFF"}
                >
                  <Image src={arrowRight} />
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </CustomContainer>
    </Flex>
  );
};

export default Product;
