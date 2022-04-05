import React from "react";
import { Button, Heading, Text } from "@chakra-ui/react";

const HomeMoreStuff = () => {
  return (
    <div className="flex justify-center items-start w-screen h-screen">
      <div className="flex w-full justify-center items-center h-full">
        <div className="flex items-center flex-col w-[65%] justify-center h-full">
          <img
            src="https://todoist.com/_next/static/images/peace@2x_158f4453627629ae1dd3ec115a559630.webp"
            alt=""
            className="w-[60%] h-[70%]"
          />
        </div>
        <div className="flex flex-col w-[40%] gap-8">
          <Heading
            as="h1"
            fontSize="5xl"
            lineHeight="3.5rem"
            marginRight={"10"}
          >
            Make life meaningful with ShittyShit
          </Heading>
          <Button colorScheme="blue" width="30%">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeMoreStuff;
