import Layout from "@/components/Layout";
import Landing from "@/components/Layout/Landing";
import NavBar from "@/components/Navbar";
import { Box, Button, Heading, VStack, Text } from "@chakra-ui/react";

const AboutUs = (props) => {
  return (
    <Landing {...props}>
      <VStack w="full" h="full" pt={10} spacing={4} alignItems="self-start">
        <Heading size="xl">About us</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          voluptatibus ratione assumenda necessitatibus expedita? Obcaecati iste
          nulla fugiat doloremque repudiandae molestiae veniam. Consectetur
          corporis iste cum non accusantium quibusdam quidem! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Ipsum commodi id aliquid
          consequuntur, voluptates odit blanditiis magnam, esse error pariatur
          unde provident, consequatur beatae consectetur quidem! Ex eligendi
          perspiciatis velit. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptatum necessitatibus enim assumenda harum
          tempore facere distinctio, non reiciendis numquam temporibus cumque
          aliquid natus suscipit nostrum, tenetur et dicta, vel reprehenderit!
        </Text>
      </VStack>
    </Landing>
  );
};

AboutUs.getInitialProps = () => {
  return {
    title: "About Us",
    description: "Karya Kami Digital | Our profile company",
  };
};

export default AboutUs;
