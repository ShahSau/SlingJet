import React, { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";
import { Sidebar, UserProfile } from "../components";
import { client } from "../client";
import logo from "../assets/logo.svg";
import Pins from "./Pins";
import { userQuery } from "../utlis/data";
const Home = () => {
  const [user, setUser] = useState(null);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const scrollRef = useRef(null);
  const userInfo =
    localStorage.getItem("slingjet-user") !== "undefined"
      ? JSON.parse(localStorage.getItem("slingjet-user"))
      : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);
  //  this will put our scrolling at the top of the page
  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out">
      {/* for medium screen side bar will be shown and for all other screen sidebar wont  */}
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar user={user && user} />{" "}
        {/*if user exists send user , else send false */}
      </div>
      {/* for medium screen this will not be shown and for all other screen will  */}
      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
          <HiMenu
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setToggleSideBar(true)}
          />
          <Link to="/">
            <img src={logo} className="w-28" alt="logo" />
          </Link>
          <Link to={`user-profile/${user?._id}`}>
            <img src={user?.image} className="w-28" alt="logo" />
          </Link>
        </div>
        {toggleSideBar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer"
                onClick={() => setToggleSideBar(false)}
              />
            </div>
            <Sidebar user={user && user} closeToggle={setToggleSideBar} />
          </div>
        )}
      </div>

      <div className="pb-2 flex-1 h-screen overflow-y-scrool" ref={scrollRef}>
        <Routes>
          <Route path="/user-profile/:userid" element={<UserProfile />} />
          <Route path="/*" element={<Pins user={user && user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
