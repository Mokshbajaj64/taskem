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
  Textarea,
} from "@chakra-ui/react";
import CommentComponent from "./CommentComponent";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CommentsModal = (props: Props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size="3xl"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Comments</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="w-full flex flex-col gap-4 items-start">
            <CommentComponent />
            <CommentComponent />
            <CommentComponent />
            <CommentComponent />
          </div>
        </ModalBody>

        <ModalFooter>
          <div
            className="flex w-full flex-col gap-2 p-3 rounded-lg"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              border: "1px solid #e6e6e6",
            }}
          >
            <Textarea placeholder="Comment" variant="unstyled" resize="none" />
            <Button colorScheme="blue" width="30%">
              Comment
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CommentsModal;
