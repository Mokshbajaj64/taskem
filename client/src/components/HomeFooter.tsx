import { Divider, Text, Heading, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ContactModal from "./ContactModal";
import { FcTodoList } from "react-icons/fc";

const HomeFooter = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="flex justify-center items-start w-screen h-screen flex-col px-32">
      <Divider className="pt-[10%] lg:flex hidden" />
      <div className="flex h-full w-full justify-center items-center md:flex-row flex-col">
        <Heading className="absolute bottom-0 mb-2" fontSize="xl" as="h3">
          Made with 💜 by varunboi
        </Heading>
        <div className="hidden justify-center items-center md:w-[30%] w-[100%] h-full md:flex">
          <div className="flex flex-col gap-7">
            <FcTodoList size="30" className = "cursor-pointer"/>
            <Text color="gray.500" fontSize="xl">
              Join millions of people who organize work and life with Taskem
            </Text>
            <AiFillGithub
              size="34"
              className="text-gray-400 hover:text-black mt-6 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-center items-center md:w-[70%] w-[100%] h-full">
          <div className="flex w-full h-full gap-14 justify-center items-center mr-20 ml-20 md:mr-0 md:ml-0">
            <div className="flex flex-col gap-4">
              <Text color="gray.400" fontSize="lg" className="mb-3">
                Features
              </Text>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text
                  fontSize="xl"
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    navigate("/features");
                  }}
                >
                  How it works
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text
                  fontSize="xl"
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    navigate("/features");
                  }}
                >
                  Get started
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text
                  fontSize="xl"
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    navigate("/features");
                  }}
                >
                  Pricing
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text
                  fontSize="xl"
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    navigate("/features");
                  }}
                >
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
                <Text
                  fontSize="xl"
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    window.location.href = "https://youtu.be/dQw4w9WgXcQ";
                  }}
                >
                  Download Apps
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text
                  fontSize="xl"
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    window.location.href = "https://youtu.be/dQw4w9WgXcQ";
                  }}
                >
                  Help Center
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text
                  fontSize="xl"
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    window.location.href = "https://youtu.be/dQw4w9WgXcQ";
                  }}
                >
                  Refer a friend
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text
                  fontSize="xl"
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    window.location.href = "https://youtu.be/dQw4w9WgXcQ";
                  }}
                >
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
                <Text
                  fontSize="xl"
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About Us
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text
                  fontSize="xl"
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    window.location.href = "https://youtu.be/dQw4w9WgXcQ";
                  }}
                >
                  We Are Hiring!
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text
                  fontSize="xl"
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    onOpen();
                  }}
                >
                  Contact Us
                </Text>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
              >
                <Text
                  fontSize="xl"
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    window.location.href = "https://youtu.be/dQw4w9WgXcQ";
                  }}
                >
                  Gift
                </Text>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default HomeFooter;
