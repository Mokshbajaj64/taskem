import React from "react";
import { Text, useColorMode } from "@chakra-ui/react";
import { FcBiotech } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {
  isTag: boolean;
  name: string
  color: string
  id: string
};

const AccordianComponent = (props: Props) => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? (
    <motion.div
      className="w-full hover:bg-[#21242a] p-4 rounded-md flex items-center justify-between cursor-pointer"
      onClick={() => {
        props.isTag ? navigate("/tag/eatshit") : navigate(`/project/${props?.id}`);
      }}
      whileHover={{
        scale: 1.06,
      }}
    >
      <div className="flex items-center gap-4">
        <div className="bg-green-500 p-[0.4rem] rounded-full"></div>
        <Text fontSize="md">{props?.name}</Text>
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
        props.isTag ? navigate("/tag/eatshit") : navigate(`/project/${props?.id}`);
      }}
      whileHover={{
        scale: 1.06,
      }}
    >
      <div className="flex items-center gap-2">
        <FcBiotech size="20" />
        <Text fontSize="md">{props?.name}</Text>
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
