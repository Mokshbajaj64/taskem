import React, { useState } from "react";
import { Button, Heading, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiFillFolder } from "react-icons/ai";
import { FaTags } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsSortDown } from "react-icons/bs";

const FeaturesComponent1 = () => {
  const { colorMode } = useColorMode();
  const [selected, setSelected] = useState("folder");
  return (
    <div className="flex justify-center items-start w-screen h-screen">
      <motion.div
        className="flex w-[100%] md:w-[60%] justify-center items-center h-full"
        whileHover={{
          scale: 1.1,
        }}
      >
        {selected === "folder" ? (
          <img src="/bg7.svg" alt="" className="w-[70%]" />
        ) : selected === "tags" ? (
          <img src="/bg2.svg" alt="" className="w-[70%]" />
        ) : selected === "search" ? (
          <img src="/bg3.svg" alt="" className="w-[70%]" />
        ) : (
          <img src="/bg4.svg" alt="" className="w-[70%]" />
        )}
      </motion.div>
      <div className="flex w-[100%] md:w-[40%] justify-center h-full flex-col gap-5 mr-16">
        <Heading as="h1" fontSize="5xl" className="mb-4">
          Clarify what to do next
        </Heading>
        {colorMode === "light" ? (
          <div className="flex flex-col w-full gap-5">
            <div
              className="flex gap-6 cursor-pointer p-2 rounded-md bg-[#f0f0f0]"
              onClick={() => {
                setSelected("folder");
              }}
              style={{
                backgroundColor:
                  selected === "folder" ? "#f0f0f0" : "transparent",
              }}
            >
              <AiFillFolder color="#00a0dc" size="30" />
              <div className="flex flex-col items-start gap-2">
                <Heading fontSize="2xl">
                  Folders, lists, tasks and check items
                </Heading>
                <Text fontSize="xl" color="gray.500">
                  Keep your to-dos organized in four different levels.
                </Text>
              </div>
            </div>
            <div
              className="flex gap-6 cursor-pointer p-2 rounded-md hover:bg-[#f0f0f0]"
              onClick={() => {
                setSelected("tags");
              }}
              style={{
                backgroundColor:
                  selected === "tags" ? "#f0f0f0" : "transparent",
              }}
            >
              <FaTags color="#00a0dc" size="30" />
              <div className="flex flex-col items-start gap-2">
                <Heading fontSize="2xl">Tags</Heading>
                <Text fontSize="xl" color="gray.500">
                  Create and add tags on your tasks to manage them flexibly
                </Text>
              </div>
            </div>
            <div
              className="flex gap-6 cursor-pointer p-2 rounded-md hover:bg-[#f0f0f0]"
              onClick={() => {
                setSelected("search");
              }}
              style={{
                backgroundColor:
                  selected === "search" ? "#f0f0f0" : "transparent",
              }}
            >
              <FiSearch color="#00a0dc" size="30" />
              <div className="flex flex-col items-start gap-2">
                <Heading fontSize="2xl">Search</Heading>
                <Text fontSize="xl" color="gray.500">
                  Find the tasks you need in a second.
                </Text>
              </div>
            </div>
            <div
              className="flex gap-6 cursor-pointer p-2 rounded-md hover:bg-[#f0f0f0]"
              onClick={() => {
                setSelected("sort");
              }}
              style={{
                backgroundColor:
                  selected === "sort" ? "#f0f0f0" : "transparent",
              }}
            >
              <BsSortDown color="#00a0dc" size="30" />
              <div className="flex flex-col items-start gap-2">
                <Heading fontSize="2xl">Sorting</Heading>
                <Text fontSize="xl" color="gray.500">
                  Sort the tasks according to your priorities.
                </Text>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full gap-5">
            <div
              className="flex gap-6 cursor-pointer p-2 rounded-md hover:bg-[#21242a]"
              onClick={() => {
                setSelected("folder");
              }}
              style={{
                backgroundColor:
                  selected === "folder" ? "#21242a" : "transparent",
              }}
            >
              <AiFillFolder color="#00a0dc" size="30" />
              <div className="flex flex-col items-start gap-2">
                <Heading fontSize="2xl">
                  Folders, lists, tasks and check items
                </Heading>
                <Text fontSize="xl" color="gray.500">
                  Keep your to-dos organized in four different levels.
                </Text>
              </div>
            </div>
            <div
              className="flex gap-6 cursor-pointer p-2 rounded-md hover:bg-[#21242a]"
              onClick={() => {
                setSelected("tags");
              }}
              style={{
                backgroundColor:
                  selected === "tags" ? "#21242a" : "transparent",
              }}
            >
              <FaTags color="#00a0dc" size="30" />
              <div className="flex flex-col items-start gap-2">
                <Heading fontSize="2xl">Tags</Heading>
                <Text fontSize="xl" color="gray.500">
                  Create and add tags on your tasks to manage them flexibly
                </Text>
              </div>
            </div>
            <div
              className="flex gap-6 cursor-pointer p-2 rounded-md hover:bg-[#21242a]"
              onClick={() => {
                setSelected("search");
              }}
              style={{
                backgroundColor:
                  selected === "search" ? "#21242a" : "transparent",
              }}
            >
              <FiSearch color="#00a0dc" size="30" />
              <div className="flex flex-col items-start gap-2">
                <Heading fontSize="2xl">Search</Heading>
                <Text fontSize="xl" color="gray.500">
                  Find the tasks you need in a second.
                </Text>
              </div>
            </div>
            <div
              className="flex gap-6 cursor-pointer p-2 rounded-md hover:bg-[#21242a]"
              onClick={() => {
                setSelected("sort");
              }}
              style={{
                backgroundColor:
                  selected === "sort" ? "#21242a" : "transparent",
              }}
            >
              <BsSortDown color="#00a0dc" size="30" />
              <div className="flex flex-col items-start gap-2">
                <Heading fontSize="2xl">Sorting</Heading>
                <Text fontSize="xl" color="gray.500">
                  Sort the tasks according to your priorities.
                </Text>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturesComponent1;
