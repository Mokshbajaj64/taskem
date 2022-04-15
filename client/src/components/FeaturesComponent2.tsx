import React, { useState } from "react";
import { Button, Heading, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiMusic } from "react-icons/fi";
import { RiTimerFlashFill } from "react-icons/ri";

const FeaturesComponent2 = () => {
  const { colorMode } = useColorMode();
  const [selected, setSelected] = useState("timer");
  return (
    <div className="flex justify-center items-start w-screen h-screen flex-col md:flex-row">
      <div className="flex w-[100%] md:w-[40%] justify-center h-full flex-col gap-5 md:ml-16 ml-0 md:mt-0 mt-20">
        <Heading as="h1" fontSize="5xl" className="mb-4">
          Focus on your goals
        </Heading>
        {colorMode === "light" ? (
          <div className="flex flex-col w-full gap-5">
            <div
              className="flex gap-6 cursor-pointer p-2 rounded-md hover:bg-[#f0f0f0]"
              onClick={() => {
                setSelected("timer");
              }}
              style={{
                backgroundColor: selected === "timer" ? "#f0f0f0" : "",
              }}
            >
              <RiTimerFlashFill color="#00a0dc" size="30" />
              <div className="flex flex-col items-start gap-2">
                <Heading fontSize="2xl">Pomo Timer</Heading>
                <Text fontSize="xl" color="gray.500">
                  Practice the Pomodoro Technique in TickTick
                </Text>
              </div>
            </div>
            <div
              className="flex gap-6 cursor-pointer p-2 rounded-md hover:bg-[#f0f0f0]"
              onClick={() => {
                setSelected("music");
              }}
              style={{
                backgroundColor: selected === "music" ? "#f0f0f0" : "",
              }}
            >
              <FiMusic color="#00a0dc" size="30" />
              <div className="flex flex-col items-start gap-2">
                <Heading fontSize="2xl">White noises</Heading>
                <Text fontSize="xl" color="gray.500">
                  Play a white noise in the background while using the Pomo
                  Timer
                </Text>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full gap-5">
            <div
              className="flex gap-6 cursor-pointer p-2 rounded-md hover:bg-[#21242a]"
              onClick={() => {
                setSelected("timer");
              }}
              style={{
                backgroundColor: selected === "timer" ? "#21242a" : "",
              }}
            >
              <RiTimerFlashFill color="#00a0dc" size="30" />
              <div className="flex flex-col items-start gap-2">
                <Heading fontSize="2xl">Pomo Timer</Heading>
                <Text fontSize="xl" color="gray.500">
                  Practice the Pomodoro Technique in Taskem
                </Text>
              </div>
            </div>
            <div
              className="flex gap-6 cursor-pointer p-2 rounded-md hover:bg-[#21242a]"
              onClick={() => {
                setSelected("music");
              }}
              style={{
                backgroundColor: selected === "music" ? "#21242a" : "",
              }}
            >
              <FiMusic color="#00a0dc" size="30" />
              <div className="flex flex-col items-start gap-2">
                <Heading fontSize="2xl">White noise</Heading>
                <Text fontSize="xl" color="gray.500">
                  Play a white noise in the background while using the Pomo
                  Timer
                </Text>
              </div>
            </div>
          </div>
        )}
      </div>
      <motion.div
        className="flex w-[100%] md:w-[60%] justify-center items-center h-full"
        whileHover={{
          scale: 1.1,
        }}
      >
        {selected === "timer" ? (
          <img src="/bg7.svg" alt="" className="w-[70%]" />
        ) : (
          <img src="/bg3.svg" alt="" className="w-[70%]" />
        )}
      </motion.div>
    </div>
  );
};

export default FeaturesComponent2;
