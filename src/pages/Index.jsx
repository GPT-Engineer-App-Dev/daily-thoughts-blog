import { Container, Text, VStack, Heading, Box, Image, Link, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-banner.jpg" alt="Blog Banner" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Dive into my thoughts, experiences, and stories. Explore various topics ranging from technology to personal growth.
        </Text>
        <Link href="/about" color="teal.500" fontSize="xl">Learn more about me</Link>
        <Button as={Link} href="/add-post" colorScheme="teal" size="lg">Add New Post</Button>
        <Button as={Link} href="/delete-post" colorScheme="red" size="lg">Delete Post</Button>
      </VStack>
    </Container>
  );
};

export default Index;