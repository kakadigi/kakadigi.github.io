import { Container } from "@chakra-ui/react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Container maxW="container.lg">
      {children}
    </Container>
  );
}

Layout.Header = Header;

export default Layout;
