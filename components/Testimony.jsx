import {
  VStack,
  Heading,
  Text,
  Container,
  Grid,
  GridItem,
  Avatar,
  Icon,
  Flex,
} from '@chakra-ui/react';

import { StarIcon } from '@chakra-ui/icons';

function renderRating(rating) {
  const result = [];

  for (let i = 1; i <= rating; i++) {
    result.push(<Icon as={StarIcon} color="orange.500"></Icon>);
  }

  return result;
}

const Testimony = () => {
  const items = [
    {
      name: 'SARAH THOMPSON',
      profile_picture:
        'https://images.unsplash.com/photo-1663167529629-de24f18738cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80',
      message:
        "We were blown away by kakadigi's digital consulting services. Their team of experts provided the guidance and expertise we needed to succeed in a rapidly changing digital landscape.",
      rating: 4,
    },
    {
      name: 'JOHN CARTER',
      profile_picture:
        'https://images.unsplash.com/photo-1693163314393-93e92fc06215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      message:
        "kakadigi's software engineering team is second to none. They delivered a product that was both functional and beautiful, and were a pleasure to work with throughout the process.",
      rating: 5,
    },
    {
      name: 'EMMA RODRIGUEZ',
      profile_picture:
        'https://images.unsplash.com/photo-1693129855805-70807d8a4ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      message:
        "kakadigi's digital strategy helped take our business to the next level. They understood our unique needs and created a plan that was both innovative and effective.",
      rating: 5,
    },
    {
      name: 'DAVID WILSON',
      profile_picture:
        'https://images.unsplash.com/photo-1686984096026-23d6e82f9749?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      message:
        "We couldn't be happier with the results of kakadigi's software engineering. They delivered a product that was both reliable and scalable, and their ongoing support has been invaluable.",
      rating: 3,
    },
  ];

  return (
    <VStack spacing={4} alignItems="flex-start" w="full" px={32} py={16}>
      <Heading as="h1" size="2xl">
        Client Testimonials
      </Heading>
      <Text>Hear What Our Clients Have to Say About Us</Text>

      <Container maxW="container.xl" p={0} mt={16}>
        <Grid templateColumns="repeat(2, 1fr)" gap={12}>
          {items.map((item) => (
            <GridItem w="100%" gap={4} mb={12}>
              <Flex gap={2} mb={4}>
                {renderRating(item['rating'])}
              </Flex>

              <Text>{item['message']}</Text>
              <Flex gap={2} py={4} position="absolute" justifyContent="center" alignItems="center">
                <Avatar size="xs" name={item['name']} src={item['profile_picture']}></Avatar>
                <Heading as="h4" size="sm" textColor="blue.600">
                  {item['name']}
                </Heading>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </VStack>
  );
};
export default Testimony;
