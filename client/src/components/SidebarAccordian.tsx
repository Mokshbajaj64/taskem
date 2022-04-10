import React, { useState } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";

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
            <AccordionIcon fontSize="2xl" />
            <Text fontSize="lg">{props.title}</Text>
          </div>
          {hover ? (
            <IoAdd
              size="20"
              onClick={() => {
                console.log("Clicked");
              }}
            />
          ) : (
            ""
          )}
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
  );
};

export default SidebarAccordian;
