import React from "react";
import { Text, useColorMode } from "@chakra-ui/react";
import { FcBiotech } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AccordianComponent = () => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? (
    <motion.div
      className="w-full hover:bg-[#21242a] p-4 rounded-md flex items-center justify-between cursor-pointer"
      onClick={() => {
        navigate("/project/eatshit");
      }}
      whileHover={{
        scale: 1.06,
      }}
    >
      <div className="flex items-center gap-4">
        <div className="bg-green-500 p-[0.4rem] rounded-full"></div>
        <Text fontSize="md">Lmao this</Text>
      </div>
      <div className="flex items-center">
        <Text fontSize="md" color="gray.500">
          8
        </Text>
      </div>
    </motion.div>
  ) : (
    <motion.div
      className="w-full hover:bg-[#f0f0f0] p-4 rounded-md flex items-center justify-between cursor-pointer"
      onClick={() => {
        navigate("/project/eatshit");
      }}
      whileHover={{
        scale: 1.06,
      }}
    >
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
    </motion.div>
  );
};

export default AccordianComponent;
