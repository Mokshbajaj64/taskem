import React, { useState } from "react";
import { Checkbox, Text, IconButton, Divider } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdDragIndicator } from "react-icons/md";

const TaskComponent = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex flex-col w-full">
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
          <Checkbox className="mt-1" />
          <div className="flex flex-col gap-1">
            <Text fontSize="md">Eat shit</Text>
            <Text fontSize="md" color="gray.500">
              Why eating shit is good for health
            </Text>
          </div>
        </div>
        {hover ? (
          <div className="flex gap-4">
            <IconButton icon={<MdDragIndicator />} aria-label="Drag" />
            <IconButton icon={<AiOutlineEdit />} aria-label="Edit" />
            <IconButton icon={<FiMoreHorizontal />} aria-label="More options" />
          </div>
        ) : (
          ""
        )}
      </div>
      <Divider />
    </div>
  );
};

export default TaskComponent;
