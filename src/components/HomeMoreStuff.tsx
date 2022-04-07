import React from "react";
import { Button, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const HomeMoreStuff = () => {
  return (
    <div className="flex justify-center items-start w-screen h-screen">
      <div className="flex w-full justify-center items-center h-full md:flex-row flex-col">
        <motion.div
          className="flex items-center flex-col w-[100%] md:w-[65%] justify-center h-full"
          whileHover={{
            scale: 1.1,
          }}
        >
          <img
            src="/bg5.svg"
            alt=""
            className="md:w-[70%] md:h-[70%] w-[80%] h-[80%]"
          />
        </motion.div>
        <div className="flex flex-col w-[100%] md:w-[40%] gap-8 items-center md:items-start">
          <Heading
            as="h1"
            fontSize="5xl"
            lineHeight="3.5rem"
            className="md:mr-10 mr-5 md:ml-0 ml-5"
          >
            Make life meaningful with ShittyShit
          </Heading>
          <motion.div
            className="w-auto"
            whileHover={{
              scale: 1.1,
            }}
          >
            <Button colorScheme="blue" width="100%">
              Get started
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeMoreStuff;
