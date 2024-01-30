import React from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import "./contact.scss";

const Contact = () => {
  return (
    <Box className="contact-page">
      <Heading className="heading">Contactează-ne</Heading>
      <HStack spacing={4} align="start" className="contact-info">
        <Box>
          <Heading as="h2">Adresă</Heading>
          <Text as="p">Str. Gheorghe Șincai 15, Baia Mare</Text>
        </Box>
        <Box>
          <Heading as="h2">Telefon</Heading>
          <Text as="p">074 592 4437</Text>
        </Box>
        <Box>
          <Heading as="h2">Email</Heading>
          <Text as="p">butoiasucubere@yahoo.com</Text>
        </Box>
      </HStack>

      <Box className="contact-form">
        <Heading as="h2">Trimite-ne un mesaj</Heading>
        <form>
          <VStack spacing={4} align="start">
            <FormControl className="form-control">
              <FormLabel className="label">Nume:</FormLabel>
              <Input className="input" type="text" placeholder="Numele tău" />
            </FormControl>

            <FormControl className="form-control">
              <FormLabel className="label">Email:</FormLabel>
              <Input
                className="input"
                type="email"
                placeholder="Adresa ta de email"
              />
            </FormControl>

            <FormControl className="form-control">
              <FormLabel className="label">Mesaj:</FormLabel>
              <Textarea
                className="textarea"
                rows={5}
                placeholder="Scrie mesajul tău aici"
              />
            </FormControl>

            <Button className="submit-button" type="submit">
              Trimite
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
