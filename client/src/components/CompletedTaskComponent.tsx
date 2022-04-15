import React, { useState } from "react";
import { Checkbox, Text, IconButton, Divider } from "@chakra-ui/react";
import {motion} from "framer-motion" 
import {useDispatch} from "react-redux"

type Props = {
  title?: string
  description?: string
}

const CompletedTaskComponent = (props: Props) => {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage?.getItem("token") as string);
  return (
    <motion.div
      className="flex flex-col w-full"
      whileHover={{
        scale: 1.04,
      }}
    >
        <div
          className="flex justify-between cursor-pointer w-full"
        >
          <div className="flex gap-3 items-start mb-4">
            <Checkbox
              className="mt-1"
              defaultChecked
              colorScheme = "gray"
            />
            <div className="flex flex-col gap-1">
              <Text fontSize="md" color="gray.500">{props?.title}</Text>
              <Text fontSize="md" color="gray.500">
                  {props?.description}
              </Text>
            </div>
          </div>
        </div>
      <Divider />
    </motion.div>
  );
};

export default CompletedTaskComponent;