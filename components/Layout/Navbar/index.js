import { Flex, Heading, Image } from '@chakra-ui/react';
import MenuBar from './MenuBar';

const Brand = ({ image, text, size, ...props }) =>
  image ? (
    <Image w="full" alt={text || 'Brand website'} {...props} />
  ) : (
    <Heading size={size || 'md'} {...props}>
      {text || process.env.NEXT_PUBLIC_APP_NAME}
    </Heading>
  );

const NavBar = ({ children }) => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="full">
      {children}
    </Flex>
  );
};

NavBar.Brand = Brand;
NavBar.Menu = MenuBar;

export default NavBar;
