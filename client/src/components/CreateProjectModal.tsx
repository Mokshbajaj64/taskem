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
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateProjectModal = (props: Props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="text" />
          </FormControl>
          <FormControl marginTop="5">
            <FormLabel htmlFor="desc">Description</FormLabel>
            <Textarea id="desc" />
          </FormControl>
          <div className="flex w-full gap-4 mt-5 items-center">
            <Text fontSize="md">Color</Text>
            <Popover>
              <PopoverTrigger>
                <div className="p-4 bg-green-400 rounded-sm cursor-pointer"></div>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Select Color</PopoverHeader>
                <PopoverBody>
                  <div className="flex items-center flex-wrap gap-2">
                    <div className="p-4 bg-green-400 rounded-sm cursor-pointer"></div>
                    <div className="p-4 bg-blue-400 rounded-sm cursor-pointer"></div>
                    <div className="p-4 bg-red-400 rounded-sm cursor-pointer"></div>
                    <div className="p-4 bg-gray-400 rounded-sm cursor-pointer"></div>
                    <div className="p-4 bg-pink-400 rounded-sm cursor-pointer"></div>
                    <div className="p-4 bg-yellow-400 rounded-sm cursor-pointer"></div>
                    <div className="p-4 bg-orange-400 rounded-sm cursor-pointer"></div>
                  </div>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" mr={3} onClick={props.onClose}>
            Close
          </Button>
          <Button colorScheme="blue">Add</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateProjectModal;
