import React, { useState } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";
import AccordianComponent from "./AccordianComponent";
import CreateProjectModal from "./CreateProjectModal";
import { useSelector } from "react-redux";

type Props = {
  title: string;
  isTag: boolean;
};

const SidebarAccordian = (props: Props) => {
  const [hover, setHover] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const projects = useSelector((data: any) => data?.project?.projectData);
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
          {hover ? (
            <IconButton
              icon={<IoAdd />}
              aria-label="Add Project"
              size="sm"
              rounded={"full"}
              onClick={() => {
                onOpen();
              }}
            />
          ) : (
            ""
          )}
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {projects?.map((project: any, index: React.Key) => (
          <AccordianComponent isTag={props.isTag} key={index} />
        ))}
      </AccordionPanel>
      <CreateProjectModal
        isOpen={isOpen}
        onClose={onClose}
        isTag={props.isTag}
      />
    </AccordionItem>
  );
};

export default SidebarAccordian;
