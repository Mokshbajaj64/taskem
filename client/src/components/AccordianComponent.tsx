import React, { useState } from "react";
import { Text, useColorMode, IconButton } from "@chakra-ui/react";
import { FcBiotech } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BsThreeDots } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteProject } from "../actions/project";
import { deleteTag } from "../actions/tag";
import EditProjectModal from "./EditProjectModal";

type Props = {
  isTag: boolean;
  name: string;
  color: string;
  id: string;
  description: string;
};

const AccordianComponent = (props: Props) => {
  const dispatch = useDispatch();
  const {
    isOpen: deleteIsOpen,
    onOpen: deleteOnOpen,
    onClose: deleteOnClose,
  } = useDisclosure();
  const {
    isOpen: editIsOpen,
    onOpen: editOnOpen,
    onClose: editOnClose,
  } = useDisclosure();
  const cancelRef = React.useRef(null);
  const { projectId, tagId } = useParams();
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const token = JSON.parse(localStorage?.getItem("token") as string);
  const deleteProjectBoi = () => {
    dispatch(deleteProject(token, props?.id));
    deleteOnClose();
    navigate("/app/today");
  };
  const deleteTagBoi = () => {
    dispatch(deleteTag(token, props?.id));
    deleteOnClose();
    navigate("/app/today");
  };
  return colorMode === "dark" ? (
    <motion.div
      className={
        projectId === props?.id || tagId === props?.id
          ? "w-full bg-[#21242a] p-4 rounded-md flex items-center justify-between cursor-pointer"
          : "w-full hover:bg-[#21242a] p-4 rounded-md flex items-center justify-between cursor-pointer"
      }
      onClick={() => {
        props.isTag
          ? navigate(`/tag/${props?.id}`)
          : navigate(`/project/${props?.id}`);
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div className="flex items-center gap-4">
        <div className="bg-green-500 p-[0.4rem] rounded-full"></div>
        <Text fontSize="md">{props?.name}</Text>
      </div>
      <div className="flex items-center">
        {hover ? (
          <Menu>
            <MenuButton>
              <IconButton
                aria-label="Options"
                icon={<BsThreeDots />}
                rounded="full"
                size="xs"
              />
            </MenuButton>
            <MenuList>
              <MenuItem
                className="flex items-center gap-3"
                onClick={() => {
                  editOnOpen();
                }}
              >
                <AiOutlineEdit size="20" color="#9bdaf3" />
                <Text fontSize="md" color="#9bdaf3">
                  Edit {props?.isTag ? "Tag" : "Project"}
                </Text>
              </MenuItem>
              <MenuItem
                className="flex items-center gap-3"
                onClick={() => {
                  deleteOnOpen();
                }}
              >
                <AiOutlineDelete size="20" color="#df3333" />
                <Text fontSize="md" color="#df3333">
                  Delete {props?.isTag ? "Tag" : "Project"}
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : null}
      </div>
      {/* delete modal */}
      <AlertDialog
        isOpen={deleteIsOpen}
        leastDestructiveRef={cancelRef}
        onClose={deleteOnClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete {props?.isTag ? "Tag" : "Project"}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={deleteOnClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={!props?.isTag ? deleteProjectBoi : deleteTagBoi}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <EditProjectModal
        isOpen={editIsOpen}
        isTag={props?.isTag}
        onClose={editOnClose}
        name={props?.name}
        description={props?.description}
        color={props?.color}
        id={props?.id}
      />
    </motion.div>
  ) : (
    <motion.div
      className={
        projectId === props?.id || tagId === props?.id
          ? "w-full bg-[#f0f0f0] p-4 rounded-md flex items-center justify-between cursor-pointer"
          : "w-full hover:bg-[#f0f0f0] p-4 rounded-md flex items-center justify-between cursor-pointer"
      }
      onClick={() => {
        props.isTag
          ? navigate(`/tag/${props?.id}`)
          : navigate(`/project/${props?.id}`);
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div className="flex items-center gap-2">
        <div className="bg-green-500 p-[0.4rem] rounded-full"></div>
        <Text fontSize="md">{props?.name}</Text>
      </div>
      <div className="flex items-center">
        {hover ? (
          <Menu>
            <MenuButton>
              <IconButton
                aria-label="Options"
                icon={<BsThreeDots />}
                rounded="full"
                size="xs"
              />
            </MenuButton>
            <MenuList>
              <MenuItem
                className="flex items-center gap-3"
                onClick={() => {
                  editOnOpen();
                }}
              >
                <AiOutlineEdit size="20" color="#9bdaf3" />
                <Text fontSize="md" color="#9bdaf3">
                  Edit {props?.isTag ? "Tag" : "Project"}
                </Text>
              </MenuItem>
              <MenuItem
                className="flex items-center gap-3"
                onClick={() => {
                  deleteOnOpen();
                }}
              >
                <AiOutlineDelete size="20" color="#df3333" />
                <Text fontSize="md" color="#df3333">
                  Delete {props?.isTag ? "Tag" : "Project"}
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : null}
      </div>
      {/* delete modal */}
      <AlertDialog
        isOpen={deleteIsOpen}
        leastDestructiveRef={cancelRef}
        onClose={deleteOnClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete {props?.isTag ? "Tag" : "Project"}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={deleteOnClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={!props?.isTag ? deleteProjectBoi : deleteTagBoi}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <EditProjectModal
        isOpen={editIsOpen}
        isTag={props?.isTag}
        onClose={editOnClose}
        name={props?.name}
        description={props?.description}
        color={props?.color}
        id={props?.id}
      />
    </motion.div>
  );
};

export default AccordianComponent;
