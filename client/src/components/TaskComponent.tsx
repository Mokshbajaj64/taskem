import React, { useState } from "react";
import { Checkbox, Text, IconButton, Divider } from "@chakra-ui/react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdDragIndicator } from "react-icons/md";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

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
          <div className="flex gap-4 items-center">
            <IconButton icon={<MdDragIndicator />} aria-label="Drag" />
            <IconButton icon={<AiOutlineEdit />} aria-label="Edit" />
            <Menu>
              <MenuButton>
                <IconButton
                  icon={<FiMoreHorizontal />}
                  aria-label="More options"
                />
              </MenuButton>
              <MenuList>
                <MenuItem className="flex items-center gap-3">
                  <AiOutlineEdit size="20" color="#9bdaf3" />
                  <Text fontSize="md" color="#9bdaf3">
                    Edit task
                  </Text>
                </MenuItem>
                <MenuItem className="flex items-center gap-3">
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
      <Divider />
    </div>
  );
};

export default TaskComponent;
