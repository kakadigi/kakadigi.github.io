import {
  Container,
  Flex,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Container maxW="container.xl">
      <Flex
        w="full"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={4}
      >
        <VStack w="container.md" textAlign="center" spacing={8} pt={32} pb={8}>
          <Heading as="h1" size="4xl">
            Revolutionize Your Startup!
          </Heading>
          <Text fontSize="lg">
            Welcome to the world of <u>Karya Kami Digital</u>, where we turn your app
            dreams into reality. Dive into the magical realm of innovative
            solutions and world-class tech consulting!
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Hero;
