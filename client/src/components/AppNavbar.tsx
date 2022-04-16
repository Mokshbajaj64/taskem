import React, { useState } from "react";
import {
  Heading,
  IconButton,
  useColorMode,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Text,
  Divider,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiSettings, FiLogOut } from "react-icons/fi";
import { ImSearch } from "react-icons/im";
import { IoAdd } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import UpdateProfileModal from "./UpdateProfileModal";
import { FcTodoList } from "react-icons/fc";
import { searchTodayTasks } from "../actions/todaytask";
import { searchWeeklyTasks } from "../actions/weeklytask";
import { searchInboxTasks } from "../actions/inboxtask";
import { projectTasksSearch } from "../actions/projecttask";
import { format } from "timeago.js";

type Props = {
  isProject?: boolean;
  projectId?: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen?: boolean;
};

const AppNavbar = (props: Props) => {
  const token = JSON.parse(localStorage?.getItem("token") as string);
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };
  const userboi = useSelector((data: any) => data?.user?.authData);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="w-full p-5 flex items-center justify-between fixed h-[80px] top-0"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        backgroundColor: colorMode === "light" ? "#ffffff" : "#1a202c",
        zIndex: "100",
      }}
    >
      <div className="flex items-center gap-6">
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <FiMenu
            size="28"
            className="cursor-pointer"
            onClick={() => {
              //@ts-ignore
              props?.setIsOpen(!props?.isOpen);
            }}
          />
        </motion.div>
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => {
            navigate("/app/today");
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
      </div>
      <InputGroup width="60%">
        <InputLeftElement
          pointerEvents="none"
          children={<ImSearch color="gray.300" />}
        />
        <Input
          type="text"
          placeholder="Search"
          rounded="full"
          variant="filled"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            window.location.pathname === "/app/today"
              ? dispatch(searchTodayTasks(token, event?.target?.value))
              : window.location.pathname === "/app/inbox"
              ? dispatch(searchInboxTasks(token, event?.target?.value))
              : props?.isProject
              ? dispatch(
                  projectTasksSearch(
                    token,
                    props?.projectId as string,
                    event?.target?.value
                  )
                )
              : dispatch(searchWeeklyTasks(token, event?.target?.value));
          }}
        />
      </InputGroup>
      <div className="flex items-center gap-6">
        <Tooltip label="Add task">
          <IconButton
            aria-label="Add tasks"
            icon={<IoAdd size="24" className="cursor-pointer" />}
          />
        </Tooltip>
        <Tooltip label={colorMode === "light" ? "Dark mode" : "Light mode"}>
          <IconButton
            aria-label="Dark mode"
            icon={colorMode === "light" ? <FaMoon /> : <BsSunFill />}
            onClick={() => {
              toggleColorMode();
            }}
          />
        </Tooltip>
        <Popover>
          <Tooltip label="Notifications">
            <PopoverTrigger>
              <IconButton
                aria-label="Notifications"
                icon={<AiOutlineBell size="24" className="cursor-pointer" />}
              />
            </PopoverTrigger>
          </Tooltip>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Notifications!</PopoverHeader>
            <PopoverBody className="flex flex-col gap-2">
              <div className="flex gap-4 cursor-pointer p-1 w-full">
                <Avatar />
                <div className="flex flex-col items-start gap-1">
                  <Text fontSize="md">
                    Welcome, {userboi?.username}! Your journey toward being
                    productive begins today!
                  </Text>
                  <Text fontSize="sm" color="gray.300">
                    {format(userboi?.createdAt)}
                  </Text>
                </div>
              </div>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Menu>
          <Tooltip label={userboi?.username}>
            <MenuButton>
              <Avatar name={userboi?.username} className="cursor-pointer" />
            </MenuButton>
          </Tooltip>
          <MenuList>
            <MenuItem
              className="flex gap-4 p-2 rounded-2xl"
              onClick={() => {
                onOpen();
              }}
            >
              <div className="flex flex-col items-start gap-3">
                <Avatar name={userboi?.username} size="xl" />
                <div className="flex items-center gap-2">
                  <FiSettings size="20" color="gray" />
                  <Text fontSize="md">Settings</Text>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <Text fontSize="lg">{userboi?.username}</Text>
                <Text fontSize="lg" color="gray.500">
                  {userboi?.email}
                </Text>
              </div>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              className="flex gap-3 items-center rounded-2xl"
              onClick={logout}
            >
              <FiLogOut size="24" color="gray" />
              <Text fontSize="lg">Log Out</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <UpdateProfileModal
        isOpen={isOpen}
        onClose={onClose}
        username={userboi?.username}
        email={userboi?.email}
        bio={userboi?.bio}
      />
    </motion.div>
  );
};

export default AppNavbar;
