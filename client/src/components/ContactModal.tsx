import React, { useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type ContactType = {
  username: string;
  email: string;
  message: string;
};

const ContactModal = (props: Props) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState<ContactType>({
    username: "",
    email: "",
    message: "",
  });

  const createContact = async () => {
    setLoading(true);
    await axios
      .post("http://localhost:8000/api/contact", {
        username: contactData?.username,
        email: contactData?.email,
        message: contactData?.message,
      })
      .then((response) => {
        setLoading(false);
        toast({
          title: "Success",
          description: "Contact form submitted successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        props.onClose();
      })
      .catch((error) => {
        setLoading(false);
        toast({
          title: "Error",
          description: "Oh no eat shit",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        props?.onClose();
      });
  };

  const contactSubmit = () => {
    createContact();
  };

  const isUsernameError =
    contactData?.username?.trim()?.length < 4 ||
    contactData?.username?.trim()?.length > 20;
  const isEmailError = !contactData?.email?.trim()?.includes("@");
  const isMessageError =
    contactData?.message?.trim()?.length < 1 ||
    contactData?.message?.trim()?.length > 200;

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size={"lg"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Contact Us</ModalHeader>
        <ModalCloseButton autoFocus={false} />
        <ModalBody pb={6}>
          <FormControl isInvalid={isUsernameError} isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              placeholder="Username"
              onChange={(e) => {
                setContactData({ ...contactData, username: e.target.value });
              }}
            />
            {contactData?.username?.trim()?.length >= 4 &&
            contactData?.username?.trim()?.length <= 20 ? (
              ""
            ) : (
              <FormErrorMessage>
                Username must be between 4 and 20 characters
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl mt={4} isRequired isInvalid={isEmailError}>
            <FormLabel>Emai</FormLabel>
            <Input
              placeholder="Email"
              onChange={(e) => {
                setContactData({ ...contactData, email: e.target.value });
              }}
            />
            {contactData?.email?.trim()?.includes("@") ? (
              ""
            ) : (
              <FormErrorMessage>Email must be valid</FormErrorMessage>
            )}
          </FormControl>

          <FormControl mt={4} isRequired isInvalid={isMessageError}>
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Message"
              onChange={(e) => {
                setContactData({ ...contactData, message: e.target.value });
              }}
            />
            {contactData?.message?.trim()?.length >= 1 &&
            contactData?.message?.trim()?.length <= 200 ? (
              ""
            ) : (
              <FormErrorMessage>
                Message must be between 1 and 200 characters
              </FormErrorMessage>
            )}
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            variant="outline"
            rounded={"full"}
            onClick={props.onClose}
          >
            Close
          </Button>
          {contactData?.username?.trim()?.length >= 4 &&
          contactData?.username?.trim()?.length <= 20 &&
          contactData?.email?.trim()?.includes("@") &&
          contactData?.message?.trim()?.length >= 1 &&
          contactData?.message?.trim()?.length <= 200 ? (
            <Button
              colorScheme="blue"
              rounded={"full"}
              onClick={contactSubmit}
              isLoading={loading}
            >
              Submit
            </Button>
          ) : (
            <Button colorScheme="blue" rounded={"full"} disabled>
              Submit
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
