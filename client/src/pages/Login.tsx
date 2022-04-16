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
import React, { useState } from "react";
import "../App.css";
import { FaMoon } from "react-icons/fa";
import { BsSunFill, BsFillEmojiSunglassesFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { login } from "../actions/user";
import { FcTodoList } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const [showPassword, setShowPassword] = React.useState(false);
  const [color, setColor] = React.useState("blue");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const loginBoi = () => {
    setLoading(true);
    dispatch(login(loginData, setLoading));
  };
  return (
    <motion.div
      className="flex w-full min-h-screen overflow-y-hidden"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <div
        className={
          color === "blue"
            ? "flex w-[44%] clippath items-center bg-blue-400"
            : color === "purple"
            ? "flex w-[44%] clippath items-center bg-purple-400"
            : color === "green"
            ? "flex w-[44%] clippath items-center bg-green-400"
            : color === "pink"
            ? "flex w-[44%] clippath items-center bg-pink-400"
            : "flex w-[44%] clippath items-center bg-red-400"
        }
      >
        <div className="flex fixed top-0 sm:p-2 p-0 sm:ml-3 ml-0 gap-28">
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{
              scale: 1.1,
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <FcTodoList size={30} color="white" />
            <Heading as="h5" fontSize="2xl" color="white">
              Taskem
            </Heading>
          </motion.div>
          <div className="flex items-center gap-4">
            {color === "purple" ? (
              ""
            ) : (
              <motion.div
                className="flex p-2 bg-purple-400 rounded-full cursor-pointer"
                onClick={() => {
                  setColor("purple");
                }}
                whileHover={{
                  scale: 1.1,
                }}
              ></motion.div>
            )}
            {color === "green" ? (
              ""
            ) : (
              <motion.div
                className="flex p-2 bg-green-400 rounded-full cursor-pointer"
                onClick={() => {
                  setColor("green");
                }}
                whileHover={{
                  scale: 1.1,
                }}
              ></motion.div>
            )}
            {color === "red" ? (
              ""
            ) : (
              <motion.div
                className="flex p-2 bg-red-400 rounded-full cursor-pointer"
                onClick={() => {
                  setColor("red");
                }}
                whileHover={{
                  scale: 1.1,
                }}
              ></motion.div>
            )}
            {color === "pink" ? (
              ""
            ) : (
              <motion.div
                className="flex p-2 bg-pink-400 rounded-full cursor-pointer"
                onClick={() => {
                  setColor("pink");
                }}
                whileHover={{
                  scale: 1.1,
                }}
              ></motion.div>
            )}
            {color === "blue" ? (
              ""
            ) : (
              <motion.div
                className="flex p-2 bg-blue-400 rounded-full cursor-pointer"
                onClick={() => {
                  setColor("blue");
                }}
                whileHover={{
                  scale: 1.1,
                }}
              ></motion.div>
            )}
          </div>
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
            <Input
              type="email"
              width="60%"
              placeholder="tim@twt.com"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setLoginData({
                  ...loginData,
                  email: event?.target?.value,
                });
              }}
            />
            {loginData?.email?.trim()?.includes("@") ? (
              ""
            ) : (
              <FormHelperText>Email must be valid</FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Password</FormLabel>
            <InputGroup width="60%">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="*********"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setLoginData({
                    ...loginData,
                    password: event?.target?.value,
                  });
                }}
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
            {loginData?.password?.trim()?.length >= 8 &&
            loginData?.password?.trim()?.length <= 20 ? (
              ""
            ) : (
              <FormHelperText>
                Password must be between 8 and 20 characters
              </FormHelperText>
            )}
          </FormControl>
          <Checkbox>Remember me</Checkbox>
          {loginData?.email?.trim()?.includes("@") &&
          loginData?.password?.trim()?.length >= 8 &&
          loginData?.password?.trim()?.length <= 20 ? (
            <motion.div
              className="flex w-[60%]"
              whileHover={{
                scale: 1.05,
              }}
            >
              <Button
                colorScheme="blue"
                width="full"
                onClick={loginBoi}
                isLoading={loading}
              >
                Sign in
              </Button>
            </motion.div>
          ) : (
            <div className="flex w-[60%]">
              <Button colorScheme="blue" width="full" isDisabled={true}>
                Sign in
              </Button>
            </div>
          )}
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
    </motion.div>
  );
};

export default Login;
