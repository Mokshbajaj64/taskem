import { Button, IconButton, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { FaTags } from "react-icons/fa";
import { BsFlagFill } from "react-icons/bs";

type Props = {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditComponent = (props: Props) => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div
        className="flex w-full flex-col rounded-2xl p-4 gap-2"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          border: "1px solid #e6e6e6",
        }}
      >
        <Input
          variant="unstyled"
          placeholder="Task title"
          defaultValue="Dumb"
        />
        <Textarea
          placeholder="Title description"
          variant="unstyled"
          resize="none"
          defaultValue="I am dumb help"
        />
        <div className="flex items-center gap-4">
          <IconButton icon={<FaTags />} aria-label="Tags" />
          <IconButton icon={<BsFlagFill />} aria-label="Priority" />
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <Button colorScheme="blue">Update Task</Button>
        <Button
          variant="outline"
          onClick={() => {
            props.setIsEdit(false);
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EditComponent;
