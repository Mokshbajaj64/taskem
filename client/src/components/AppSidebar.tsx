import React from "react";
import { IoTodaySharp, IoCloudDoneSharp } from "react-icons/io5";
import { Divider, Text, Box } from "@chakra-ui/react";
import {
  BsInboxFill,
  BsCalendarWeekFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { Accordion } from "@chakra-ui/react";
import SidebarAccordian from "./SidebarAccordian";

const AppSidebar = () => {
  return (
    <div
      className="w-[23%] overflow-y-auto fixed h-[calc(100vh-80px)]"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      }}
    >
      <div className="flex flex-col pt-4 pl-4 w-full h-full pr-7 gap-4">
        <div className="flex flex-col w-full gap-1">
          <div
            className="flex items-center justify-between cursor-pointer hover:bg-[#21242a] p-4 rounded-md"
            style={{
              backgroundColor:
                window.location.pathname === "/app/today" ? "#21242a" : "",
            }}
          >
            <div className="flex items-center gap-4">
              <IoTodaySharp size="22" />
              <Text fontSize="md">Today</Text>
            </div>
            <Text fontSize="md" color="gray.500">
              69
            </Text>
          </div>
          <div
            className="flex items-center justify-between cursor-pointer hover:bg-[#21242a] p-4 rounded-md"
            style={{
              backgroundColor:
                window.location.pathname === "/app/week" ? "#21242a" : "",
            }}
          >
            <div className="flex items-center gap-4">
              <BsCalendarWeekFill size="22" />
              <Text fontSize="md">Next 7 days</Text>
            </div>
            <Text fontSize="md" color="gray.500">
              4
            </Text>
          </div>
          <div
            className="flex items-center justify-between cursor-pointer hover:bg-[#21242a] p-4 rounded-md"
            style={{
              backgroundColor:
                window.location.pathname === "/app/inbox" ? "#21242a" : "",
            }}
          >
            <div className="flex items-center gap-4">
              <BsInboxFill size="22" />
              <Text fontSize="md">Inbox</Text>
            </div>
            <Text fontSize="md" color="gray.500">
              5
            </Text>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col w-full gap-1">
          <Accordion allowMultiple className="gap-1">
            <SidebarAccordian title="Project" />
            <SidebarAccordian title="Tags" />
            <SidebarAccordian title="Filters" />
          </Accordion>
        </div>
        <Divider />
        <div className="flex flex-col w-full gap-1">
          <div
            className="flex items-center justify-between cursor-pointer hover:bg-[#21242a] p-4 rounded-md"
            style={{
              backgroundColor:
                window.location.pathname === "/app/completed" ? "#21242a" : "",
            }}
          >
            <div className="flex items-center gap-4">
              <IoCloudDoneSharp size="22" />
              <Text fontSize="md">Completed</Text>
            </div>
            <Text fontSize="md" color="gray.500">
              0
            </Text>
          </div>
          <div
            className="flex items-center justify-between cursor-pointer hover:bg-[#21242a] p-4 rounded-md"
            style={{
              backgroundColor:
                window.location.pathname === "/app/trash" ? "#21242a" : "",
            }}
          >
            <div className="flex items-center gap-4">
              <BsFillTrashFill size="22" />
              <Text fontSize="md">Trash</Text>
            </div>
            <Text fontSize="md" color="gray.500">
              2
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;
