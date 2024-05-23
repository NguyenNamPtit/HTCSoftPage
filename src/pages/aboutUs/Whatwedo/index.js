import React from 'react';
import CustomContainer from '../../../components/container';
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
//
import aboutproduct from "../../../assets/images/About1.png"
import aboutproduct1 from "../../../assets/images/About2.png"
import aboutproduct2 from "../../../assets/images/About3.png"
const Whatwedo = () => {
    return (
        <CustomContainer>
            <Box marginBottom={"64px"}>
                <Text textAlign={"center"}
                    fontSize={{ base: "64px", md: "52px" }}
                    fontWeight={"800"}
                >What we do</Text>
            </Box>
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={"24px"}>
                <Flex direction={"column"}
                    gap={"16px"}

                >
                    <Box position={"relative"}>
                        <Image src={aboutproduct} width={"100%"} />
                        <Flex
                            alignItems={"center"}
                            justifyContent={"center"}
                            width={"100px"}
                            height={"100px"}
                            position={"absolute"}
                            bottom={"0px"}
                            left={"0px"}
                            backgroundColor={"#FFF"}
                        >

                            <Text textAlign={"center"}
                                fontSize={"64px"}
                                fontWeight={"800"}
                            >1</Text>
                        </Flex>
                    </Box>
                    <Box>
                        <Text
                            fontSize={"40px"}
                            fontWeight={"800"}
                        >Development</Text>
                        <Text fontSize={"16px"}>With 6 years of experience working with Magento e-commerce platform, we are confident that we will help you to build your own Magento Store with full of preeminent features, superior management, absolute security website data.</Text>
                    </Box>
                </Flex>
                <Flex direction={"column"}
                    width="100%"
                    gap={"16px"}>
                    <Box position={"relative"}>
                        <Image src={aboutproduct1} width={"100%"} />
                        <Flex
                            alignItems={"center"}
                            justifyContent={"center"}
                            width={"100px"}
                            height={"100px"}
                            position={"absolute"}
                            bottom={"0px"}
                            left={"0px"}
                            backgroundColor={"#FFF"}
                        >

                            <Text textAlign={"center"}
                                fontSize={"64px"}
                                fontWeight={"800"}
                            >2</Text>
                        </Flex>
                    </Box>
                    <Box>
                        <Text
                            fontSize={"40px"}
                            fontWeight={"800"}
                        >Optimization</Text>
                        <Text fontSize={"16px"}>Are you facing with problem about website efficiency? We are here to find your problem and solve them, make your website work better and faster.</Text>
                    </Box>
                </Flex>
                <Flex direction={"column"}
                    gap={"16px"}
                    width="100%"
                >
                    <Box position={"relative"}>
                        <Image src={aboutproduct2} width={"100%"} />
                        <Flex
                            alignItems={"center"}
                            justifyContent={"center"}
                            width={"100px"}
                            height={"100px"}
                            position={"absolute"}
                            bottom={"0px"}
                            left={"0px"}
                            backgroundColor={"#FFF"}
                        >

                            <Text textAlign={"center"}
                                fontSize={"64px"}
                                fontWeight={"800"}
                            >3</Text>
                        </Flex>
                    </Box>
                    <Box>
                        <Text
                            fontSize={"40px"}
                            fontWeight={"800"}
                        >Migration</Text>
                        <Text fontSize={"16px"}>The magento development team has officially terminated magento 1 support in 2020. Magento 1 users are facing security vulnerabilities. HTCMage is committed to helping you deploy it safely.</Text>
                    </Box>
                </Flex>



            </Grid>
        </CustomContainer>
    );
}

export default Whatwedo;
