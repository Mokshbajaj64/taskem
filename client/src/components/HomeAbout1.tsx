import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const HomeAbout1 = () => {
  return (
    <div className="flex justify-center items-start w-screen h-screen">
      <div className="flex w-[95%] justify-center items-center h-full gap-10 md:flex-row flex-col">
        <div className="flex items-center flex-col w-[100%] md:w-[50%] justify-center h-full gap-6 md:ml-0 ml-8">
          <Heading as="h2" fontSize="5xl">
            Get reminded anytime, anywhere
          </Heading>
          <Text color="gray.500" fontSize="xl">
            Set a reminder to ease your mind off worrying about missing
            deadlines from now on.
          </Text>
        </div>
        <motion.div
          className="flex items-start flex-col w-[100%] md:w-[50%] justify-center h-full"
          whileHover={{
            scale: 1.1,
          }}
        >
          <img src="/bg3.svg" alt="" className="w-[100%] h-[100%]" />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeAbout1;
