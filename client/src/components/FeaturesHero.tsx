import React from "react";
import { Button, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const FeaturesHero = () => {
  return (
    <div className="flex justify-center items-start w-screen h-screen pt-[80px] flex-col md:flex-row">
      <div className="flex w-[100%] md:w-[40%] justify-center h-full flex-col ml-5 gap-5 md:ml-16">
        <Heading as="h1" fontSize="5xl">
          Organize all aspects of your life
        </Heading>
        <Text fontSize="xl" color="gray.500" className="mr-10 md:mr-0">
          Get to-dos out of your mind, and get them done in less time.
        </Text>
      </div>
      <motion.div
        className="flex w-[100%] md:w-[60%] justify-center items-center h-full"
        whileHover={{
          scale: 1.1,
        }}
      >
        <img src="/bg7.svg" alt="" className="w-[70%]" />
      </motion.div>
    </div>
  );
};

export default FeaturesHero;
