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
  FormHelperText,
} from "@chakra-ui/react";
import { updateUser } from "../actions/user";
import { useDispatch } from "react-redux";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  username: string;
  email: string;
  bio: string;
};

const UpdateProfileModal = (props: Props) => {
  const dispatch = useDispatch();
  const [updateProfileData, setUpdateProfileData] = useState({
    username: props?.username,
    email: props?.email,
    bio: props?.bio,
  });
  const token = JSON.parse(localStorage?.getItem("token") as string);
  const updateBoi = async () => {
    props.onClose();
    dispatch(updateUser(updateProfileData, token));
  };
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Username</FormLabel>
            <Input
              id="name"
              type="text"
              value={updateProfileData?.username}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUpdateProfileData({
                  ...updateProfileData,
                  username: event?.target?.value,
                });
              }}
            />
            {updateProfileData?.username?.trim()?.length >= 4 &&
            updateProfileData?.username?.trim()?.length <= 20 ? (
              ""
            ) : (
              <FormHelperText>
                Username must be 4 and 20 characters
              </FormHelperText>
            )}
          </FormControl>
          <FormControl isRequired marginTop="5">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              value={updateProfileData?.email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUpdateProfileData({
                  ...updateProfileData,
                  email: event?.target?.value,
                });
              }}
            />
            {updateProfileData?.email?.trim()?.includes("@") ? (
              ""
            ) : (
              <FormHelperText>Email must be valid</FormHelperText>
            )}
          </FormControl>
          <FormControl marginTop="5">
            <FormLabel htmlFor="bio">Bio</FormLabel>
            <Textarea
              id="bio"
              value={updateProfileData?.bio}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setUpdateProfileData({
                  ...updateProfileData,
                  bio: event?.target?.value,
                });
              }}
            />
            {updateProfileData?.bio?.trim()?.length <= 200 ? (
              ""
            ) : (
              <FormHelperText>
                Bio must be less than 200 characters
              </FormHelperText>
            )}
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" mr={3} onClick={props.onClose}>
            Close
          </Button>
          {updateProfileData?.username?.trim()?.length >= 4 &&
          updateProfileData?.username?.trim()?.length <= 20 &&
          updateProfileData?.email?.trim()?.includes("@") &&
          updateProfileData?.bio?.trim()?.length <= 200 ? (
            <Button colorScheme="blue" onClick={updateBoi}>
              Update
            </Button>
          ) : (
            <Button colorScheme="blue" isDisabled={true}>
              Update
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateProfileModal;
