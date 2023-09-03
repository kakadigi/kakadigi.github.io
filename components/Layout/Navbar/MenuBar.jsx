import { Stack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

const MenuBar = ({ children, ...props }) => {
  return (
    <Stack
      spacing={{ base: 0, md: 8, sm: 4 }}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
      {...props}
    >
      {children}
    </Stack>
  );
};

MenuBar.Item = MenuItem;

export default MenuBar;
