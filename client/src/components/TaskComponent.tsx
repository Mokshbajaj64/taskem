import React, { useState } from "react";
import { Checkbox, Text, IconButton, Divider } from "@chakra-ui/react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdDragIndicator } from "react-icons/md";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import EditComponent from "./EditComponent";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { deleteTodayTask, complteTodayTask } from "../actions/todaytask";
import { deleteInboxTask, completeInboxTask } from "../actions/inboxtask";
import { deleteWeeklyTask, completeWeeklyTask } from "../actions/weeklytask";
import { deleteProjectTask,completeProjectTask } from "../actions/projecttask"

type Props = {
  title: string;
  description: string;
  id: string;
  projectId?: string;
  isTodayTask?: boolean;
  isInboxTask?: boolean;
  isProjectTask?: boolean
};

const TaskComponent = (props: Props) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const token = JSON.parse(localStorage?.getItem("token") as string);
  const deleteTaskBoi = () => {
    dispatch(deleteTodayTask(token, props?.id));
    onClose();
  };
  const completeTaskBoi = () => {
    dispatch(complteTodayTask(token, props?.id));
  };
  const deleteTaskBoiInbox = () => {
    dispatch(deleteInboxTask(token, props?.id));
    onClose();
  };
  const deleteTaskBoiWeekly = () => {
    dispatch(deleteWeeklyTask(token, props?.id));
  };
  const completeTaskBoiInbox = () => {
    dispatch(completeInboxTask(token, props?.id));
  };
  const completeTaskBoiWeekly = () => {
    dispatch(completeWeeklyTask(token, props?.id));
  };
  const deleteProjectTaskBoi = () => {
    dispatch(deleteProjectTask(token,props?.projectId as string,props?.id))
  }
  const completeProjectTaskBoi = () => {
    dispatch(completeProjectTask(token,props?.projectId as string, props?.id))
  }
  return (
    <motion.div
      className="flex flex-col w-full"
      whileHover={{
        scale: 1.04,
      }}
    >
      {!isEdit ? (
        <div
          className="flex justify-between cursor-pointer w-full"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <div className="flex gap-3 items-start mb-4">
            <Checkbox
              className="mt-1"
              onChange={
                props?.isTodayTask
                  ? completeTaskBoi
                  : props?.isInboxTask
                  ? completeTaskBoiInbox
                  : props?.isProjectTask ? completeProjectTaskBoi : completeTaskBoiWeekly
              }
            />
            <div className="flex flex-col gap-1">
              <Text fontSize="md">{props?.title}</Text>
              <Text fontSize="md" color="gray.500">
                {props?.description}
              </Text>
            </div>
          </div>
          {hover ? (
            <div className="flex gap-4 items-center">
              <IconButton icon={<MdDragIndicator />} aria-label="Drag" />
              <IconButton
                icon={<AiOutlineEdit />}
                aria-label="Edit"
                onClick={() => {
                  setIsEdit(true);
                }}
              />
              <Menu>
                <MenuButton>
                  <IconButton
                    icon={<FiMoreHorizontal />}
                    aria-label="More options"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem
                    className="flex items-center gap-3"
                    onClick={() => {
                      setIsEdit(true);
                    }}
                  >
                    <AiOutlineEdit size="20" color="#9bdaf3" />
                    <Text fontSize="md" color="#9bdaf3">
                      Edit task
                    </Text>
                  </MenuItem>
                  <MenuItem
                    className="flex items-center gap-3"
                    onClick={() => {
                      onOpen();
                    }}
                  >
                    <AiOutlineDelete size="20" color="#df3333" />
                    <Text fontSize="md" color="#df3333">
                      Delete task
                    </Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <EditComponent
          setIsEdit={setIsEdit}
          title={props?.title}
          description={props?.description}
          id={props?.id}
          isTodayTask={props?.isTodayTask}
          isInboxTask={props?.isInboxTask}
          projectId = {props?.projectId}
          isProjectTask = {props?.isProjectTask}
        />
      )}
      <Divider />
      {/* delete task modal stuff here */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Task
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                ml={3}
                onClick={() => {
                  props?.isTodayTask
                    ? deleteTaskBoi()
                    : props?.isInboxTask
                    ? deleteTaskBoiInbox()
                    : props?.isProjectTask ? deleteProjectTaskBoi() : deleteTaskBoiWeekly();
                }}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </motion.div>
  );
};

export default TaskComponent;
