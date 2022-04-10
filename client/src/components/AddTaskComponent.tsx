import React, { useState } from "react";
import { Text, Input, Textarea, IconButton, Button } from "@chakra-ui/react";
import { IoMdAdd, IoMdAddCircle } from "react-icons/io";
import { FaTags } from "react-icons/fa";
import { BsFlagFill } from "react-icons/bs";
import { motion } from "framer-motion";

const AddTaskComponent = () => {
  const [hover, setHover] = useState(false);
  const [addTask, setAddTask] = useState(false);
  return (
    <div className="w-full">
      {addTask ? (
        <div className="flex w-full flex-col gap-5">
          <div
            className="flex w-full flex-col rounded-2xl p-4 gap-2"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              border: "1px solid #e6e6e6",
            }}
          >
            <Input variant="unstyled" placeholder="Task title" />
            <Textarea
              placeholder="Title description"
              variant="unstyled"
              resize="none"
            />
            <div className="flex items-center gap-4">
              <IconButton icon={<FaTags />} aria-label="Tags" />
              <IconButton icon={<BsFlagFill />} aria-label="Priority" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button colorScheme="blue">Add Task</Button>
            <Button
              variant="outline"
              onClick={() => {
                setAddTask(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <motion.div
          className="flex items-center cursor-pointer gap-3"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          onClick={() => {
            setAddTask(true);
          }}
        >
          {hover ? (
            <IoMdAddCircle size="20" color="#9bdaf3" />
          ) : (
            <IoMdAdd size="20" color="#9bdaf3" />
          )}
          {hover ? (
            <Text fontSize="md" color="#9bdaf3">
              Add task
            </Text>
          ) : (
            <Text fontSize="md">Add task</Text>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default AddTaskComponent;
