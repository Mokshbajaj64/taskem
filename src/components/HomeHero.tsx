import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const HomeHero = () => {
  return (
    <div className="flex justify-center items-start w-screen h-screen pt-[80px]">
      <div className="flex w-[40%] justify-center h-full flex-col ml-16 gap-5">
        <Heading as="h1" fontSize="5xl">
          Let's make eveyday a little less ordinary
        </Heading>
        <Text fontSize="xl" color="gray.500">
          ShittyShit is one the shittest shit you can see in the world and we
          are here to make it even worse.
        </Text>
        <Button colorScheme="blue" width="20%">
          Get started
        </Button>
      </div>
      <div className="flex w-[60%] justify-center items-center h-full">
        <img src="/bg3.svg" alt="" />
      </div>
    </div>
  );
};

export default HomeHero;
