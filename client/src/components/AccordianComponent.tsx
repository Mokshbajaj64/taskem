import React from "react";
import { Text } from "@chakra-ui/react";
import { FcBiotech } from "react-icons/fc";

const AccordianComponent = () => {
  return (
    <div className="w-full hover:bg-[#21242a] p-4 rounded-md flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-2">
        <FcBiotech size="20" />
        <Text fontSize="md">Lmao this</Text>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-green-500 p-1 rounded-full"></div>
        <Text fontSize="md" color="gray.500">
          8
        </Text>
      </div>
    </div>
  );
};

export default AccordianComponent;
