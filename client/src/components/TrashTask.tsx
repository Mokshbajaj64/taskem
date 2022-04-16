import { Heading, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import CompletedTaskComponent from "./CompletedTaskComponent";

const TrashTask = () => {
  const { colorMode } = useColorMode();
  const deletedtasks = useSelector(
    (data: any) => data?.deletedtasks?.deletedTasksData
  );
  return (
    <div className="pl-[30%] w-full min-h-[calc(100vh-80px)] h-full p-11 mr-9">
      <div className="flex sticky items-center w-full justify-between">
        <div className="flex items-center gap-2">
          <Heading as="h2" fontSize="2xl">
            Trash
          </Heading>
          <Text fontSize="md" color="gray.500">
            All your deleted tasks
          </Text>
        </div>
      </div>
      <div className="flex flex-col w-full items-start mt-5 gap-4">
        {deletedtasks?.map((task: any, index: React.Key) => (
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

export default TrashTask;
