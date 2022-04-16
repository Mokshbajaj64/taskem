import React, { useEffect, useState } from "react";
import AppNavbar from "../components/AppNavbar";
import AppSidebar from "../components/AppSidebar";
import { motion } from "framer-motion";
import TagsTask from "../components/TagsTask";
import { getTag } from "../actions/singletag";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const Tags = () => {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage?.getItem("token") as string);
  const { tagId } = useParams();
  useEffect(() => {
    dispatch(getTag(token, tagId as string));
  }, [tagId, dispatch, token]);
  const [isOpen, setIsOpen] = useState(true);
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
    >
      <AppNavbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className="mt-[80px] w-full flex overflow-hidden">
        {isOpen ? <AppSidebar /> : null}
        <TagsTask isOpen={isOpen} />
      </div>
    </motion.div>
  );
};

export default Tags;
