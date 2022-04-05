import React from "react";
import { Heading, Text } from "@chakra-ui/react";

const HomeStuff = () => {
  return (
    <div className="flex justify-center items-start w-screen h-screen">
      <div className="flex w-full justify-center items-center h-full">
        <div className="flex items-center flex-col w-[35%] justify-center ml-32">
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
        <div className="flex items-center flex-col w-[65%] justify-center h-full">
          <img src="/bg4.svg" alt="" className="w-[70%] h-[70%]" />
        </div>
      </div>
    </div>
  );
};

export default HomeStuff;
