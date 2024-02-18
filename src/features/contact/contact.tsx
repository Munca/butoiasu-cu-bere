import React, { useState } from "react";
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
import emailjs from "@emailjs/browser";

interface ContactData {
  email: string;
  name: string;
  message: string;
}

const Contact = () => {
  const defaultFormFields: ContactData = {
    email: "",
    name: "",
    message: "",
  };
  const [formData, setFormData] = useState<ContactData>(defaultFormFields);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const templateParams = {
    from_name: formData.name, 
    message: formData.message,
  };
  const sendEmailContact = async () => {
    try {
      await emailjs.send(
        "service_ywcywjn",
        "template_i2tjeu4",
        templateParams,
        "Lh6Pn5n2D9d-fQAJP"
      );
      setFormData(defaultFormFields)
    } catch (e: any) {
      console.log(e);
    }
  };

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
        <form onSubmit={() => sendEmailContact()}>
          <VStack spacing={4} align="start">
            <FormControl className="form-control">
              <FormLabel className="label">Nume:</FormLabel>
              <Input
                className="input"
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e)}
                placeholder="Numele tău"
              />
            </FormControl>

            <FormControl className="form-control">
              <FormLabel className="label">Email:</FormLabel>
              <Input
                className="input"
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
                placeholder="Adresa ta de email"
              />
            </FormControl>

            <FormControl className="form-control">
              <FormLabel className="label">Mesaj:</FormLabel>
              <Textarea
                className="textarea"
                name="message"
                value={formData.message}
                onChange={(e) => handleChange(e)}
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
