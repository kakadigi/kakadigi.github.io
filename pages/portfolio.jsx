import { Container, Box, Button, Heading, VStack, Flex, Text } from "@chakra-ui/react";
import { Layout, NextImage } from "../components";
import styles from "../styles.module.scss";

const Portfolio = () => {
    return (
        <Layout title="Portfolio">
            {/* START HERO SECTION */}
            <Flex w="full" alignItems="center" justifyContent="center" flexDirection="column" gap={4}>
                <VStack w="container.md" textAlign="center" spacing={8} pt={32} pb={8}>
                    <Heading as="h1" size="4xl">
                        It's time to show up!
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
                    Welcome to our treasure trove of jaw-dropping works, where we display our unmatched creativity and expertise. Grab some popcorn and enjoy the show!
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
            {/* END PROJECTS SUMMARU SECTION */}
        </Layout>
    );
}

export default Portfolio;