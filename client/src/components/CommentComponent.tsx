import { Avatar, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  username: string
  comment: string
}

const CommentComponent = (props:Props) => {
  return (
    <div className="w-full items-center justify-between">
      <div className="flex gap-4">
        <Avatar name="SHIT" />
        <div className="flex flex-col gap-1">
          <Text fontSize="md">{props?.username}</Text>
          <Text fontSize="md" color="gray.500">
            {props?.comment}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
