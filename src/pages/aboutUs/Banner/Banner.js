import React from 'react';
import CustomContainer from '../../../components/container';
import { Box, Flex, Text } from '@chakra-ui/react';
//
import bannerabout from '../../../assets/images/BannerAbout.png'
const Banner = () => {
    return (
        <Box
            backgroundImage={bannerabout}
            backgroundSize="cover"
            backgroundPosition="center"
            width="100%"
            height="720px"
            position="relative"
        >
            <Box position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                background={`linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), rgba(26, 91, 218, 0.20)`}
            />

            <CustomContainer position="relative" zIndex={2}
                paddingTop={"352px"}
                paddingRight={"auto !important"}
                paddingLeft={"auto"}
            >
                <Text fontSize={{ base: "38px", md: "64px" }}
                    width={{ sm: "60%", md: "506px" }}
                    height={{ md: "302px" }}
                    fontWeight={"800"}
                    color={"#FFF"}
                    lineHeight={{ base: "60px", md: "70px" }}
                    marginLeft={{ '2xl': "75px" }}

                >Magento Development, Migration & Optimization</Text>
            </CustomContainer>

        </Box>
    );
}

export default Banner;
