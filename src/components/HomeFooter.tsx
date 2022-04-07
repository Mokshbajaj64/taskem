import { Divider, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const HomeFooter = () => {
  return (
    <div className="flex justify-center items-start w-screen h-screen flex-col px-32">
      <Divider className="pt-[10%] lg:flex hidden" />
      <div className="flex h-full w-full justify-center items-center md:flex-row flex-col">
        <Heading className="absolute bottom-0 mb-2" fontSize="xl" as="h3">
          Made with 💜 by varunboi
        </Heading>
        <div className="hidden justify-center items-center md:w-[30%] w-[100%] h-full md:flex">
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
        <div className="flex justify-center items-center md:w-[70%] w-[100%] h-full">
          <div className="flex w-full h-full gap-14 justify-center items-center">
            <div className="flex flex-col gap-4">
              <Text color="gray.400" fontSize="lg" className="mb-3">
                Features
              </Text>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text fontSize="xl" className="cursor-pointer hover:underline">
                  How it works
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text fontSize="xl" className="cursor-pointer hover:underline">
                  For Teams
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text fontSize="xl" className="cursor-pointer hover:underline">
                  Pricing
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text fontSize="xl" className="cursor-pointer hover:underline">
                  Templates
                </Text>
              </motion.div>
            </div>
            <div className="flex flex-col gap-4">
              <Text color="gray.400" fontSize="lg" className="mb-3">
                Resources
              </Text>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text fontSize="xl" className="cursor-pointer hover:underline">
                  Download Apps
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text fontSize="xl" className="cursor-pointer hover:underline">
                  Help Center
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text fontSize="xl" className="cursor-pointer hover:underline">
                  Refer a friend
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text fontSize="xl" className="cursor-pointer hover:underline">
                  Productivity Methods
                </Text>
              </motion.div>
            </div>
            <div className="flex flex-col gap-4">
              <Text color="gray.400" fontSize="lg" className="mb-3">
                Company
              </Text>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text fontSize="xl" className="cursor-pointer hover:underline">
                  About Us
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text fontSize="xl" className="cursor-pointer hover:underline">
                  We Are Hiring!
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text fontSize="xl" className="cursor-pointer hover:underline">
                  Press
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text fontSize="xl" className="cursor-pointer hover:underline">
                  Twist
                </Text>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
