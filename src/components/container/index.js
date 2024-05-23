import { Box } from '@chakra-ui/react';
import React from 'react';

const CustomContainer = (props) => {
    return (
        <Box
            marginLeft={{ base: '16px', md: '59px',  }}
            marginRight={{ base: '16px', md: '59px',  }}
            maxWidth={"1248px"}
            paddingBottom={"64px"}
            {...props}
        />
    );
}

export default CustomContainer;
