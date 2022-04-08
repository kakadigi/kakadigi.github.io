import Layout from "@/components/layouts";
import NavBar from "@/components/Navbar";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  useBreakpointValue,
  VStack
} from "@chakra-ui/react";
function HomePage(props) {
  const sizeH = useBreakpointValue({ md: '4xl', sm: 'lg' });
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
      <Flex py={[0, 10, 20]} direction={{ base: 'column-reverse', md: 'row' }}>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="self-start">
          <Heading size={sizeH}>
            Building web and mobile app
            <HStack align="self-start" spacing={5}>
              <Text>with</Text>
              <Text color="teal"><u>highest</u></Text>
            </HStack>
            quality.
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
