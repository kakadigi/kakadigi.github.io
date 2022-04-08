import { Container } from "@chakra-ui/react";
import Header from "./Header";

const Layout = ({ children, props }) => {
  return (
    <Container maxW="container.xl" {...props}>
      {children}
    </Container>
  );
};

Layout.Header = Header;

export default Layout;
