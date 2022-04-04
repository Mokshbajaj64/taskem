import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import "../App.css";
import { FaMoon } from "react-icons/fa";
import { BsSunFill, BsFillEmojiSunglassesFill } from "react-icons/bs";

const Login = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="flex w-full min-h-screen overflow-y-hidden">
      <div className="flex w-[44%] clippath items-center">
        <div className="fixed top-0 p-2 flex items-center gap-2">
          <BsFillEmojiSunglassesFill size={20} color="white" />
          <Heading as="h5" fontSize="lg" color="white">
            Logo
          </Heading>
        </div>
        <img src="/bg1.svg" className="w-[70%] h-[70%]" />
      </div>
      <div className="w-[56%] flex flex-col justify-center gap-8">
        <div className="w-[80%]">
          <IconButton
            aria-label="Dark mode"
            icon={colorMode === "light" ? <FaMoon /> : <BsSunFill />}
            className="fixed top-0 left-full"
            onClick={() => {
              toggleColorMode();
            }}
          />
        </div>
        <div className="flex flex-col items-start">
          <Heading as="h3" fontSize={"4xl"}>
            Welcome Back!
          </Heading>
          <Text color="gray.600">
            Please log in to your account shitty account
          </Text>
        </div>
        <div className="flex flex-col items-start gap-6">
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input type="email" width="60%" placeholder="tim@twt.com" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Password</FormLabel>
            <Input type="password" width="60%" placeholder="*********" />
          </FormControl>
          <Checkbox>Remember me</Checkbox>
          <div className="flex w-[60%]">
            <Button colorScheme="blue" width="full">
              Sign in
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <Text size="md">Don't have any account?</Text>
            <Text
              size="md"
              color="blue.500"
              className="cursor-pointer hover:underline"
            >
              Sign up
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
