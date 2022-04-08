import Layout from "@/components/layouts";
import NavBar from "@/components/Navbar";
import { Box, Button, Heading, VStack, Text } from "@chakra-ui/react";

const AboutUs = (props) => {
  return (
    <Layout>
      <Layout.Header {...props} />
      <NavBar>
        <Box>
          <NavBar.Brand text="Kakadigi." fontWeight="bold" />
        </Box>
        <NavBar.Menu>
          <NavBar.Menu.Item>Home</NavBar.Menu.Item>
          <NavBar.Menu.Item to="/about-us">About Us</NavBar.Menu.Item>
        </NavBar.Menu>
        <Box alignContent="end">
          <Button borderRadius={25} colorScheme="teal">
            Call Us
          </Button>
        </Box>
      </NavBar>
      <VStack w="full" h="full" p={10} spacing={10} alignItems="self-start">
        <Heading size="md">About us</Heading>
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
    </Layout>
  );
};

AboutUs.getInitialProps = () => {
  return {
    title: "About Us",
    description:
      "Karya Kami Digital | Our profile company",
  };
};

export default AboutUs;
