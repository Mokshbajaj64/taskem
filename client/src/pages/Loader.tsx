import React from "react";
import { Heading } from "@chakra-ui/react";
import { FcTodoList } from "react-icons/fc";
import { Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-8">
      <div className="flex gap-4 items-center">
        <FcTodoList size={32} />
        <Heading
          as="h6"
          fontSize="4xl"
          className="md:flex hidden"
          fontFamily={"Inconsolata"}
        >
          Taskem
        </Heading>
      </div>
      <Spinner
        size="xl"
        emptyColor="gray.200"
        color="blue.500"
        thickness="3px"
        speed="0.65s"
      />
    </div>
  );
};

export default Loader;
