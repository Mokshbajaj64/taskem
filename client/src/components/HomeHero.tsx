import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-start w-screen h-screen pt-[80px] flex-col md:flex-row">
      <div className="flex w-[100%] md:w-[40%] justify-center h-full flex-col ml-5 gap-5 md:ml-16">
        <Heading as="h1" fontSize="5xl">
          Make your everyday a little less ordinary
        </Heading>
        <Text fontSize="xl" color="gray.500" className="mr-10 md:mr-0">
          Taskem is a task manager that help you stay organized while
          boosting your creativity at the same time.
        </Text>
        <div className="flex items-center gap-5">
          <motion.div
            className="w-auto"
            whileHover={{
              scale: 1.1,
            }}
          >
            <Button
              colorScheme="blue"
              width={"100%"}
              rounded={"full"}
              onClick={() => {
                navigate("/login");
              }}
            >
              Get started
            </Button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <Button
              colorScheme="blue"
              width="100%"
              rounded={"full"}
              variant="outline"
            >
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex w-[100%] md:w-[60%] justify-center items-center h-full"
        whileHover={{
          scale: 1.1,
        }}
      >
        <img src="/bg3.svg" alt="" className="w-[90%]" />
      </motion.div>
    </div>
  );
};

export default HomeHero;
