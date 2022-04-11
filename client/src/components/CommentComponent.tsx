import { Avatar, Text } from "@chakra-ui/react";
import React from "react";

const CommentComponent = () => {
  return (
    <div className="w-full items-center justify-between cursor-pointer">
      <div className="flex gap-4">
        <Avatar name="SHIT" />
        <div className="flex flex-col gap-1">
          <Text fontSize="md">Varun</Text>
          <Text fontSize="md" color="gray.500">
            Hey dude whatsdown hyd whatsup loll llolllolHey dude whatsdown hyd
            whatsup loll llolllolHey dude whatsdown hyd whatsup loll llolllolHey
            dude whatsdown hyd whatsup loll llolllolHey dude whatsdown hyd
            whatsup loll llolllol
          </Text>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
