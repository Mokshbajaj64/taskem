import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const HomeStuff = () => {
  return (
    <div className="flex justify-center items-start w-screen h-screen">
      <div className="flex w-full justify-center items-center h-full md:flex-row flex-col">
        <div className="flex items-center flex-col w-[100%] md:w-[35%] justify-center md:ml-32 ml-8">
          <Heading as="h1" fontSize="5xl" lineHeight="3.5rem">
            A shit manager you can trust your life
          </Heading>
          <Text fontSize="lg" marginTop="8" color="gray.500">
            In the 15 years and 67 days that we’ve been building Todoist, we’ve
            never considered selling out or becoming acquired
          </Text>
          <Text fontSize="lg" marginTop="8" color="gray.500">
            Our team is committed to staying independent and earning your trust
            for as long as you need our apps
          </Text>
          <Text
            fontSize="lg"
            marginTop="8"
            color="blue.500"
            className="hover:underline cursor-pointer"
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
    </div>
  );
};

export default HomeStuff;
