import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

//
import description from "../../../../assets/images/Description.png";
import screenshot from "../../../../assets/images/ScreenShot.png";
import description1 from "../../../../assets/images/image 43.png";
const Desciption = () => {
  return (
    <Flex alignItems={"center"} direction={"column"}>
      <Flex
        direction={"column"}
        marginTop={"40px"}
        gap={"40px"}
        width={{ lg: "812px" }}
      >
        <Box>
          <Text fontSize={"28px"} fontWeight={800} lineHeight={"34px"}>
            Why should you choose Shopware 6 Testimonial module?
          </Text>
        </Box>
        <Box>
          <Text fontSize={"20px"} fontWeight={600}>
            Flexible display on different pages
          </Text>
          <Text fontSize={"16px"} fontWeight={500}>
            In addition to the default testimonial page, you can choose a page
            to display such as: home page, cms page, payment/shipping
            page...etc.
          </Text>
          <Image src={description} />
        </Box>
        <Box>
          <Text fontSize={"20px"} fontWeight={600}>Allow customers to add testimonials without logging in</Text>
          <Text fontSize={"16px"} fontWeight={500}>
            With Shopware 6 Testimonial module, customers can easily add
            testimonials on your store without logging in. This encourages them
            to add more testimonials because it's simple and doesn't take much
            time.
          </Text>
          <Image src={screenshot} />
        </Box>
        <Box >
          <Text fontSize={"20px"} fontWeight={600}>Flexible display on different pages</Text>
          <Text fontSize={"16px"} fontWeight={500}>
            Customer reviews are not always the most honest and intuitive
            because your competitors can disguise themselves as customers and
            intentionally comment negative, incorrect content about the products
            to drive your customers away. Therefore, Shopware 6 Testimonial
            module allows admins to review the content of testimonials submitted
            by customers before posting on the official website.
          </Text>
        </Box>
        <Box>
          <Text fontSize={"20px"} fontWeight={600}>Admin can manually create testimonials in the backend</Text>
          <Text fontSize={"16px"} fontWeight={500}>
            Testimonial is considered an effective marketing method of every
            business because it is both cost-effective and more effective than
            advertising. With Shopware 6 Testimonial module, admin can easily
            create testimonials with the content they want to increase the
            credibility of the products on the website and attract customers to
            buy more.
          </Text>
          <Image src={description1} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Desciption;
