import { Heading, Button, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const HomeNavbar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div
      className="w-full p-5 flex items-center justify-between fixed h-[80px]"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        backgroundColor: colorMode === "light" ? "#ffffff" : "#1a202c",
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
          <Heading
            as="h6"
            fontSize="lg"
            className="cursor-pointer text-gray-400"
          >
            Contact Us
          </Heading>
        </div>
      </div>
      <div className="flex items-center md:gap-5 gap-2">
        <IconButton
          aria-label="Dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <BsSunFill />}
          onClick={() => {
            toggleColorMode();
          }}
          className="mr-8"
        />
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
      </div>
    </div>
  );
};

export default HomeNavbar;
