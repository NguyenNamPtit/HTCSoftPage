import React from 'react';
import CustomContainer from '../../../components/container';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
//
import imageintro from '../../../assets/images/ImageIntro.png'
import logointro from '../../../assets/images/LogoIntro.svg'
import blacklogointro from '../../../assets/images/Shade-Black.svg'

const Intro = () => {
    return (
        <CustomContainer>
            <Flex gap={"64px"}
                marginBottom={{ base: "64px", md: "0px" }}
                direction={{ base: "column", md: "row" }}
            >
                <Flex direction={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"8px"}
                    width={{ base: "100%", md: "40%" }}
                >
                    <Image
                        width="202.5px"
                        height={"300px"}
                        src={logointro} />
                </Flex>
                <Flex direction={"column"}
                    justifyContent={"center"}
                    width={{ base: "100%", md: "60%" }}
                >
                    <Image width={"155px"}
                        height={"32px"}
                        src={blacklogointro} />
                    <Text fontSize={"16px"}
                        lineHeight={"22px"}
                        marginTop={"16px"}
                    >
                        With a team of professional developers, we are confident to build quality, unique websites based on customers' needs. Besides, HTCMage also provides upgrade and maintenance services for websites that need to change the size, interface, technology, management software or website information properties to bring good efficiency. Most, fully integrated features, easy to update and manage.
                    </Text>
                </Flex>
            </Flex>
            <Image width={"100%"}

                src={imageintro} />
        </CustomContainer >
    );
}

export default Intro;
