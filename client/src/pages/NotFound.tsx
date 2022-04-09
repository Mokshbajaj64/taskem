import React from "react";
import { Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="flex justify-center items-start w-screen h-screen"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <div className="flex w-[80%] justify-center items-center h-full gap-6">
        <div className="flex flex-col gap-6 items-start w-[50%]">
          <Heading as="h2" fontSize="5xl">
            404. Looks like this page took a hike
          </Heading>
          <div className="flex flex-col gap-1">
            <Text fontSize="lg" color="gray.400">
              We wish well on its journey
            </Text>
            <Text fontSize="lg" color="gray.400">
              Now let's get you back to yours
            </Text>
          </div>
          <Button
            colorScheme="blue"
            rounded="full"
            onClick={() => {
              navigate("/");
            }}
          >
            Go back home ➞
          </Button>
        </div>
        <div className="flex justify-center items-start w-[50%]">
          <img src="/404.svg" className="w-[100%] h-[100%]" />
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
