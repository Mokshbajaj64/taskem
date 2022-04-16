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
  const tags = useSelector((data: any) => data?.tag?.tagData);
  return (
    <AccordionItem
      border="none"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="p-2"
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
              size="xs"
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
      <AccordionPanel>
        {props?.isTag === true
          ? tags?.map((tag: any, index: React.Key) => (
              <AccordianComponent
                isTag={props.isTag}
                key={index}
                name={tag?.name}
                color={tag?.color}
                id={tag?._id}
              />
            ))
          : projects?.map((project: any, index: React.Key) => (
              <AccordianComponent
                isTag={props.isTag}
                key={index}
                name={project?.name}
                color={project?.color}
                id={project?._id}
              />
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
