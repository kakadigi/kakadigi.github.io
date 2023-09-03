import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaDocker, FaAws, FaLaravel, FaReact } from "react-icons/fa";
import {
  SiDjango,
  SiPostgresql,
  SiFlutter,
  SiGithubactions,
  SiNextdotjs,
  SiJest,
  SiAndroid,
} from "react-icons/si";
import { Layout, Hero, NextImage } from "../components";
import styles from "../styles.module.scss";

function HomePage() {
  return (
    <Layout title="Home">
      <Hero />
      <Flex gap={8} alignItems="center" justifyContent="center" mb={24}>
        <Button colorScheme="twitter" variant="solid" size="lg">
          Get in touch
        </Button>
        <Button variant="link" size="lg">
          Learn more
        </Button>
      </Flex>
      <Box w="full" bg="slate.200">
        <Container maxW="container.xl" py={6}>
          <VStack spacing={6}>
            <Text size="md" fontWeight={600} color="slate.500">
              Powering Excellence: Our Trusted Tech Stack
            </Text>
            <List display="flex" gap={6}>
              <ListItem>
                <ListIcon as={FaDocker} color="slate.500" fontSize="2xl" />
              </ListItem>
              <ListItem>
                <ListIcon as={FaAws} color="slate.500" fontSize="2xl" />
              </ListItem>
              <ListItem>
                <ListIcon
                  as={SiGithubactions}
                  color="slate.500"
                  fontSize="2xl"
                />
              </ListItem>
              <ListItem>
                <ListIcon as={FaLaravel} color="slate.500" fontSize="2xl" />
              </ListItem>
              <ListItem>
                <ListIcon as={SiDjango} color="slate.500" fontSize="2xl" />
              </ListItem>
              <ListItem>
                <ListIcon as={SiPostgresql} color="slate.500" fontSize="2xl" />
              </ListItem>
              <ListItem>
                <ListIcon as={SiFlutter} color="slate.500" fontSize="2xl" />
              </ListItem>
              <ListItem>
                <ListIcon as={SiNextdotjs} color="slate.500" fontSize="2xl" />
              </ListItem>
              <ListItem>
                <ListIcon as={FaReact} color="slate.500" fontSize="2xl" />
              </ListItem>
              <ListItem>
                <ListIcon as={SiJest} color="slate.500" fontSize="2xl" />
              </ListItem>
              <ListItem>
                <ListIcon as={SiAndroid} color="slate.500" fontSize="2xl" />
              </ListItem>
            </List>
          </VStack>
        </Container>
      </Box>
      <Box w="full" bg="slate.800" color="slate.100">
        <Container maxW="container.xl" py={16}>
          <VStack spacing={8} alignItems="flex-start">
            <Heading as="h2" size="2xl" color="white">
              Our Unique Offerings
            </Heading>
            <Flex
              w="full"
              gap={28}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <List spacing={12}>
                  <ListItem>
                    <VStack spacing={3} alignItems="flex-start">
                      <Heading size="md">Customized Solutions</Heading>
                      <Text size="md">
                        Tailored to your needs and focused on providing maximum
                        value
                      </Text>
                    </VStack>
                  </ListItem>
                  <ListItem>
                    <VStack spacing={3} alignItems="flex-start">
                      <Heading size="md">Dedicated Support</Heading>
                      <Text size="md">
                        Our experts are with you every step of the way
                      </Text>
                    </VStack>
                  </ListItem>
                  <ListItem>
                    <VStack spacing={3} alignItems="flex-start">
                      <Heading size="md">Growth-Focused</Heading>
                      <Text size="md">
                        Strategies to ensure exponential results
                      </Text>
                    </VStack>
                  </ListItem>
                </List>
              </Box>
              <Box position="relative">
                <figure>
                  <NextImage
                    src="/images/our-unique-values.jpeg"
                    alt="Our unique offerings"
                    width={600}
                    height={400}
                  />
                  <figcaption className={styles.figureCap}>
                    Photo by{" "}
                    <a
                      href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      charlesdeluvio
                    </a>{" "}
                    on{" "}
                    <a
                      href="https://unsplash.com/photos/Lks7vei-eAg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Unsplash
                    </a>
                  </figcaption>
                </figure>
              </Box>
            </Flex>
          </VStack>
        </Container>
      </Box>
    </Layout>
  );
}

export default HomePage;
