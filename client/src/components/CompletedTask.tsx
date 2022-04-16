import { Heading, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MdSort, MdOutlineTitle } from "react-icons/md";
import AddTaskComponent from "./AddTaskComponent";
import TaskComponent from "./TaskComponent";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsFillFlagFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import CompletedTaskComponent from "./CompletedTaskComponent";
import { useSelector } from "react-redux";

type Props = {
  isOpen?: boolean;
};

const CompletedTask = (props: Props) => {
  const { colorMode } = useColorMode();
  const completedtasks = useSelector(
    (data: any) => data?.completedtasks?.completedTaskData
  );
  return (
    <div
      className={
        !props.isOpen
          ? "pl-[10%] w-full min-h-[calc(100vh-80px)] h-full p-11 mr-9"
          : "pl-[30%] w-full min-h-[calc(100vh-80px)] h-full p-11 mr-9"
      }
    >
      <div className="flex sticky items-center w-full justify-between">
        <div className="flex items-center gap-2">
          <Heading as="h2" fontSize="2xl">
            Completed
          </Heading>
          <Text fontSize="md" color="gray.500">
            All your completed tasks
          </Text>
        </div>
      </div>
      <div className="flex flex-col w-full items-start mt-5 gap-4">
        {completedtasks?.map((task: any, index: React.Key) => (
          <CompletedTaskComponent
            key={index}
            title={task?.title}
            description={task?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CompletedTask;
