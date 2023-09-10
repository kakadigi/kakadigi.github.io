import {
  VStack,
  Heading,
  AspectRatio,
  Flex,
  Grid,
  GridItem,
  Icon,
  Text,
  Image,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const FeatureAndBenefit = () => {
  const features = [
    'Expert Tech Consulting',
    'Innovative Software Engineering',
    'Createive Digital Strategy',
    'Reliable Ongoing Support',
  ];

  const benerfits = [
    'Improved Digital Presence',
    'Streamline Proccess',
    'Increased Efficiency',
    'Enhanced User Experience',
    'Competitive Advanteage',
  ];

  return (
    <VStack py={16} spacing={24} bg="slate.100">
      <Heading as="h2" size="2xl">
        Features and Benefits
      </Heading>
      <Flex wrap="wrap" w="full" justifyContent="center" gap={8} px={32}>
        <Grid templateColumns="repeat(3,1fr)" gap={6} w="100%">
          <GridItem w="100%" gap={8} spacing={8}>
            <Heading as="h3" size="lg" mb={6}>
              Features
            </Heading>
            <VStack spacing={4} align="left" px={4}>
              {features.map((feature) => (
                <Flex gap={2} alignItems="center">
                  <Icon as={CheckIcon} color="green.500"></Icon>
                  <Text>{feature}</Text>
                </Flex>
              ))}
            </VStack>
          </GridItem>
          <GridItem w="100%" gap={8}>
            <Heading as="h3" size="lg" mb={6}>
              Benefits
            </Heading>
            <VStack spacing={4} align="left" px={4}>
              {benerfits.map((benefit) => (
                <Flex gap={2} alignItems="center">
                  <Icon as={CheckIcon} color="green.500"></Icon>
                  <Text>{benefit}</Text>
                </Flex>
              ))}
            </VStack>
          </GridItem>
          <GridItem w="100%">
            <AspectRatio maxW="100%" ratio={1}>
              <Image src="https://10web-site.ai/32/wp-content/uploads/sites/35/2023/09/pexels-matheus-cenali-2413081_ZsIMNSts.webp"></Image>
            </AspectRatio>
          </GridItem>
        </Grid>
      </Flex>
    </VStack>
  );
};

export default FeatureAndBenefit;
