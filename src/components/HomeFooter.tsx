import { Divider, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const HomeFooter = () => {
  return (
    <div className="flex justify-center items-start w-screen h-screen flex-col px-32">
      <Divider className="pt-[10%]" />
      <div className="flex h-full w-full justify-center items-center">
        <Heading className="absolute bottom-0 mb-2" fontSize="xl" as="h3">
          Made with 💜 by varunboi
        </Heading>
        <div className="flex justify-center items-center w-[30%] h-full">
          <div className="flex flex-col gap-7">
            <BsEmojiHeartEyesFill size="30" />
            <Text color="gray.500" fontSize="xl">
              Join millions of people who organize work and life with ShittyShit
            </Text>
            <AiFillGithub
              size="34"
              className="text-gray-400 hover:text-black mt-6 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-[70%] h-full">
          <div className="flex w-full h-full gap-14 justify-center items-center">
            <div className="flex flex-col gap-4">
              <Text color="gray.400" fontSize="lg" className="mb-3">
                Features
              </Text>
              <Text fontSize="xl" className="cursor-pointer hover:underline">
                How it works
              </Text>
              <Text fontSize="xl" className="cursor-pointer hover:underline">
                For Teams
              </Text>
              <Text fontSize="xl" className="cursor-pointer hover:underline">
                Pricing
              </Text>
              <Text fontSize="xl" className="cursor-pointer hover:underline">
                Templates
              </Text>
            </div>
            <div className="flex flex-col gap-4">
              <Text color="gray.400" fontSize="lg" className="mb-3">
                Resources
              </Text>
              <Text fontSize="xl" className="cursor-pointer hover:underline">
                Download Apps
              </Text>
              <Text fontSize="xl" className="cursor-pointer hover:underline">
                Help Center
              </Text>
              <Text fontSize="xl" className="cursor-pointer hover:underline">
                Refer a friend
              </Text>
              <Text fontSize="xl" className="cursor-pointer hover:underline">
                Productivity Methods
              </Text>
            </div>
            <div className="flex flex-col gap-4">
              <Text color="gray.400" fontSize="lg" className="mb-3">
                Company
              </Text>
              <Text fontSize="xl" className="cursor-pointer hover:underline">
                About Us
              </Text>
              <Text fontSize="xl" className="cursor-pointer hover:underline">
                We Are Hiring!
              </Text>
              <Text fontSize="xl" className="cursor-pointer hover:underline">
                Press
              </Text>
              <Text fontSize="xl" className="cursor-pointer hover:underline">
                Twist
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
