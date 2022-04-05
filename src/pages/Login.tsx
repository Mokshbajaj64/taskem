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
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import "../App.css";
import { FaMoon } from "react-icons/fa";
import { BsSunFill, BsFillEmojiSunglassesFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="flex w-full min-h-screen overflow-y-hidden">
      <div className="flex w-[44%] clippath items-center">
        <div className="fixed top-0 sm:p-2 p-0 flex items-center gap-2 sm:ml-3 ml-0">
          <BsFillEmojiSunglassesFill size={30} color="white" />
          <Heading as="h5" fontSize="2xl" color="white">
            ShittyShit
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
            <InputGroup width="60%">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="*********"
              />
              <InputRightElement
                children={
                  showPassword ? (
                    <AiFillEyeInvisible
                      className="cursor-pointer"
                      onClick={() => {
                        setShowPassword(false);
                      }}
                    />
                  ) : (
                    <AiFillEye
                      className="cursor-pointer"
                      onClick={() => {
                        setShowPassword(true);
                      }}
                    />
                  )
                }
              />
            </InputGroup>
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
              onClick={() => {
                navigate("/register");
              }}
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
