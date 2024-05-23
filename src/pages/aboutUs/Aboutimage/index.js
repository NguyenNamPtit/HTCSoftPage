import React from 'react';
import CustomContainer from '../../../components/container';
//
import Aboutimage1 from '../../../assets/images/AboutImage1.png'
import Aboutimage2 from '../../../assets/images/AboutImage2.png'
import Aboutimage3 from '../../../assets/images/AboutImage3.png'
import Aboutimage4 from '../../../assets/images/AboutImage4.png'
import Aboutimage5 from '../../../assets/images/AboutImage5.png'
import { Box, Flex, Image } from '@chakra-ui/react';
const Aboutimage = () => {
    return (
        <CustomContainer>
            <Flex gap={"24px"}
                direction={{ base: "column", md: "row" }}>
                <Box>
                    <Box marginBottom={"24px"}>
                        <Image src={Aboutimage1} />
                    </Box>
                    <Box marginBottom={"24px"}>
                        <Image src={Aboutimage2} />
                    </Box>
                    <Box marginBottom={"24px"}>
                        <Image src={Aboutimage3} />
                    </Box>
                </Box>
                <Box gap={"24px"}>
                    <Image marginBottom={"24px"} src={Aboutimage4} />
                    <Image src={Aboutimage5} />
                </Box>
            </Flex>
        </CustomContainer>
    );
}

export default Aboutimage;
