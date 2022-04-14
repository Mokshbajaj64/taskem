import { Heading, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MdSort, MdOutlineTitle } from "react-icons/md";
import AddTaskComponent from "./AddTaskComponent";
import TaskComponent from "./TaskComponent";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsFillFlagFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { useSelector } from "react-redux";

const WeeklyTask = () => {
  const { colorMode } = useColorMode();
  const weeklytask = useSelector(
    (data: any) => data?.weeklytask?.weeklyTaskData
  );
  return (
    <div className="pl-[30%] w-full h-screen p-11 mr-9">
      <div className="flex sticky items-center w-full justify-between">
        <div className="flex items-center gap-2">
          <Heading as="h2" fontSize="2xl">
            Weekly
          </Heading>
          <Text fontSize="md" color="gray.500">
            This week tasks
          </Text>
        </div>
        {colorMode === "light" ? (
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
        ) : (
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
        )}
      </div>
      <div className="flex flex-col w-full items-start mt-5 gap-4">
        {weeklytask?.map((task: any, index: React.Key) => (
          <TaskComponent
            key={index}
            title={task?.title}
            description={task?.description}
            id={task?._id}
          />
        ))}
        <AddTaskComponent />
      </div>
    </div>
  );
};

export default WeeklyTask;
