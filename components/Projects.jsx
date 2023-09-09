import { AtSignIcon } from "@chakra-ui/icons";
import {
  Container,
  VStack,
  Text,
  Heading,
  Grid,
  GridItem,
  Icon,
  Avatar,
} from "@chakra-ui/react";

import {
  FaHandHoldingHeart,
  FaHandHoldingUsd,
  FaHatCowboy,
  FaLifeRing,
  FaRegHandshake,
  FaRegSmileBeam,
  FaRobot,
} from "react-icons/fa";
const Projects = () => {
  const lists = [
    {
      name: "Human Capital",
      description: "Molding talent into masterpieces with advanced HR systems.",
      avatar: (
        <Avatar
          size="md"
          bg="slate.800"
          icon={<FaRegHandshake fontSize="1.5rem" />}
        />
      ),
    },
    {
      name: "Health",
      description: "Revolutionizing healthcare management for a better world.",
      avatar: (
        <Avatar
          size="md"
          bg="slate.800"
          icon={<FaHandHoldingHeart fontSize="1.5rem" />}
        />
      ),
    },
    {
      name: "Accounting",
      description: "Master the art of numbers with our cutting-edge software.",
      avatar: (
        <Avatar
          size="md"
          bg="slate.800"
          icon={<FaHandHoldingUsd fontSize="1.5rem" />}
        />
      ),
    },
    {
      name: "Personal Website",
      description: "Designing your digital home flawlessly and fabulously.",
      avatar: (
        <Avatar
          size="md"
          bg="slate.800"
          icon={<FaHatCowboy fontSize="1.5rem" />}
        />
      ),
    },
    {
      name: "CRM",
      description:
        "Mastering the chord of customer relationships harmoniously.",
      avatar: (
        <Avatar
          size="md"
          bg="slate.800"
          icon={<FaLifeRing fontSize="1.5rem" />}
        />
      ),
    },
    {
      name: "Customize Solutions",
      description:
        "Tailored to your needs and focused on providing maximum value",
      avatar: (
        <Avatar size="md" bg="slate.800" icon={<FaRobot fontSize="1.5rem" />} />
      ),
    },
  ];

  return (
    <VStack py={16} px={32} spacing={12} bg="slate.100">
      {/* START OUR INCREDIBLE WORK SECTION */}
      <Heading as="h2" size="2xl">
        Our Incredible Works
      </Heading>
      <Container maxW="container.xl" p={0}>
        <Grid templateColumns="repeat(2, 1fr)" gap={12}>
          <GridItem w="100%">
            <Text>
              We’re not only dreamers, but achievers too. Our portfolio is
              filled with extraordinary projects like human capital solutions,
              health management systems, and personal website development.
            </Text>
          </GridItem>
          <GridItem w="100%">
            <Text>
              This is where magic unfolds. From accounting software to customer
              relationship management, our ingenious solutions have left our
              clients awestruck.
            </Text>
          </GridItem>
        </Grid>
      </Container>
      {/* END OUR INCREDIBLE WORK SECTION */}

      {/* START SUCCESS PROJECT SECTION */}
      <VStack alignItems="flex-start" w="full" gap={8} mt={12}>
        <Heading as="h3" size="xl" alignItems="flex-start">
          Success Projects
        </Heading>
        <Container maxW="container.xl" p={0}>
          <Grid templateColumns="repeat(3, 1fr)" gap={12}>
            {lists.map((item) => (
              <GridItem w="100%" gap={4}>
                {item["avatar"]}
                <Heading as="h4" size="md" textColor="slate.800" mt={6} mb={2}>
                  {item["name"]}
                </Heading>
                <Text>{item["description"]}</Text>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </VStack>
      {/* END SUCCESS PROJECTS SECTION */}
    </VStack>
  );
};

export default Projects;
