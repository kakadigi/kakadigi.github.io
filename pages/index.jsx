import Landing from "@/components/Layout/Landing";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
function HomePage(props) {
  const sizeH = useBreakpointValue({ base: "xl", md: "4xl", sm: "2xl" });
  return (
    <Landing {...props}>
      <Flex
        py={[0, 5, 10]}
        direction={{ base: "column-reverse", md: "row" }}
        justify="center"
      >
        <VStack w="full" h="full" pt={8} spacing={10} alignItems="self-start">
          <Heading size={sizeH}>
            Building web and mobile app
            <HStack align="self-start" spacing={5}>
              <Text>with</Text>
              <Text color="primary.500">
                <u>highest</u>
              </Text>
            </HStack>
            quality.
          </Heading>
          <Text colorScheme="gray">
            Establish your vision and value proposition and turn them into
            testable prototypes.
          </Text>
          <Center w="full">
            <InputGroup w={{ base: "full", md: "78%" }} size="lg">
              <Input
                rounded="full"
                placeholder="Enter your email"
                name="email"
                type="email"
                borderColor="primary.500"
                borderWidth={3}
              />
              <Button
                rounded="full"
                position="absolute"
                right={0}
                top={0}
                zIndex={2}
                role="button"
                colorScheme="primary"
              >
                Get Started
              </Button>
            </InputGroup>
          </Center>
          <SimpleGrid columns={3} gap={10} w="full" alignItems="start">
            <GridItem colSpan={1}>
              <VStack spacing={2} textAlign="center">
                <Heading size="lg">75</Heading>
                <Text fontSize="sm" color="slate.900">
                  Successfully projects done
                </Text>
              </VStack>
            </GridItem>
            <GridItem colSpan={1}>
              <VStack spacing={2} textAlign="center">
                <Heading size="lg">300K IDR</Heading>
                <Text fontSize="sm" color="slate.900">Raised via the solutions we&apos;ve built</Text>
              </VStack>
            </GridItem>
            <GridItem colSpan={1}>
              <VStack spacing={2} textAlign="center">
                <Heading size="lg">50+</Heading>
                <Text fontSize="sm" color="slate.900">
                  Qualified specialists
                </Text>
              </VStack>
            </GridItem>
          </SimpleGrid>
        </VStack>
        <VStack
          w="full"
          h="full"
          pt={{ base: 0, md: 8 }}
          pl={{ base: 0, md: 8 }}
          spacing={8}
          alignItems="self-start"
        >
          <Image src="/images/startup.jpeg" alt="Starup builder" w="full" />
          <LinkBox>
            <LinkOverlay
              href="https://www.freepik.com/free-vector/startup-construction-development-3d-thin-line-art-style-design-concept-isometric-illustration_15481135.htm#query=3d%20thinking&position=7&from_view=search"
              isExternal
            >
              <Text fontSize="xs" color="gray.200">
                Image by : <b>macrovector</b> via freepik.com
              </Text>
            </LinkOverlay>
          </LinkBox>
        </VStack>
      </Flex>
    </Landing>
  );
}

HomePage.getInitialProps = () => {
  return {
    title: "Home",
    description:
      "Karya Kami Digital | IT Consultant based on Purwokerto, Banyumas, Jawa Tengah",
  };
};

export default HomePage;
