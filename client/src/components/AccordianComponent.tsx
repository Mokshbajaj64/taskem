import React, { useState } from "react";
import { Text, useColorMode, IconButton } from "@chakra-ui/react";
import { FcBiotech } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BsThreeDots } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

type Props = {
  isTag: boolean;
  name: string;
  color: string;
  id: string;
};

const AccordianComponent = (props: Props) => {
  const { projectId } = useParams();
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? (
    <motion.div
      className={
        projectId === props?.id
          ? "w-full bg-[#21242a] p-4 rounded-md flex items-center justify-between cursor-pointer"
          : "w-full hover:bg-[#21242a] p-4 rounded-md flex items-center justify-between cursor-pointer"
      }
      onClick={() => {
        props.isTag
          ? navigate(`/tag/${props?.id}`)
          : navigate(`/project/${props?.id}`);
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div className="flex items-center gap-4">
        <div className="bg-green-500 p-[0.4rem] rounded-full"></div>
        <Text fontSize="md">{props?.name}</Text>
      </div>
      <div className="flex items-center">
        {hover ? (
          <Menu>
            <MenuButton
              _hover={{
                backgroundColor: "#f0f0f0",
              }}
            >
              <IconButton
                aria-label="Options"
                icon={<BsThreeDots />}
                rounded="full"
                size="xs"
              />
            </MenuButton>
            <MenuList>
              <MenuItem
                className="flex items-center gap-3"
                // onClick={() => {
                //   editOnOpen();
                // }}
              >
                <AiOutlineEdit size="20" color="#9bdaf3" />
                <Text fontSize="md" color="#9bdaf3">
                  Edit Project
                </Text>
              </MenuItem>
              <MenuItem
                className="flex items-center gap-3"
                // onClick={() => {
                //   deleteOnOpen();
                // }}
              >
                <AiOutlineDelete size="20" color="#df3333" />
                <Text fontSize="md" color="#df3333">
                  Delete Project
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : null}
      </div>
    </motion.div>
  ) : (
    <motion.div
      className="w-full hover:bg-[#f0f0f0] p-4 rounded-md flex items-center justify-between cursor-pointer"
      onClick={() => {
        props.isTag
          ? navigate(`/tag/${props?.id}`)
          : navigate(`/project/${props?.id}`);
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
        <Text fontSize="md" color="gray.500">
          8
        </Text>
      </div>
    </motion.div>
  );
};

export default AccordianComponent;
