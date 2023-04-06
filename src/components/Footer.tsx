import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Flex
} from "@chakra-ui/react";



export const Footer = () => (
  <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
    <Stack spacing={{ base: "4", md: "5" }}>
      <Stack justify="space-between" direction="row" align="center">
      
        <ButtonGroup variant="ghost" justifyContent={"center"}>
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            //icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            //icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    <Flex direction={'column'}>
      <Text textAlign={'center'}>https://www.linkedin.com/in/noah-george-41b817227/ </Text>
      <Text textAlign={'center'}>https://github.com/NoahWGeorge </Text>
      <Text fontSize="sm" color="subtle" textAlign={"center"}>
        &copy; {new Date().getFullYear()} The Gallery, Inc. All rights
        reserved.
      </Text>
      </Flex>
    </Stack>
  </Container>
)
export default Footer