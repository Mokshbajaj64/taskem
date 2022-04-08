import {
  Heading,
  Button,
  IconButton,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

const HomeNavbar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div
      className="w-full p-5 flex items-center justify-between fixed h-[80px]"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        backgroundColor: colorMode === "light" ? "#ffffff" : "#1a202c",
        zIndex: "100",
      }}
    >
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-3">
          <BsFillEmojiHeartEyesFill size={25} />
          <Heading as="h6" fontSize="2xl" className="md:flex hidden">
            ShittyShit
          </Heading>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          <Heading
            as="h6"
            fontSize="lg"
            className="cursor-pointer text-gray-400"
          >
            Tasks
          </Heading>
          <Heading
            as="h6"
            fontSize="lg"
            className="cursor-pointer text-gray-400"
          >
            About Us
          </Heading>
          <motion.div
            onClick={() => {
              onOpen();
            }}
            whileHover={{
              scale: 1.04,
            }}
          >
            <Heading
              as="h6"
              fontSize="lg"
              className="cursor-pointer text-gray-400"
            >
              Contact Us
            </Heading>
          </motion.div>
        </div>
      </div>
      <div className="flex items-center md:gap-5 gap-2">
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <IconButton
            aria-label="Dark mode"
            icon={colorMode === "light" ? <FaMoon /> : <BsSunFill />}
            onClick={() => {
              toggleColorMode();
            }}
            className="mr-2 md:mr-8 ml-3 md:ml-0"
          />
        </motion.div>
        <motion.div
          animate={{
            x: [0, -10, 0, 10, 0],
          }}
          whileHover={{
            scale: 1.1,
          }}
        >
          <Button
            colorScheme="linkedin"
            variant="outline"
            rounded={"full"}
            px={"10"}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
        </motion.div>
        <motion.div
          animate={{
            x: [0, -10, 0, 10, 0],
          }}
          whileHover={{
            scale: 1.1,
          }}
        >
          <Button
            colorScheme="linkedin"
            variant="solid"
            rounded={"full"}
            px={"10"}
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </Button>
        </motion.div>
      </div>
      <ContactModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default HomeNavbar;