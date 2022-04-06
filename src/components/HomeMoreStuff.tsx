import React from "react";
import { Button, Heading, Text } from "@chakra-ui/react";

const HomeMoreStuff = () => {
  return (
    <div className="flex justify-center items-start w-screen h-screen">
      <div className="flex w-full justify-center items-center h-full md:flex-row flex-col">
        <div className="flex items-center flex-col w-[100%] md:w-[65%] justify-center h-full">
          <img
            src="https://todoist.com/_next/static/images/peace@2x_158f4453627629ae1dd3ec115a559630.webp"
            alt=""
            className="md:w-[70%] md:h-[70%] w-[80%] h-[80%]"
          />
        </div>
        <div className="flex flex-col w-[100%] md:w-[40%] gap-8 items-center md:items-start">
          <Heading
            as="h1"
            fontSize="5xl"
            lineHeight="3.5rem"
            className="md:mr-10 mr-0 md:ml-0 ml-5"
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
