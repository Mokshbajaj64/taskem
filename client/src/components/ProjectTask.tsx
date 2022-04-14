import { Heading, Text, useColorMode, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { MdSort, MdOutlineTitle } from "react-icons/md";
import AddTaskComponent from "./AddTaskComponent";
import TaskComponent from "./TaskComponent";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsFillFlagFill, BsChatLeftDots } from "react-icons/bs";
import { BiTime, BiShareAlt } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import CommentsModal from "./CommentsModal";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import EditProjectModal from "./EditProjectModal";
import { useSelector, useDispatch } from "react-redux";
import { deleteProject } from "../actions/project";
import { useNavigate } from "react-router-dom";

const ProjectTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const project = useSelector((data: any) => data?.singleproject);
  const { colorMode } = useColorMode();
  const {
    isOpen: commentIsOpen,
    onOpen: commentOnOpen,
    onClose: commentOnClose,
  } = useDisclosure();
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
  const token = JSON.parse(localStorage?.getItem("token") as string);
  const cancelRef = React.useRef(null);
  const deleteProjectBoi = () => {
    dispatch(deleteProject(token, project?._id));
    deleteOnClose();
    navigate("/app/today");
  };
  return (
    <div className="pl-[30%] w-full min-h-[calc(100vh-80px)] h-full p-11 mr-9">
      <div className="flex sticky items-center w-full justify-between">
        <div className="flex items-center gap-2">
          <Heading as="h2" fontSize="2xl">
            {project?.name}
          </Heading>
          <Text fontSize="md" color="gray.500">
            {project?.description}
          </Text>
        </div>
        {colorMode === "light" ? (
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#f0f0f0] rounded-md"
              onClick={() => {
                commentOnOpen();
              }}
            >
              <BsChatLeftDots size="25" />
              <Text color="gray.500" fontSize="md">
                Comments
              </Text>
            </div>
            <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#f0f0f0] rounded-md">
              <BiShareAlt size="25" />
              <Text color="gray.500" fontSize="md">
                Share
              </Text>
            </div>
            <Menu>
              <MenuButton
                _hover={{
                  backgroundColor: "#f0f0f0",
                }}
              >
                <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#f0f0f0] rounded-md">
                  <MdSort size="25" />
                  <Text color="gray.500" fontSize="md">
                    View
                  </Text>
                </div>
              </MenuButton>
              <MenuList>
                <MenuItem className="flex items-center gap-3">
                  <MdSort size="25" />
                  <Text fontSize="md">Custom</Text>
                </MenuItem>
                <MenuItem className="flex items-center gap-3">
                  <BiTime size="25" />
                  <Text fontSize="md">By Time</Text>
                </MenuItem>
                <MenuItem className="flex items-center gap-3">
                  <MdOutlineTitle size="25" />
                  <Text fontSize="md">By Title</Text>
                </MenuItem>
                <MenuItem className="flex items-center gap-3">
                  <BsFillFlagFill size="22" />
                  <Text fontSize="md">By Priority</Text>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                _hover={{
                  backgroundColor: "#f0f0f0",
                }}
              >
                <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#f0f0f0] rounded-md">
                  <FiMoreHorizontal size="25" />
                </div>
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
                    Edit Project
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
                    Delete Project
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#21242a] rounded-md"
              onClick={() => {
                commentOnOpen();
              }}
            >
              <BsChatLeftDots size="25" />
              <Text color="gray.500" fontSize="md">
                Comments
              </Text>
            </div>
            <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#21242a] rounded-md">
              <BiShareAlt size="25" />
              <Text color="gray.500" fontSize="md">
                Share
              </Text>
            </div>
            <Menu>
              <MenuButton
                _hover={{
                  backgroundColor: "#21242a",
                }}
              >
                <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#21242a] rounded-md">
                  <MdSort size="25" />
                  <Text color="gray.500" fontSize="md">
                    View
                  </Text>
                </div>
              </MenuButton>
              <MenuList>
                <MenuItem className="flex items-center gap-3">
                  <MdSort size="25" />
                  <Text fontSize="md">Custom</Text>
                </MenuItem>
                <MenuItem className="flex items-center gap-3">
                  <BiTime size="25" />
                  <Text fontSize="md">By Time</Text>
                </MenuItem>
                <MenuItem className="flex items-center gap-3">
                  <MdOutlineTitle size="25" />
                  <Text fontSize="md">By Title</Text>
                </MenuItem>
                <MenuItem className="flex items-center gap-3">
                  <BsFillFlagFill size="22" />
                  <Text fontSize="md">By Priority</Text>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                _hover={{
                  backgroundColor: "#21242a",
                }}
              >
                <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#21242a] rounded-md">
                  <FiMoreHorizontal size="25" />
                </div>
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
                    Edit Project
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
                    Delete Project
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        )}
      </div>
      <div className="flex flex-col w-full items-start mt-5 gap-4">
        {/*        <TaskComponent />
        <TaskComponent />
        <TaskComponent />
*/}{" "}
        <AddTaskComponent />
      </div>
      <CommentsModal isOpen={commentIsOpen} onClose={commentOnClose} />
      {/* dleete project modal stuff */}
      <AlertDialog
        isOpen={deleteIsOpen}
        leastDestructiveRef={cancelRef}
        onClose={deleteOnClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Project
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={deleteOnClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deleteProjectBoi} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <EditProjectModal
        isOpen={editIsOpen}
        isTag={false}
        onClose={editOnClose}
        name = {project?.name}
        description = {project?.description}
        color = {project?.color}
        id = {project?._id}
      />
    </div>
  );
};

export default ProjectTask;
