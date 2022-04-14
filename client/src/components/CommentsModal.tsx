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
  Textarea,
} from "@chakra-ui/react";
import CommentComponent from "./CommentComponent";
import { useDispatch } from "react-redux"
import { commentProject } from "../actions/project"
import {commentTag} from "../actions/tag"

type Props = {
  isOpen: boolean;
  onClose: () => void;
  isTag?: boolean;
  data?: any;
};

const CommentsModal = (props: Props) => {
  const token = JSON.parse(localStorage?.getItem("token") as string);
  const dispatch = useDispatch()
  const [comment, setComment] = useState("");
  const commentBoi = () => {
    dispatch(commentProject(token,props?.data?._id,comment))
  }
  const commentBoiTag = () => {
    dispatch(commentTag(token,props?.data?._id,comment))
  }
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
            {props?.data?.comments?.map((comment: any, index: React.Key) => (
              <CommentComponent
                username={comment?.user?.username}
                comment={comment?.comment}
              />
            ))}
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
            <Textarea
              placeholder="Comment"
              variant="unstyled"
              resize="none"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setComment(event?.target?.value);
              }}
              value={comment}
            />
            {comment?.trim()?.length >= 1 ? (
              <Button colorScheme="blue" width="30%" onClick = {props?.isTag ? commentBoiTag : commentBoi}>
                Comment
              </Button>
            ) : (
              <Button colorScheme="blue" width="30%" isDisabled={true}>
                Comment
              </Button>
            )}
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CommentsModal;
