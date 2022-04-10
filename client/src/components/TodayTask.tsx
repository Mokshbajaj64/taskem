import { Heading, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MdSort } from "react-icons/md";
import AddTaskComponent from "./AddTaskComponent";
import TaskComponent from "./TaskComponent";

const TodayTask = () => {
  const { colorMode } = useColorMode();
  return (
    <div className="pl-[30%] w-full h-full overflow-y-auto p-11 mr-9">
      <div className="flex sticky items-center w-full justify-between">
        <div className="flex items-center gap-2">
          <Heading as="h2" fontSize="2xl">
            Today
          </Heading>
          <Text fontSize="md" color="gray.500">
            Sun 10 Apr
          </Text>
        </div>
        {colorMode === "light" ? (
          <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#f0f0f0] rounded-md">
            <MdSort size="25" />
            <Text color="gray.500" fontSize="md">
              View
            </Text>
          </div>
        ) : (
          <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#21242a] rounded-md">
            <MdSort size="25" />
            <Text color="gray.500" fontSize="md">
              View
            </Text>
          </div>
        )}
      </div>
      <div className="flex flex-col w-full items-start mt-5 gap-4">
        <TaskComponent />
        <TaskComponent />
        <TaskComponent />
        <AddTaskComponent />
      </div>
    </div>
  );
};

export default TodayTask;
