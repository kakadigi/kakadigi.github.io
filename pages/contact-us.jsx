import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaMapMarkedAlt,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaDribbble,
  FaBehance,
  FaWhatsapp,
} from "react-icons/fa";
import { SiToptal, SiUpwork } from "react-icons/si";

import { Layout, NextImage } from "../components";
import styles from "../styles.module.scss";

function ContactPage() {
  return (
    <Layout title="Contact Us">
      <Container maxW="container.xl">
        <Flex
          w="full"
          h="full"
          alignItems="center"
          justifyContent="center"
          py={16}
        >
          <Container maxW="container.xl">
            <VStack spacing={8} mb={24}>
              <Heading as="h1" size="2xl">
                {"Let's Connect and Create Together!"}
              </Heading>
              <Box w="container.md" textAlign="center">
                <Text size="md">
                  At <b>Karya Kami Digital</b>,
                  {
                    " we're eager to hear from you. Whether you have a question, a project idea, or simply want to say hello, our digital doors are always open."
                  }
                </Text>
              </Box>
              <Button size="lg" leftIcon={<FaWhatsapp />} colorScheme="emerald">
                Chat with Us
              </Button>
            </VStack>
            <Flex
              direction={{ base: "column", md: "column", lg: "row" }}
              w="full"
              h="full"
              justify="space-between"
              gap={16}
            >
              <Box w="full" h="full">
                <VStack alignItems="flex-start" spacing={3} mb={8}>
                  <Heading as="h3" size="lg">
                    Visit Us
                  </Heading>
                  <Divider />
                  <Text fontSize="lg">
                    If you prefer face-to-face interactions, our doors are open
                    at our office location:
                  </Text>
                </VStack>
                <HStack spacing={4} alignItems="flex-start">
                  <Text fontSize="lg">
                    <FaMapMarkedAlt />
                  </Text>
                  <Text fontWeight={500} fontSize="md">
                    Perumahan Permata Perwira Kalimanah Purbalingga, Jawa Tengah
                    53371
                  </Text>
                </HStack>
              </Box>
              <Box w="full" h="full">
                <VStack alignItems="flex-start" spacing={3} mb={8}>
                  <Heading as="h3" size="lg">
                    Stay Connected
                  </Heading>
                  <Divider />
                  <Text fontSize="lg">
                    Follow us on social media to stay updated on the latest tech
                    trends, industry insights, and our exciting projects:
                  </Text>
                </VStack>
                <HStack
                  spacing={6}
                  className={styles.stayConnect}
                  alignItems="center"
                >
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="x-twitter"
                  >
                    <NextImage
                      src="/images/x-twitter.svg"
                      alt="X Twitter"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="http://">
                    <FaGithub />
                  </a>
                  <a href="http://">
                    <FaYoutube />
                  </a>
                  <a href="http://">
                    <FaDribbble />
                  </a>
                  <a href="http://">
                    <FaBehance />
                  </a>
                  <a href="http://">
                    <SiUpwork />
                  </a>
                  <a href="http://">
                    <SiToptal />
                  </a>
                </HStack>
              </Box>
            </Flex>
          </Container>
        </Flex>
      </Container>
    </Layout>
  );
}

export default ContactPage;
