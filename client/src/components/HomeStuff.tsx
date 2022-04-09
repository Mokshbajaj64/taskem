import React from "react";
import { Heading, Text, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

const HomeStuff = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="flex justify-center items-start w-screen h-screen">
      <div className="flex w-full justify-center items-center h-full md:flex-row flex-col">
        <div className="flex items-start flex-col w-[100%] md:w-[35%] justify-center md:ml-32 ml-8">
          <Heading as="h1" fontSize="5xl" lineHeight="3.5rem">
            A task manager you can trust your life
          </Heading>
          <Text
            fontSize="lg"
            marginTop="8"
            color="gray.500"
            className="mr-10 md:mr-0"
          >
            Join millions of people to capture ideas, organize life, and do
            something creative everyday.
          </Text>
          <Text
            fontSize="lg"
            marginTop="8"
            color="gray.500"
            className="mr-10 md:mr-0"
          >
            Getting things done has never been this easy.
          </Text>
          <Text
            fontSize="lg"
            marginTop="8"
            color="blue.500"
            className="hover:underline cursor-pointer mr-10 md:mr-0"
            onClick={() => {
              onOpen();
            }}
          >
            Contact us if you need to know anything about us or you if have any
            query about our product
          </Text>
        </div>
        <motion.div
          className="flex items-center flex-col w-[100%] md:w-[65%] justify-center h-full"
          whileHover={{
            scale: 1.1,
          }}
        >
          <img src="/bg4.svg" alt="" className="w-[70%] h-[70%]" />
        </motion.div>
      </div>
      <ContactModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default HomeStuff;
