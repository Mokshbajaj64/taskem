import React, { useState } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";
import AccordianComponent from "./AccordianComponent";

type Props = {
  title: string;
};

const SidebarAccordian = (props: Props) => {
  const [hover, setHover] = useState(false);
  return (
    <AccordionItem
      border="none"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <h2>
        <AccordionButton
          display="flex"
          className="items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <AccordionIcon fontSize="2xl" color="gray.400" />
            <Text fontSize="lg" color="gray.400">
              {props.title}
            </Text>
          </div>
          {hover ? <IoAdd size="20" /> : ""}
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <AccordianComponent />
        <AccordianComponent />
        <AccordianComponent />
      </AccordionPanel>
    </AccordionItem>
  );
};

export default SidebarAccordian;
