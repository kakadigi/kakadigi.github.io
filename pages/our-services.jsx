import Image from "next/image";
import { Container, Box, Heading, VStack, Flex, Text } from "@chakra-ui/react";
import { Layout } from "../components";
import styles from "../styles.module.scss";

const ServicesPage = () => {
  const items = [
    {
      id: 211,
      image: "/images/services/jose-aljovin-JZMdGltAHMo-unsplash.jpg",
      author: {
        name: "jose aljovin",
        authorUrl:
          "https://unsplash.com/@josealjovin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        vendorUrl:
          "https://unsplash.com/photos/JZMdGltAHMo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      },
      title: "Tailored Web and Mobile App Development",
      description:
        "We specialize in crafting personalized web and mobile applications that breathe life into your vision. Our development methodology is agile and inclusive, seamlessly blending function and form.",
    },
    {
      id: 212,
      image: "/images/services/mia-baker-loyuIqiwkkA-unsplash.jpg",
      author: {
        name: "Mia Baker",
        authorUrl:
          "https://unsplash.com/@miabaker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        vendorUrl:
          "https://unsplash.com/photos/loyuIqiwkkA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      },
      title: "Swift Prototyping",
      description:
        "Time is of the essence when ideas are brewing. Our swift prototyping services empower you to visualize concepts rapidly, facilitating nimble iterations and enhancements.",
    },
    {
      id: 213,
      image: "/images/services/kelly-sikkema-io0ZLYbu31s-unsplash.jpg",
      author: {
        name: "Kelly Sikkema",
        authorUrl:
          "https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        vendorUrl:
          "https://unsplash.com/photos/io0ZLYbu31s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      },
      title: "Strategic UI/UX Design",
      description:
        "User engagement fuels our design philosophy. Our skilled designers craft interfaces that are visually arresting and user-centric, ensuring a seamless and captivating user journey.",
    },
    {
      id: 214,
      image: "/images/services/aris-munandar-0-VYzk-vR2M-unsplash.jpg",
      author: {
        name: "Aris Munandar",
        authorUrl:
          "https://unsplash.com/@itsarismunandar05?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        vendorUrl:
          "https://unsplash.com/photos/a-computer-mouse-keyboard-and-paper-on-a-table-0-VYzk-vR2M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      },
      title: "Cross-Platform Proficiency",
      description:
        "Extend your reach across platforms and devices, from handheld wonders to expansive screens, ensuring a consistent and captivating user experience.",
    },
  ];
  return (
    <Layout title="Our Services">
      <Box w="full" py={8}>
        <Container maxW="container.xl">
          <Flex
            w="full"
            alignItems="center"
            justifyContent="space-between"
            gap={16}
          >
            <Box w="full">
              <VStack spacing={2} mb={16} alignItems="flex-start">
                <Heading as="h1">
                  Accelerating Growth Through Innovative Digital Solutions:{" "}
                  <i>
                    Unleash Your Potential with Our Web and Mobile App Services
                  </i>
                </Heading>
              </VStack>
              <VStack spacing={8} textAlign="justify">
                <Text>
                  Welcome to <b>Karya Kami Digital</b>, where we turn your
                  digital aspirations into achievements. Our comprehensive suite
                  of web and mobile app development services is meticulously
                  crafted to fast-track the success of digital startups and
                  businesses aiming to elevate their product presence in the
                  digital realm. We fuse cutting-edge technology with
                  imaginative brilliance, delivering solutions that not only
                  meet objectives but redefine them. Join hands with us to
                  sculpt a dynamic digital future.
                </Text>
              </VStack>
            </Box>
            <Box w="full" textAlign="center">
              <figure>
                <Image
                  src="/images/office-workplace.svg"
                  alt="Our Services"
                  width={325}
                  height={325}
                />
                <figcaption>
                  <a href="https://www.freepik.com/free-vector/isolated-isometric-office-composition-workplace-with-desk-monitor-chair-table-vector-illustration_7201699.htm#query=office%20png&position=9&from_view=search&track=ais">
                    Image by macrovector
                  </a>{" "}
                  on Freepik
                </figcaption>
              </figure>
            </Box>
          </Flex>
        </Container>
      </Box>
      <VStack py={16} spacing={12} bg="primary.100">
        <Heading as="h2" size="2xl">
          Our Services
        </Heading>
        <Container maxW="container.xl">
          <Flex wrap="wrap" w="full" justifyContent="center" gap={8}>
            {items.map((item, ix) => (
              <Box
                key={ix}
                maxW="lg"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                position="relative"
                bg="slate.100"
              >
                <figure>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={512}
                    height={345}
                  />
                  <figcaption className={styles.figureCap}>
                    Photo by{" "}
                    <a
                      href={item.author.authorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.author.name}
                    </a>{" "}
                    on{" "}
                    <a
                      href={item.author.vendorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Unsplash
                    </a>
                  </figcaption>
                </figure>
                <VStack spacing={8} p={6}>
                  <Heading as="h4" size="lg">
                    {item.title}
                  </Heading>
                  <Text fontSize="md">{item.description}</Text>
                </VStack>
              </Box>
            ))}
          </Flex>
        </Container>
      </VStack>
    </Layout>
  );
};

export default ServicesPage;
