import { Container, Text, VStack, Heading, Box, Button, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to My Personal Website</Heading>
        <Text fontSize="lg" textAlign="center">Hi, I'm [Your Name], a passionate web developer.</Text>
        <Box boxSize="sm">
          <Image src="/path/to/your/profile-picture.jpg" alt="Profile Picture" borderRadius="full" boxSize="150px" />
        </Box>
        <Text fontSize="md" textAlign="center">I specialize in creating amazing web experiences. Let's connect and build something great together!</Text>
        <HStack spacing={4}>
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" as="a" href="https://github.com/yourusername" target="_blank" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" as="a" href="https://linkedin.com/in/yourusername" target="_blank" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" as="a" href="https://twitter.com/yourusername" target="_blank" />
        </HStack>
        <Button colorScheme="teal" size="lg" mt={4}>Get in Touch</Button>
      </VStack>
    </Container>
  );
};

export default Index;