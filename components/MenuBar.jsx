import { Stack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

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
