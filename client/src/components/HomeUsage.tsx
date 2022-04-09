import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const HomeUsage = () => {
  return (
    <div className="flex justify-center items-start w-screen h-screen">
      <div className="flex w-full justify-center items-center h-full flex-col">
        <Tabs width="100%" variant="enclosed-colored" isFitted>
          <TabPanels>
            <TabPanel>
              <div className="flex items-center w-full gap-24 justify-center mb-10">
                <div
                  className="flex flex-col p-4 w-[100%] md:w-[40%]"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                >
                  <Heading fontSize="4xl">“</Heading>
                  <Heading fontSize="lg">
                    Personally the reason I like ShittyShit is mainly the
                    simplicity. It's minimal and clean. ShittyShit is packed
                    with features but only the ones that are absolutely
                    necessary.
                  </Heading>
                  <Text fontSize="md" color="gray.500" className="mt-6">
                    Tim Russica
                  </Text>
                  <div className="flex items-center justify-between mt-2">
                    <Text fontSize="md" color="gray.500">
                      Famous Youtuber
                    </Text>
                    <Text
                      fontSize="md"
                      color="blue.500"
                      className="hover:underline cursor-pointer"
                    >
                      Read More
                    </Text>
                  </div>
                </div>
                <motion.img
                  src="/tim.jpeg"
                  alt=""
                  className="w-[20%] h-[20%] rounded-xl"
                  whileHover={{
                    scale: 1.1,
                  }}
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex items-center w-full gap-24 justify-center mb-10">
                <div
                  className="flex flex-col p-4 w-[100%] md:w-[40%]"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                >
                  <Heading fontSize="4xl">“</Heading>
                  <Heading fontSize="lg">
                    ShittyShit is the most functional solution at the moment,
                    which can be used at home and in business.
                  </Heading>
                  <Text fontSize="md" color="gray.500" className="mt-6">
                    Ben awad
                  </Text>
                  <div className="flex items-center justify-between mt-2">
                    <Text fontSize="md" color="gray.500">
                      Youtuber and noice developer
                    </Text>
                    <Text
                      fontSize="md"
                      color="blue.500"
                      className="hover:underline cursor-pointer"
                    >
                      Read More
                    </Text>
                  </div>
                </div>
                <motion.img
                  src="/benawad.jpeg"
                  alt=""
                  className="w-[20%] h-[20%] rounded-xl"
                  whileHover={{
                    scale: 1.1,
                  }}
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex items-center w-full gap-24 justify-center mb-10">
                <div
                  className="flex flex-col p-4 w-[100%] md:w-[40%]"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                >
                  <Heading fontSize="4xl">“</Heading>
                  <Heading fontSize="lg">
                    As an ex google, ex facebook, ex enterpreneur, millionaire
                    ShittyShit helped me alot thanks :)
                  </Heading>
                  <Text fontSize="md" color="gray.500" className="mt-6">
                    Techlead
                  </Text>
                  <div className="flex items-center justify-between mt-2">
                    <Text fontSize="md" color="gray.500">
                      Ex google, Ex facebook, Ex enterpreneur, Millionaire
                    </Text>
                    <Text
                      fontSize="md"
                      color="blue.500"
                      className="hover:underline cursor-pointer"
                    >
                      Read More
                    </Text>
                  </div>
                </div>
                <motion.img
                  src="/techlead.jpeg"
                  alt=""
                  className="w-[20%] h-[20%] rounded-xl"
                  whileHover={{
                    scale: 1.1,
                  }}
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex items-center w-full gap-24 justify-center mb-10">
                <div
                  className="flex flex-col p-4 w-[100%] md:w-[40%]"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                >
                  <Heading fontSize="4xl">“</Heading>
                  <Heading fontSize="lg">
                    An all-in-one productivity app that has all the features you
                    need for task management!
                  </Heading>
                  <Text fontSize="md" color="gray.500" className="mt-6">
                    Avob
                  </Text>
                  <div className="flex items-center justify-between mt-2">
                    <Text fontSize="md" color="gray.500">
                      Twt discord mod
                    </Text>
                    <Text
                      fontSize="md"
                      color="blue.500"
                      className="hover:underline cursor-pointer"
                    >
                      Read More
                    </Text>
                  </div>
                </div>
                <motion.img
                  src="/avob.png"
                  alt=""
                  className="w-[20%] h-[20%] rounded-xl"
                  whileHover={{
                    scale: 1.1,
                  }}
                />
              </div>
            </TabPanel>
          </TabPanels>
          <TabList
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflowX="auto"
            overflowY="hidden"
            className="md:ml-[24.2%] md:mr-[24.2%] ml-0 mr-0"
          >
            <Tab>Youtubers</Tab>
            <Tab>Developers</Tab>
            <Tab>Legends</Tab>
            <Tab>Discord Mods</Tab>
          </TabList>
        </Tabs>
      </div>
    </div>
  );
};

export default HomeUsage;
