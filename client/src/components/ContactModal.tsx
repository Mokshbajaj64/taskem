import React from "react";
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
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal = (props: Props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size={"lg"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Contact Us</ModalHeader>
        <ModalCloseButton autoFocus={false} />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input placeholder="Username" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Emai</FormLabel>
            <Input placeholder="Email" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Why you want to contact me?</FormLabel>
            <Textarea placeholder="Why you want to contact me?" />
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
          <Button colorScheme="blue" rounded={"full"}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
