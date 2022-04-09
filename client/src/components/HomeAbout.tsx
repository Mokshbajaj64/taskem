import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const HomeAbout = () => {
  return (
    <div className="flex justify-center items-start w-screen h-screen">
      <div className="flex w-[95%] justify-center items-center h-full gap-14">
        <motion.div
          className="flex items-center flex-col w-[100%] md:w-[50%] justify-center h-full"
          whileHover={{
            scale: 1.1,
          }}
        >
          <img src="/bg3.svg" alt="" className="w-[100%] h-[100%]" />
        </motion.div>
        <div className="flex items-start flex-col w-[100%] md:w-[50%] justify-center h-full gap-6">
          <Heading as="h2" fontSize="5xl">
            Organize everything in life
          </Heading>
          <Text color="gray.500" fontSize="xl">
            Whether there is a work-related task or a personal goal, TickTick is
            here to help you manage all your to-dos.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
