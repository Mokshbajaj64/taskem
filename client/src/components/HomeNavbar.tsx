import {
  Heading,
  Button,
  IconButton,
  useColorMode,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";
import { FcTodoList } from "react-icons/fc";

const HomeNavbar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div
      className="w-full p-5 flex items-center justify-between fixed h-[80px] top-0"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        backgroundColor: colorMode === "light" ? "#ffffff" : "#1a202c",
        zIndex: "100",
      }}
    >
      <div className="flex items-center gap-12">
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
          whileHover={{
            scale: 1.1,
          }}
        >
          <FcTodoList size={28} />
          <Heading
            as="h6"
            fontSize="3xl"
            className="md:flex hidden"
            fontFamily={"Inconsolata"}
          >
            Taskem
          </Heading>
        </motion.div>
        <div className="hidden items-center gap-6 md:flex">
          <motion.div
            whileHover={{
              scale: 1.04,
            }}
          >
            <Heading
              as="h6"
              fontSize="lg"
              className="cursor-pointer text-gray-400"
              onClick={() => {
                navigate("/features");
              }}
              color={window.location.pathname === "/features" ? "#9bdaf3" : ""}
            >
              Features
            </Heading>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.04,
            }}
          >
            <Heading
              as="h6"
              fontSize="lg"
              className="cursor-pointer text-gray-400"
              onClick={() => {
                navigate("/about");
              }}
              color={window.location.pathname === "/about" ? "#9bdaf3" : ""}
            >
              About Us
            </Heading>
          </motion.div>
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
          <motion.div
            whileHover={{
              scale: 1.04,
            }}
          >
            <Heading
              as="h6"
              fontSize="lg"
              className="cursor-pointer text-gray-400"
            >
              Reviews
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
          <Tooltip label={colorMode === "light" ? "Dark mode" : "Light mode"}>
            <IconButton
              aria-label="Dark mode"
              icon={colorMode === "light" ? <FaMoon /> : <BsSunFill />}
              onClick={() => {
                toggleColorMode();
              }}
              className="mr-2 md:mr-8 ml-3 md:ml-0"
            />
          </Tooltip>
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
