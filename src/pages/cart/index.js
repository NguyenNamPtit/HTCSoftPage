import React from "react";
import CustomContainer from "../../components/container";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
//
import product1 from "../../assets/images/[Product] Image.png";
import deleteproduct from "../../assets/images/[Icon] delete-product.svg";
import monneyback from "../../assets/images/[Icon] refund-2-line.svg";
import timeupdate from "../../assets/images/[Icon] calendar-check-line.svg";
import headphone from "../../assets/images/[Icon] headphone-line.svg";
import coupon from "../../assets/images/[Icon] coupon-2-line.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import StarRateIcon from "@mui/icons-material/StarRate";

const Cart = () => {
  const colortext = getComputedStyle(document.documentElement).getPropertyValue(
    "--secondary-text-color"
  );
  const buttonColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--button-color");
  return (
    <>
      <CustomContainer
        paddingBottom={"64px"}
        marginLeft={{ base: "16px", md: "59px", "2xl": "auto" }}
        marginRight={{ base: "16px", md: "59px", "2xl": "auto" }}
      >
        <Flex direction={"column"} gap={"24px"}>
          <Box>
            <Text
              fontSize={{ base: "40px", md: "64px" }}
              fontWeight={800}
              lineHeight={{ base: "48px", md: "76px" }}
            >
              Shopping Cart
            </Text>
          </Box>
          <Flex gap={"40px"}>
            <Flex
              direction={"column"}
              gap={"24px"}
              width={{ base: "100%", lg: "80%" }}
              height={"100%"}
              borderRight={{ base: "none ", lg: "0.5px solid #BDBDBD" }}
            >
              <Flex gap={"40px"} display={{ base: "none", lg: "flex" }}>
                <Text
                  fontSize={"14px"}
                  fontWeight={600}
                  letterSpacing={"1px"}
                  color={colortext}
                  width={"50%"}
                >
                  PRODUCT
                </Text>
                <Flex gap={"40px"} justifyContent={"space-around"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={600}
                    letterSpacing={"1px"}
                    color={colortext}
                    width={"92px"}
                    textAlign={"center"}
                  >
                    QUANTITY
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={600}
                    letterSpacing={"1px"}
                    color={colortext}
                  >
                    SUBTOTAL
                  </Text>
                </Flex>
              </Flex>
              <Flex
                justifyContent={"space-between"}
                display={{ base: "flex", lg: "none" }}
              >
                <Text fontSize={"14px"} fontWeight={600} color={"#757575"}>
                  1 item
                </Text>
                <Text fontSize={"16px"} fontWeight={600} color={buttonColor}>
                  EDIT
                </Text>
              </Flex>
              <Flex alignItems={"center"} gap={{ base: "0px", lg: "40px" }}>
                <Flex
                  gap={{ base: "10px", md: "20px" }}
                  alignItems={"center"}
                  width={"50%"}
                  marginRight={{ base: "auto", lg: "0px" }}
                >
                  <Image src={product1} width={{ base: "80px", md: "140px" }} />
                  <Flex direction={"column"} gap={"4px"}>
                    <Text
                      fontSize={{ base: "14px", md: " 16px" }}
                      fontWeight={600}
                    >
                      Shopware 6 - Product attachment
                    </Text>
                    <Text
                      fontSize={{ base: "14px", md: " 16px" }}
                      fontWeight={600}
                      color={buttonColor}
                    >
                      $14.43
                    </Text>
                  </Flex>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Button
                    border={"none"}
                    backgroundColor={"#FFF"}
                    _hover={{ backgroundColor: "#FFF" }}
                  >
                    -
                  </Button>
                  <Text fontSize={"16px"} fontWeight={600} lineHeight={"22px"}>
                    1
                  </Text>
                  <Button
                    border={"none"}
                    backgroundColor={"#FFF"}
                    _hover={{ backgroundColor: "#FFF" }}
                  >
                    +
                  </Button>
                </Flex>
                <Flex>
                  <Text
                    fontSize={"16px"}
                    fontWeight={600}
                    lineHeight={"22px"}
                    display={{ base: "none", lg: "block" }}
                    width={"83px"}
                    textAlign={"center"}
                  >
                    $14.43
                  </Text>
                </Flex>
                <Button
                  backgroundColor={"#FFF"}
                  _hover={{ backgroundColor: "#FFF" }}
                  display={{ base: "none", lg: "block" }}
                >
                  <Image src={deleteproduct} />
                </Button>
              </Flex>
            </Flex>
            <Flex
              direction={"column"}
              gap={"24px"}
              display={{ base: "none", lg: "flex" }}
            >
              <Box>
                <Text fontSize={"28px"} fontWeight={800} lineHeight={"34px"}>
                  Summary
                </Text>
              </Box>
              <Flex backgroundColor={"#F5F5F5"} padding={"9px 12px"}>
                <Image src={coupon} />
                <Input border={"none"} placeholder="Coupon Code" type="text" />
              </Flex>
              <Box padding={"15px 0"}>
                <Text
                  textAlign={"center"}
                  fontSize={"16px"}
                  fontWeight={600}
                  textTransform={"uppercase"}
                  color={buttonColor}
                >
                  apply coupon
                </Text>
              </Box>
              <Flex direction={"column"} gap={"12px"}>
                <Flex justifyContent={"space-between"}>
                  <Text
                    fontSize={"16px"}
                    fontWeight={600}
                    lineHeight={"22px"}
                    color={colortext}
                  >
                    Subtotal
                  </Text>
                  <Text
                    fontSize={"16px"}
                    fontWeight={600}
                    lineHeight={"22px"}
                    color={colortext}
                  >
                    $84.98
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text
                    fontSize={"16px"}
                    fontWeight={600}
                    lineHeight={"22px"}
                    color={colortext}
                  >
                    Discount (20%)
                  </Text>
                  <Text
                    fontSize={"16px"}
                    fontWeight={600}
                    lineHeight={"22px"}
                    color={colortext}
                  >
                    -$15.53
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text fontSize={"16px"} fontWeight={800}>
                    Grandtotal
                  </Text>
                  <Text fontSize={"16px"} fontWeight={800}>
                    $69.45
                  </Text>
                </Flex>
              </Flex>

              <Button
                fontSize={"16px"}
                fontWeight={600}
                lineHeight={"18px"}
                textTransform={"uppercase"}
                padding={"15px 24px"}
                backgroundColor={buttonColor}
                borderRadius={"0px"}
                color={"#FFF"}
              >
                pay with paypal
              </Button>

              <Flex direction={"column"} gap={"12px"}>
                <Flex alignItems={"center"} gap={"8px"}>
                  <Image src={monneyback} width={"18px"} />
                  <Text fontSize={"14px"} fontWeight={600} color={"#424242"}>
                    60-day money back
                  </Text>
                </Flex>
                <Flex alignItems={"center"} gap={"8px"}>
                  <Image src={timeupdate} width={"18px"} />
                  <Text fontSize={"14px"} fontWeight={600} color={"#424242"}>
                    Life time update
                  </Text>
                </Flex>
                <Flex alignItems={"center"} gap={"8px"}>
                  <Image src={headphone} width={"18px"} />
                  <Text fontSize={"14px"} fontWeight={600} color={"#424242"}>
                    365-day support
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </CustomContainer>
      <CustomContainer
        paddingBottom={"64px"}
        marginLeft={{ base: "16px", md: "59px", "2xl": "auto" }}
        marginRight={{ base: "16px", md: "59px", "2xl": "auto" }}
      >
        <Flex direction={"column"} gap={"24px"}>
          <Box>
            <Text fontSize={"40px"} fontWeight={800}>
              People also bought
            </Text>
          </Box>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            breakpoints={{
              // khi độ rộng màn hình >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // khi độ rộng màn hình >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              // khi độ rộng màn hình >= 1024px
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <Flex direction={"column"} gap={"12px"}>
                <Image src={product1} width={"100%"} />
                <Flex
                  direction={"column"}
                  gap={"8px"}
                  alignItems={"flex-start"}
                >
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
                  <Text fontSize={"16px"} fontWeight={600} textAlign={"start"}>
                    Shopware 6 - Product attachment
                  </Text>
                  <Text fontSize={"16px"} fontWeight={600}>
                    $14.23
                  </Text>
                </Flex>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex direction={"column"} gap={"12px"}>
                <Image src={product1} width={"100%"} />
                <Flex
                  direction={"column"}
                  gap={"8px"}
                  alignItems={"flex-start"}
                >
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
                  <Text fontSize={"16px"} fontWeight={600} textAlign={"start"}>
                    Shopware 6 - Product attachment
                  </Text>
                  <Text fontSize={"16px"} fontWeight={600}>
                    $14.23
                  </Text>
                </Flex>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex direction={"column"} gap={"12px"}>
                <Image src={product1} width={"100%"} />
                <Flex
                  direction={"column"}
                  gap={"8px"}
                  alignItems={"flex-start"}
                >
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
                  <Text fontSize={"16px"} fontWeight={600} textAlign={"start"}>
                    Shopware 6 - Product attachment
                  </Text>
                  <Text fontSize={"16px"} fontWeight={600}>
                    $14.23
                  </Text>
                </Flex>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex direction={"column"} gap={"12px"}>
                <Image src={product1} width={"100%"} />
                <Flex
                  direction={"column"}
                  gap={"8px"}
                  alignItems={"flex-start"}
                >
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
                  <Text fontSize={"16px"} fontWeight={600} textAlign={"start"}>
                    Shopware 6 - Product attachment
                  </Text>
                  <Text fontSize={"16px"} fontWeight={600}>
                    $14.23
                  </Text>
                </Flex>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex direction={"column"} gap={"12px"}>
                <Image src={product1} width={"100%"} />
                <Flex
                  direction={"column"}
                  gap={"8px"}
                  alignItems={"flex-start"}
                >
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
                  <Text fontSize={"16px"} fontWeight={600} textAlign={"start"}>
                    Shopware 6 - Product attachment
                  </Text>
                  <Text fontSize={"16px"} fontWeight={600}>
                    $14.23
                  </Text>
                </Flex>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex direction={"column"} gap={"12px"}>
                <Image src={product1} width={"100%"} />
                <Flex
                  direction={"column"}
                  gap={"8px"}
                  alignItems={"flex-start"}
                >
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
                  <Text fontSize={"16px"} fontWeight={600} textAlign={"start"}>
                    Shopware 6 - Product attachment
                  </Text>
                  <Text fontSize={"16px"} fontWeight={600}>
                    $14.23
                  </Text>
                </Flex>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex direction={"column"} gap={"12px"}>
                <Image src={product1} width={"100%"} />
                <Flex
                  direction={"column"}
                  gap={"8px"}
                  alignItems={"flex-start"}
                >
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
                  <Text fontSize={"16px"} fontWeight={600} textAlign={"start"}>
                    Shopware 6 - Product attachment
                  </Text>
                  <Text fontSize={"16px"} fontWeight={600}>
                    $14.23
                  </Text>
                </Flex>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex direction={"column"} gap={"12px"}>
                <Image src={product1} width={"100%"} />
                <Flex
                  direction={"column"}
                  gap={"8px"}
                  alignItems={"flex-start"}
                >
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
                  <Text fontSize={"16px"} fontWeight={600} textAlign={"start"}>
                    Shopware 6 - Product attachment
                  </Text>
                  <Text fontSize={"16px"} fontWeight={600}>
                    $14.23
                  </Text>
                </Flex>
              </Flex>
            </SwiperSlide>
          </Swiper>
        </Flex>
      </CustomContainer>
    </>
  );
};

export default Cart;
