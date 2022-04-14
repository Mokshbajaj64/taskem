import { Button, IconButton, Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaTags } from "react-icons/fa";
import { BsFlagFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { updateTodayTask } from "../actions/todaytask";

type Props = {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description: string;
  id: string;
};

const EditComponent = (props: Props) => {
  const dispatch = useDispatch();
  const [updateTaskData, setUpdateTaskData] = useState({
    title: props?.title,
    description: props?.description,
  });
  const token = JSON.parse(localStorage?.getItem("token") as string);
  const updateTaskBoi = () => {
    dispatch(updateTodayTask(updateTaskData, token, props?.id));
    props?.setIsEdit(false)
  };
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
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUpdateTaskData({
              ...updateTaskData,
              title: event?.target?.value,
            });
          }}
          value={updateTaskData?.title}
        />
        <Textarea
          placeholder="Title description"
          variant="unstyled"
          resize="none"
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setUpdateTaskData({
              ...updateTaskData,
              description: event?.target?.value,
            });
          }}
          value={updateTaskData?.description}
        />
        <div className="flex items-center gap-4">
          <IconButton icon={<FaTags />} aria-label="Tags" />
          <IconButton icon={<BsFlagFill />} aria-label="Priority" />
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        {updateTaskData?.title?.trim()?.length >= 1 ? (
          <Button colorScheme="blue" onClick={updateTaskBoi}>
            Update Task
          </Button>
        ) : (
          <Button colorScheme="blue" isDisabled={true}>
            Update Task
          </Button>
        )}
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
