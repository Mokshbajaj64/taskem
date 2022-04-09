import React from "react";
import { Button, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="flex justify-center items-start w-screen h-screen pt-[80px] flex-col md:flex-row">
      <div className="flex w-[100%] md:w-[40%] justify-center h-full flex-col ml-5 gap-5 md:ml-16">
        <Heading as="h1" fontSize="5xl">
          We do what we love, for the better
        </Heading>
        <Text fontSize="xl" color="gray.500" className="mr-10 md:mr-0">
          ShittyShit is a task manager that help you stay organized while
          boosting your creativity at the same time.Our main goal is to help
          everyone boost productivity and make their life a little less ordinary
        </Text>
      </div>
      <motion.div
        className="flex w-[100%] md:w-[60%] justify-center items-center h-full"
        whileHover={{
          scale: 1.1,
        }}
      >
        <img src="/bg8.svg" alt="" className="w-[90%]" />
      </motion.div>
    </div>
  );
};

export default AboutHero;
