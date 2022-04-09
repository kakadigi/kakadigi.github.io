import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  LinkBox,
  LinkOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FaWhatsapp } from "react-icons/fa";
import Layout from ".";
import NavBar from "../Navbar";

const Landing = ({ children, ...props }) => {
  const [show, setShow] = useState(false);
  return (
    <Layout>
      <Layout.Header {...props}>
        <NavBar>
          <Box>
            <NavBar.Brand text="Kakadigi." fontWeight="bold" />
          </Box>
          <Box
            display={{ base: "block", md: "none" }}
            cursor="pointer"
            onClick={() => setShow(!show)}
          >
            {show ? <CloseIcon /> : <HamburgerIcon />}
          </Box>
          <Box
            display={{ base: show ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
          >
            <Flex
              align={["center", "center", "center", "center"]}
              justify={["center", "space-between", "flex-end", "flex-end"]}
              direction={["column", "row", "row", "row"]}
              pt={[4, 4, 0, 0]}
            >
              <NavBar.Menu mb={4}>
                <NavBar.Menu.Item>Home</NavBar.Menu.Item>
                <NavBar.Menu.Item to="/about-us">About Us</NavBar.Menu.Item>
              </NavBar.Menu>
              <LinkBox>
                <LinkOverlay
                  href={`//wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}`}
                  isExternal
                >
                  <Button
                    rounded="full"
                    colorScheme="black"
                    leftIcon={<Icon as={FaWhatsapp} />}
                    display={{ base: "block", md: "none" }}
                  >
                    Chat Us
                  </Button>
                </LinkOverlay>
              </LinkBox>
            </Flex>
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <LinkBox>
              <LinkOverlay
                href={`//wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}`}
                isExternal
              >
                <Button
                  rounded="full"
                  colorScheme="black"
                  leftIcon={<Icon as={FaWhatsapp} />}
                >
                  Chat Us
                </Button>
              </LinkOverlay>
            </LinkBox>
          </Box>
        </NavBar>
      </Layout.Header>
      {children}
    </Layout>
  );
};

export default Landing;
