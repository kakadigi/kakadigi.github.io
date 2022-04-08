import Link from "next/link";
import { Stack, Text } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";

const MenuItem = ({ children, to = "/", ...props }) => {
  return (
    <Link href={to}>
      <ChakraLink>
        <Text display="block" {...props}>
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
};

const MenuBar = ({ children }) => {
  return (
    <Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      {children}
    </Stack>
  );
};

MenuBar.Item = MenuItem;

export default MenuBar;
