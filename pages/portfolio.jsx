import {
  Container,
  Box,
  Button,
  Heading,
  VStack,
  Flex,
  Text,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import {
  FaDocker,
  FaAws,
  FaLaravel,
  FaReact,
  FaGoogle,
  FaMicrosoft,
  FaFedex,
  FaAccusoft,
  FaAirbnb,
  FaApple,
} from 'react-icons/fa';
import {
  SiDjango,
  SiPostgresql,
  SiFlutter,
  SiGithubactions,
  SiNextdotjs,
  SiJest,
  SiAndroid,
} from 'react-icons/si';
import { Layout, NextImage, Projects, Testimony } from '../components';
import styles from '../styles.module.scss';

const Portfolio = () => {
  return (
    <Layout title="Portfolio">
      {/* START HERO SECTION */}
      <Flex w="full" alignItems="center" justifyContent="center" flexDirection="column" gap={4}>
        <VStack w="container.md" textAlign="center" spacing={8} pt={32} pb={8}>
          <Heading as="h1" size="4xl">
            It's time to show off!
          </Heading>
          <Text fontSize="lg">
            Trust me, our teams are very experienced<br></br>
            and expert in their field.
          </Text>
        </VStack>
        <Flex gap={8} alignItems="center" justifyContent="center" mb={24}>
          <Button colorScheme="twitter" variant="solid" size="lg">
            Let's start
          </Button>
          <Button variant="link" size="lg">
            Learn more
          </Button>
        </Flex>
      </Flex>
      {/* END HERO SECTION*/}
      {/* START PROJECTS SUMMARY SECTION */}
      <VStack spacing={8} alignItems="flex-start" w="full" p={32}>
        <Heading as="h2" size="2xl" color="black">
          Behold Our Masterpieces
        </Heading>
        <Text fontSize="lg" w="xl">
          Welcome to our treasure trove of jaw-dropping works, where we display our unmatched
          creativity and expertise. Grab some popcorn and enjoy the show!
        </Text>

        <Flex w="l" gap={8} alignItems="center" justifyContent="space-between">
          <VStack gap={2} alignItems="flex-start">
            <Heading as="h3" size="xl">
              100+
            </Heading>
            <Text size="lg">Happy Clients</Text>
          </VStack>
          <VStack gap={2} alignItems="flex-start">
            <Heading as="h3" size="xl">
              75
            </Heading>
            <Text size="lg">Complete Projects</Text>
          </VStack>
          <VStack gap={2} alignItems="flex-start">
            <Heading as="h3" size="xl">
              10
            </Heading>
            <Text size="lg">Running Projects</Text>
          </VStack>
        </Flex>
      </VStack>
      {/* END PROJECTS SUMMARY SECTION */}
      {/* START PROJECTS SECTION */}
      <Projects></Projects>
      {/* END PROJECTS SECTION */}
      {/* START CONTENT HERO SECTION */}
      <Flex
        w="full"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={4}
        bg="slate.800"
        color="slate.100"
      >
        <VStack w="container.md" textAlign="center" spacing={8} h="md" justifyContent="Center">
          <Heading as="h1" size="4xl">
            Ready to get blown away ?
          </Heading>
        </VStack>
      </Flex>
      {/* END CONTENT HERO SECTION */}
      {/* START TRUSTED CLIENT*/}
      <Box w="full" bg="slate.200">
        <Container maxW="container.xl" py={6}>
          <VStack spacing={6}>
            <Text size="md" fontWeight={600} color="slate.500" mb={2}>
              Trusted By
            </Text>
            <List display="flex" gap={6}>
              <ListItem>
                <ListIcon as={FaGoogle} color="slate.500" fontSize="2xl" />
              </ListItem>
              <ListItem>
                <ListIcon as={FaMicrosoft} color="slate.500" fontSize="2xl" />
              </ListItem>
              <ListItem>
                <ListIcon as={FaFedex} color="slate.500" fontSize="2xl" />
              </ListItem>
              <ListItem>
                <ListIcon as={FaAccusoft} color="slate.500" fontSize="2xl" />
              </ListItem>
              <ListItem>
                <ListIcon as={FaAirbnb} color="slate.500" fontSize="2xl" />
              </ListItem>
              <ListItem>
                <ListIcon as={FaAws} color="slate.500" fontSize="2xl" />
              </ListItem>
              <ListItem>
                <ListIcon as={FaApple} color="slate.500" fontSize="2xl" />
              </ListItem>
            </List>
          </VStack>
        </Container>
      </Box>
      {/* END TRUSTED CLIENT */}
      {/* START TESTIMONI SECTION */}
      <Testimony></Testimony>
      {/* END TESTIMONI SECTION */}
    </Layout>
  );
};

export default Portfolio;
