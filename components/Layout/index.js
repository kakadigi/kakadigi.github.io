import { Box, Container, Flex, VStack, Image } from '@chakra-ui/react';
import Header from './Header';
import NavHeader from './NavHeader';
import { UIStore } from 'store';

const Layout = ({ children, title, description }) => {
  const show = UIStore.useState((s) => s.toggleNav);
  return (
    <VStack position="relative" bg="slate.100" h={{ base: 'full', md: '100vh', lg: '100vh' }}>
      <Header title={title} description={description} />
      <Flex
        direction="row"
        w="full"
        alignItems="flex-start"
        justifyContent="center"
        px={4}
        filter="auto"
        blur="60px"
      >
        <Image src="/images/background-blue.svg" alt="Background blue" width={92} height={116} />
        <Image src="/images/background-blue-2.svg" alt="Background blue" width={292} height={116} />
        <Image src="/images/background-blue.svg" alt="Background blue" width={192} height={116} />
      </Flex>
      <Container position="absolute" top={0} maxW="container.xl" pt={16}>
        <NavHeader />
      </Container>
      <Box w="full" pt={8} filter="auto" blur={show ? '8px' : 0}>
        {children}
      </Box>
    </VStack>
  );
};

export default Layout;
