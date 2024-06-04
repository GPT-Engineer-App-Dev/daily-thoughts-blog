import { useState } from "react";
import { Container, Heading, VStack, Input, Button, useToast } from "@chakra-ui/react";

const DeletePost = () => {
  const [postId, setPostId] = useState("");
  const toast = useToast();

  const handleDelete = (e) => {
    e.preventDefault();
    if (postId) {
      // Here you would typically send the delete request to a server
      console.log("Delete Post ID:", postId);
      toast({
        title: "Post deleted.",
        description: `The post with ID ${postId} has been deleted.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setPostId("");
    } else {
      toast({
        title: "Error.",
        description: "Post ID is required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} as="form" onSubmit={handleDelete}>
        <Heading as="h1" size="xl">Delete Post</Heading>
        <Input
          placeholder="Post ID"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          size="lg"
        />
        <Button type="submit" colorScheme="red" size="lg">Delete Post</Button>
      </VStack>
    </Container>
  );
};

export default DeletePost;