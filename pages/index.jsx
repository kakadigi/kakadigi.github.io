import Layout from "@/components/layouts";
import NavBar from "@/components/Navbar";
import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
function HomePage(props) {
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
          <Button borderRadius={25} color="white" backgroundColor="black">
            Call Us
          </Button>
        </Box>
      </NavBar>
      <Flex py={20}>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="self-start">
          <Heading size="4xl">
            Building web and mobile app with <u>highest</u> quality.
          </Heading>
        </VStack>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="self-start">
          <h1>Selamat Datang di Kakadigi!</h1>
        </VStack>
      </Flex>
    </Layout>
  );
}

HomePage.getInitialProps = () => {
  return {
    title: "Home",
    description:
      "Karya Kami Digital | IT Consultant based on Purwokerto, Banyumas, Jawa Tengah",
  };
};

export default HomePage;
