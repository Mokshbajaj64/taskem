import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const HomeHero = () => {
  return (
    <div className="flex justify-center items-start w-screen h-screen pt-[80px] flex-col md:flex-row">
      <div className="flex w-[100%] md:w-[40%] justify-center h-full flex-col ml-5 gap-5 md:ml-16">
        <Heading as="h1" fontSize="5xl">
          Make your everyday a little less ordinary
        </Heading>
        <Text fontSize="xl" color="gray.500">
          ShittyShit is one the shittest shit you can see in the world and we
          are here to make it even worse.
        </Text>
        <div className="flex items-center gap-5">
          <Button colorScheme="blue" width={"25%"} rounded={"full"}>
            Get started
          </Button>
          <Button
            colorScheme="blue"
            width="25%"
            rounded={"full"}
            variant="outline"
          >
            Watch Demo
          </Button>
        </div>
      </div>
      <div className="flex w-[100%] md:w-[60%] justify-center items-center h-full">
        <img src="/bg3.svg" alt="" className="w-[90%]" />
      </div>
    </div>
  );
};

export default HomeHero;
