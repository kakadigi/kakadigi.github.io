import { Box, Flex, Button } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import NavBar from "./Navbar";
import { UIStore } from "store";

const NavHeader = () => {
  const show = UIStore.useState((s) => s.toggleNav);
  return (
    <header>
      <NavBar>
        <Box>
          <NavBar.Brand text="Kakadigi." fontWeight="bold" />
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <Button
            variant="link"
            onClick={() => {
              UIStore.update((s) => {
                s.toggleNav = !show;
              });
            }}
          >
            {show ? <CloseIcon /> : <HamburgerIcon />}
          </Button>
        </Box>
        <Box
          w="fit-content"
          display={{ base: show ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
          my={4}
        >
          <Flex
            w="full"
            align={["center", "center", "center", "center"]}
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            p={[4, 4, 0, 0]}
          >
            <NavBar.Menu mb={4}>
              <NavBar.Menu.Item>Home</NavBar.Menu.Item>
              <NavBar.Menu.Item to="/our-services">Services</NavBar.Menu.Item>
              <NavBar.Menu.Item to="/contact-us">Contact</NavBar.Menu.Item>
              <NavBar.Menu.Item to="/portfolio">Portfolio</NavBar.Menu.Item>
            </NavBar.Menu>
          </Flex>
        </Box>
      </NavBar>
    </header>
  );
};

export default NavHeader;
