import React from 'react';
import Banner from './Banner/Banner';
import Intro from './Intro/Intro';
import Whatwedo from './Whatwedo';
import Experience from '../homepage/Experience/Experience';
import Unique from '../homepage/Unique/Unique'
import { Flex } from '@chakra-ui/react';
import Aboutimage from './Aboutimage';


const AboutUs = () => {
    return (
        <div>
            <section >
                <Banner />
            </section>
            <Flex direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
            >

                <section>
                    <Intro />
                </section>
                <section>
                    <Whatwedo />
                </section>
                <section>
                    <Experience />
                </section>
                <section>
                    <Unique />
                </section>
                <section>
                    <Aboutimage />
                </section>
            </Flex>
        </div>
    );
}

export default AboutUs;
