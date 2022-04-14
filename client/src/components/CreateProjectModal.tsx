import React, { useState } from "react";
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
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { createProject } from "../actions/project";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  isTag: boolean;
};

const CreateProjectModal = (props: Props) => {
  const dispatch = useDispatch();
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    color: "green",
  });
  const token = JSON.parse(localStorage?.getItem("token") as string);
  const projectCreateBoi = () => {
    dispatch(createProject(projectData, token));
  };
  const tagCreateBoi = () => {
    console.log("Tag boi");
  };
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Add {props?.isTag === true ? "Tag" : "Project"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="text"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setProjectData({
                  ...projectData,
                  name: event?.target?.value,
                });
              }}
            />
          </FormControl>
          <FormControl marginTop="5">
            <FormLabel htmlFor="desc">Description</FormLabel>
            <Textarea
              id="desc"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setProjectData({
                  ...projectData,
                  description: event?.target?.value,
                });
              }}
            />
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
          {projectData?.name?.trim()?.length >= 1 ? (
            <Button
              colorScheme="blue"
              onClick={props?.isTag === true ? tagCreateBoi : projectCreateBoi}
            >
              Add
            </Button>
          ) : (
            <Button colorScheme="blue" isDisabled={true}>
              Add
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateProjectModal;
