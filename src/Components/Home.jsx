import React from "react";

import { Select } from "@mantine/core";

import { FaAngleDown } from "react-icons/fa";

import HomeChart from "./HomeChart";

import meal1 from "../img/meal1.svg";

import meal2 from "../img/meal2.svg";

import meal3 from "../img/meal3.svg";

import user1 from "../img/user1.svg";

import gym from "../img/gymIcon.svg";

import therapy from "../img/therapyIcon.svg";

import statis from "../img/statis.svg";

import upgrade from "../img/upgrade.svg";

import heatred from "../img/heartRed.svg";

import heatyellow from "../img/heartYellow.svg";
import heatTeal from "../img/heartTeal.svg";
import heatViolet from "../img/heartViolet.svg";

import { AiFillHeart } from "react-icons/ai";
import { LuHome } from "react-icons/lu";
import { BsBox } from "react-icons/bs";
import { BsBoxArrowRight } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { AiFillMessage } from "react-icons/ai";
import { FaTasks, FaShoppingCart, FaCalendarAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { TbMessages } from "react-icons/tb";
import { RiTableFill, RiNotification4Line } from "react-icons/ri";
import { Accordion } from "@mantine/core";
import { Input } from "@mantine/core";
import { Menu, Button, Text } from "@mantine/core";
import { Avatar } from "@mantine/core";
import { Group, Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ScrollArea } from "@mantine/core";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className=" flex">
      <div className="cursor-pointer">
        <aside
          id="logo-sidebar"
          className=" fixed top-0 left-0 z-40 block h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar">
          <div className=" bg-[#1f1f1f] h-full px-3 py-4 overflow-y-auto">
            <Link to="/home" className="flex items-center pl-1 mb-5">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  opacity="0.4"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.3146 6.24536C15.3146 5.55731 14.7463 5 14.0463 5H14.0446L11.3296 5.00163C7.67797 5.0049 4.7063 7.92219 4.7063 11.5046V14.6033C4.7063 15.2898 5.27463 15.8487 5.97463 15.8487C6.67463 15.8487 7.24463 15.2898 7.24463 14.6033V11.5046C7.24463 9.2934 9.07796 7.49399 11.3313 7.49073L14.0463 7.48909C14.748 7.48909 15.3146 6.93178 15.3146 6.24536ZM28.6561 5.00049H26.0011C25.3011 5.00049 24.7328 5.5578 24.7328 6.24585C24.7328 6.93227 25.3011 7.48795 26.0011 7.48795H28.6561C30.9178 7.48795 32.7578 9.29225 32.7578 11.51V14.6038C32.7578 15.2903 33.3261 15.8492 34.0261 15.8492C34.7278 15.8492 35.2945 15.2903 35.2945 14.6038V11.51C35.2945 7.91941 32.3178 5.00049 28.6561 5.00049ZM15.3976 11.2378H24.6043C25.6126 11.2378 26.581 11.6349 27.286 12.3426C27.996 13.0568 28.3893 14.0161 28.3876 15.0147V17.0903C28.3793 17.3338 28.181 17.5316 27.9326 17.5381H12.066C11.8193 17.5299 11.621 17.3322 11.616 17.0903V15.0147C11.5976 12.9473 13.291 11.259 15.3976 11.2378Z"
                  fill="#ff6f61"
                />

                <path
                  d="M37.0651 20.0687H2.93675C2.23675 20.0687 1.66675 20.626 1.66675 21.3141C1.66675 22.0005 2.23675 22.5562 2.93675 22.5562H4.70508V28.4954C4.70508 32.0778 7.67841 34.9951 11.3301 34.9984L14.0451 35C14.7467 35 15.3134 34.4427 15.3151 33.7546C15.3151 33.0682 14.7467 32.5109 14.0467 32.5109L11.3334 32.5093C9.07841 32.506 7.24341 30.7066 7.24341 28.4954V22.5562H11.6151V24.2085C11.5984 26.2759 13.2901 27.9658 15.3967 27.9854H24.6034C26.7117 27.9658 28.4034 26.2759 28.3867 24.2085V22.5562H32.7584V28.4888C32.7584 30.7082 30.9184 32.5109 28.6567 32.5109H26.0017C25.3001 32.5109 24.7317 33.0682 24.7317 33.7546C24.7317 34.4427 25.3001 35 26.0017 35H28.6567C32.3167 35 35.2951 32.0811 35.2951 28.4888V22.5562H37.0651C37.7651 22.5562 38.3334 22.0005 38.3334 21.3141C38.3334 20.626 37.7651 20.0687 37.0651 20.0687Z"
                  fill="#ff6f61"
                />
              </svg>

              <span className="self-center text-xl text-[#ff6f61] font-[700] whitespace-nowrap ml-[12px]">
                SOFIA
              </span>
            </Link>

            <ul>
              <li>
                <NavLink
                  to="/home"
                  className="flex items-center justify-between px-[16px] mt-6 py-3 text-white rounded-[4px] focus:text-white focus:bg-[#ff6f61] ">
                  <div className=" flex">
                    <span className=" text-[22px]">
                      <LuHome />
                    </span>

                    <span className="text-[1rem] font-semibold ml-[6px]">
                      Dashboard
                    </span>
                  </div>

                  <div className=" bg-[#ff5668] w-[24px] h-[24px] rounded-[50%] text-center font-[400] mr-[5px] pt-[2px] text-[.875rem] text-white">
                    9
                  </div>
                </NavLink>
              </li>

              <div>
                <h2 className=" text-[.875rem] text-[#6b859e] font-[400] ml-[4px] mt-[32px] mb-[3px]">
                  TEMPLATE
                </h2>
                <li className=" mt-[-6px]">
                  <NavLink
                    to="/table"
                    className="flex items-center justify-between px-[16px] py-3 mt-[8px] text-white rounded-lg focus:text-white focus:bg-[#ff6f61] ">
                    <div className=" flex">
                      <span className=" text-[22px]">
                        <RiTableFill />
                      </span>

                      <span className="text-[1rem] font-semibold ml-[6px]">
                        Tables
                      </span>
                    </div>
                  </NavLink>
                </li>

                <li className=" mt-[-6px]">
                  <NavLink
                    to="/form"
                    className="flex items-center justify-between px-[16px] py-3 mt-[8px] text-white rounded-lg focus:text-white focus:bg-[#ff6f61] ">
                    <div className=" flex">
                      <span className=" text-[22px]">
                        <FiFileText />
                      </span>

                      <span className="text-[1rem] font-semibold ml-[6px]">
                        Form
                      </span>
                    </div>
                  </NavLink>
                </li>

                <li className=" mt-[-6px]">
                  <Link className="flex items-center justify-between mt-[2px] text-white rounded-lg ">
                    <div className=" flex flex-col">
                      <Accordion
                        transitionDuration={300}
                        chevron={<MdKeyboardArrowRight size="2rem" />}
                        styles={{
                          chevron: {
                            "&[data-rotate]": {
                              transform: "rotate(90deg)",
                            },
                          },
                        }}>
                        <Accordion.Item value="flexibility">
                          <Accordion.Control className=" hover:bg-transparent">
                            {" "}
                            <div className=" relative flex text-white">
                              <span className=" mt-[4px] text-[17px] ">
                                <BsBox />
                              </span>

                              <span className="text-[16.8px] font-[600] ml-[8px]">
                                UI Elements&nbsp;&nbsp;&nbsp;
                              </span>
                            </div>
                          </Accordion.Control>

                          <Accordion.Panel>
                            {" "}
                            <div className=" items-center ml-[40px] flex flex-col">
                              <ul className=" flex flex-col text-[17.5px] text-white gap-3 list-disc">
                                <li>
                                  <Link to="/UIElement/chart">Charts</Link>
                                </li>

                                <li>Icons</li>

                                <li>Google Maps</li>
                              </ul>
                            </div>
                          </Accordion.Panel>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </aside>
      </div>
      <section className=" ml-0 sm:ml-[250px] md:ml-[250px] flex-1 h-full">
          {/* nav */}
          <nav className="bg-[#f7f8fb]">
            <div className=" flex flex-wrap items-center justify-between p-4 ">
              <div className=" md:hidden w-full">
                <Group mb={20} className=" justify-between">
                  <div className=" lg:hidden mt-2" onClick={toggle}>
                    <span className=" text-2xl">
                      <IoMdMenu />
                    </span>
                  </div>

                  <div className=" items-center flex gap-12">
                    <div className="relative my-2 ">
                      <div className="absolute ml-[-1px] mt-[-8px] flex items-center  pointer-events-none">
                        <span className=" text-2xl lg:text-xl text-black lg:text-[#6b859e]">
                          <CiSearch />
                        </span>

                        <span className="sr-only">Search icon</span>
                      </div>
                    </div>

                    <div className=" flex gap-[25px]">
                      <Menu position="bottom-end" shadow="md">
                        <Menu.Target>
                          <div className=" mt-2 lg:mt-1 flex flex-wrap gap-[13px] items-center">
                            <span className=" text-[22px] lg:text-[24px]">
                              <RiNotification4Line />
                            </span>

                            <span className=" text-[56px] text-[#ff5668] absolute mt-[-47px] ml-[11px] lg:mt-[-49px] lg:ml-[13px]">
                              .
                            </span>
                          </div>
                        </Menu.Target>

                        <Menu.Dropdown className=" shadow-lg rounded-xl">
                          <div className=" px-[16px] py-5 w-[340px]">
                            <Menu.Item component="a">
                              <div className=" text-gray-500 flex gap-3 text-[17px] font-[600]">
                                <span className=" text-[#ff6f61] mt-1 text-[20px]">
                                  <FaShoppingCart />
                                </span>

                                <p className=" text-[#16365f]">
                                  12 new orders have arrived t...
                                </p>
                              </div>
                            </Menu.Item>

                            <Menu.Item component="a">
                              <div className=" text-gray-500 font-[600]">
                                <div className=" flex flex-col gap-3">
                                  <div className=" flex gap-3">
                                    <Avatar
                                      size={43}
                                      radius="xl"
                                      src="https://flatlogic.github.io/sofia-react-template/static/media/mariaImage.e5327aa4.jpg"
                                    />

                                    <div className=" flex flex-col">
                                      <h2 className=" text-[16px]">Maria</h2>

                                      <p className=" text-gray-400 text-[13px] mt-[-2px]">
                                        15 min ago
                                      </p>
                                    </div>
                                  </div>

                                  <img
                                    src="https://flatlogic.github.io/sofia-react-template/static/media/notificationImage.5f55e802.jpg"
                                    alt=""
                                  />

                                  <p className=" font-[700] text-[14.5px] text-gray-400">
                                    It is just a simple image that can defi...
                                  </p>
                                </div>
                              </div>
                            </Menu.Item>

                            <Menu.Item component="a">
                              <div className=" text-gray-500 flex gap-3 text-[17px] font-[600]">
                                <span className=" text-red-500 mt-1 text-[20px]">
                                  <FaCalendarAlt />
                                </span>

                                <p className=" text-[#16365f]">
                                  1 event has been canceled a...
                                </p>
                              </div>
                            </Menu.Item>

                            <Menu.Item component="a">
                              <div className=" text-gray-500 flex gap-3 text-[17px] font-[600]">
                                <span className=" text-cyan-500 mt-1 text-[20px]">
                                  <AiFillMessage />
                                </span>

                                <p className=" text-[#16365f]">
                                  you have 2 new messages
                                </p>
                              </div>
                            </Menu.Item>
                          </div>
                        </Menu.Dropdown>
                      </Menu>

                      <Menu shadow="md" width={200}>
                        <Menu.Target>
                          <div className=" mt-2 flex flex-wrap gap-[13px] items-center">
                            <Avatar
                              src={
                                "https://flatlogic.github.io/sofia-react-template/static/media/user.13df436f.svg"
                              }
                              size={44}
                              radius="xl"></Avatar>
                          </div>
                        </Menu.Target>

                        <Menu.Dropdown className=" shadow-lg rounded-xl">
                          <div className=" py-6 px-3">
                            <Menu.Item component="a">
                              <div className=" text-gray-500 flex gap-2 text-[18.5px] font-[600] ml-[20px]">
                                <span className=" ml-[-20px] mt-[2px] text-2xl">
                                  <BsPerson />
                                </span>

                                <p>
                                  <Link to="/profile">Profile</Link>
                                </p>
                              </div>
                            </Menu.Item>

                            <Menu.Item component="a">
                              <div className=" text-gray-500 flex gap-2 text-[18.5px] mt-[2px] font-[600] ml-[20px]">
                                <span className=" ml-[-20px] mt-[4px] text-[22px]">
                                  <FaTasks />
                                </span>

                                <p>Tasks</p>
                              </div>
                            </Menu.Item>

                            <Menu.Item component="a">
                              <div className=" text-gray-500 flex gap-2 text-[18.5px] mt-[2px] font-[600] ml-[20px]">
                                <span className=" ml-[-20px] mt-[2px] text-2xl">
                                  <TbMessages />
                                </span>

                                <p>Messages</p>
                              </div>
                            </Menu.Item>

                            <Menu.Item
                              className=" hover:bg-transparent"
                              component="a">
                              <button
                                type="submit"
                                className=" mt-10 relative bg-[#ff6f61] flex gap-1 items-center text-white font-[700] mb-[-10px] text-[16px] px-5 rounded-3xl w-25 h-11 mx-auto">
                                <div className=" relative ml-[18px] flex gap-1 items-center text-white font-[700] text-[16px]">
                                  <span className=" ml-[-20px] mt-[2px] text-xl">
                                    <BsBoxArrowRight />
                                  </span>

                                  <Link to="/">
                                    <p>Logout</p>
                                  </Link>
                                </div>
                              </button>
                            </Menu.Item>
                          </div>
                        </Menu.Dropdown>
                      </Menu>
                    </div>
                  </div>
                </Group>

                <Collapse
                  className="w-[330px] mx-auto md:ml-[-33px]"
                  transitionDuration={900}
                  transitionTimingFunction="ease"
                  in={opened}>
                  <ScrollArea
                    offsetScrollbars
                    className=" bg-[#1f1f1f] py-1 h-[275px] rounded-xl w-[330px]"
                    h={250}
                    type="auto"
                    scrollbarSize={4}>
                    <div className=" mx-[14px]">
                      <ul>
                        <li>
                          <NavLink
                            to="/home"
                            className="flex items-center justify-between px-[16px] py-3 text-white rounded-[4px] focus:text-white focus:bg-[#ff6f61] ">
                            <div className=" flex">
                              <span className=" text-[22px]">
                                <LuHome />
                              </span>

                              <span className="text-[1rem] font-semibold ml-[6px]">
                                Dashboard
                              </span>
                            </div>

                            <div className=" bg-[#ff5668] w-[24px] h-[24px] rounded-[50%] text-center font-[400] mr-[5px] pt-[2px] text-[.875rem] text-white">
                              9
                            </div>
                          </NavLink>
                        </li>

                        <div>
                          <li className=" mt-[-6px]">
                            <NavLink
                              to="/table"
                              className="flex items-center justify-between px-[16px] py-3 mt-[8px] text-white rounded-lg focus:text-white focus:bg-[#ff6f61] ">
                              <div className=" flex">
                                <span className=" text-[22px]">
                                  <RiTableFill />
                                </span>

                                <span className="text-[1rem] font-semibold ml-[6px]">
                                  Tables
                                </span>
                              </div>
                            </NavLink>
                          </li>
                          <li className=" mt-[-6px]">
                            <NavLink
                              to="/form"
                              className="flex items-center justify-between px-[16px] py-3 mt-[8px] text-white rounded-lg focus:text-white focus:bg-[#ff6f61] ">
                              <div className=" flex">
                                <span className=" text-[22px]">
                                  <FiFileText />
                                </span>

                                <span className="text-[1rem] font-semibold ml-[6px]">
                                  Form
                                </span>
                              </div>
                            </NavLink>
                          </li>
                          {/* 
                  <li className=" mt-[-6px]">

                    <NavLink 

                      to="/"

                      className="flex items-center justify-between px-[16px] py-3 mt-[8px] text-white rounded-lg focus:text-white focus:bg-[#ff6f61] "

                    >

                      <div className=" flex">

                        <span className=" text-[22px]">

                          <RiNotification4Line />

                        </span>

                        <span className="text-[1rem] font-semibold ml-[6px]">

                          Notifications

                        </span>

                      </div>

                    </NavLink>

                  </li> */}

                          <li className=" mt-[-6px]">
                            <Link
                              to=""
                              className="flex items-center justify-between mt-[2px] text-white rounded-lg ">
                              <div className=" flex flex-col">
                                <Accordion
                                  transitionDuration={300}
                                  chevron={<MdKeyboardArrowRight size="2rem" />}
                                  styles={{
                                    chevron: {
                                      "&[data-rotate]": {
                                        transform: "rotate(90deg)",
                                      },
                                    },
                                  }}>
                                  <Accordion.Item value="flexibility">
                                    <Accordion.Control className=" hover:bg-transparent">
                                      {" "}
                                      <div className=" relative flex text-white">
                                        <span className=" mt-[4px] text-[17px]">
                                          <BsBox />
                                        </span>

                                        <span className="text-[16.8px] font-[600] ml-[8px]">
                                          UI
                                          Elements&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </span>
                                      </div>
                                    </Accordion.Control>

                                    <Accordion.Panel>
                                      {" "}
                                      <div className=" items-center ml-[-55px] flex flex-col">
                                        <ul className=" flex flex-col mt-[6px] text-[17.5px] gap-3 list-disc text-white">
                                          <li>
                                            <Link to="/UIElement/chart">
                                              Charts
                                            </Link>
                                          </li>

                                          <li>Icons</li>

                                          <li>Google Maps</li>
                                        </ul>
                                      </div>
                                    </Accordion.Panel>
                                  </Accordion.Item>
                                </Accordion>
                              </div>
                            </Link>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </ScrollArea>
                </Collapse>
              </div>

              <div className=" md:mt-2 lg:mt-1 hidden md:block">
                <Input
                  variant="unstyled"
                  className=" bg-white px-4 hidden md:block md:w-[245px] rounded-md focus:ring-0 placeholder-[#6b859e]"
                  placeholder="Search Dashboard"
                  size="md"
                />

                <div className="absolute hidden md:mt-[-29px] md:flex items-center md:pl-[212px] pointer-events-none">
                  <span className="lg:text-xl lg:text-[#6b859e]">
                    <CiSearch />
                  </span>

                  <span className="sr-only">Search icon</span>
                </div>
              </div>

              <div className=" md:flex items-center gap-3 hidden ">
                <Menu position="bottom-end" shadow="md" width={340}>
                  <Menu.Target>
                    <div className=" hidden md:block relative">
                      <span className=" md:text-[20px] lg:text-[24px] noti">
                        <RiNotification4Line />
                      </span>
                    </div>
                  </Menu.Target>

                  <Menu.Dropdown className=" shadow-lg rounded-xl">
                    <div className=" px-[16px] py-5">
                      <Menu.Item component="a">
                        <div className=" text-gray-500 flex gap-3 text-[17px] font-[600]">
                          <span className=" text-[#ff6f61] mt-1 text-[20px]">
                            <FaShoppingCart />
                          </span>

                          <p className=" text-[#16365f]">
                            12 new orders have arrived t...
                          </p>
                        </div>
                      </Menu.Item>

                      <Menu.Item component="a">
                        <div className=" text-gray-500 font-[600]">
                          <div className=" flex flex-col gap-3">
                            <div className=" flex gap-3">
                              <Avatar
                                size={43}
                                radius="xl"
                                src="https://flatlogic.github.io/sofia-react-template/static/media/mariaImage.e5327aa4.jpg"
                              />

                              <div className=" flex flex-col">
                                <h2 className=" text-[16px]">Maria</h2>

                                <p className=" text-gray-400 text-[13px] mt-[-2px]">
                                  15 min ago
                                </p>
                              </div>
                            </div>

                            <img
                              src="https://flatlogic.github.io/sofia-react-template/static/media/notificationImage.5f55e802.jpg"
                              alt=""
                            />

                            <p className=" font-[700] text-[14.5px] text-gray-400">
                              It is just a simple image that can defi...
                            </p>
                          </div>
                        </div>
                      </Menu.Item>

                      <Menu.Item component="a">
                        <div className=" text-gray-500 flex gap-3 text-[17px] font-[600]">
                          <span className=" text-red-500 mt-1 text-[20px]">
                            <FaCalendarAlt />
                          </span>

                          <p className=" text-[#16365f]">
                            1 event has been canceled a...
                          </p>
                        </div>
                      </Menu.Item>

                      <Menu.Item component="a">
                        <div className=" text-gray-500 flex gap-3 text-[17px] font-[600]">
                          <span className=" text-cyan-500 mt-1 text-[20px]">
                            <AiFillMessage />
                          </span>

                          <p className=" text-[#16365f]">
                            you have 2 new messages
                          </p>
                        </div>
                      </Menu.Item>
                    </div>
                  </Menu.Dropdown>
                </Menu>

                <Menu shadow="md">
                  <Menu.Target>
                    <div className=" mt-2 lg:mt-1 hidden md:flex flex-wrap gap-3 items-center">
                      <Avatar
                        src={
                          "https://flatlogic.github.io/sofia-react-template/static/media/user.13df436f.svg"
                        }
                        size={44}
                        radius="xl"></Avatar>

                      <p className=" hidden md:block text-gray-500">
                        Christina Carey
                      </p>

                      <span className=" hidden md:block ml-[-4px] text-gray-500">
                        <IoIosArrowDown />
                      </span>
                    </div>
                  </Menu.Target>

                  <Menu.Dropdown className=" shadow-lg rounded-xl">
                    <div className=" py-6 px-3">
                      <Link to="/profile">
                        <Menu.Item component="a">
                          <div className=" text-gray-500 flex gap-2 text-[18.5px] font-[600] ml-[20px]">
                            <span className=" ml-[-20px] mt-[2px] text-2xl">
                              <BsPerson />
                            </span>

                            <p>Profile</p>
                          </div>
                        </Menu.Item>
                      </Link>

                      <Menu.Item component="a">
                        <div className=" text-gray-500 flex gap-2 text-[18.5px] mt-[2px] font-[600] ml-[20px]">
                          <span className=" ml-[-20px] mt-[4px] text-[22px]">
                            <FaTasks />
                          </span>

                          <p>Tasks</p>
                        </div>
                      </Menu.Item>

                      <Menu.Item component="a">
                        <div className=" text-gray-500 flex gap-2 text-[18.5px] mt-[2px] font-[600] ml-[20px]">
                          <span className=" ml-[-20px] mt-[2px] text-2xl">
                            <TbMessages />
                          </span>

                          <p>Messages</p>
                        </div>
                      </Menu.Item>

                      <Menu.Item
                        className=" hover:bg-transparent"
                        component="a">
                        <button
                          type="submit"
                          className=" mt-10 relative bg-[#ff6f61] flex gap-1 items-center text-white font-[700] mb-[-10px] text-[16px] px-5 rounded-3xl w-25 h-11 mx-auto">
                          <div className=" relative ml-[18px] flex gap-1 items-center text-white font-[700] text-[16px]">
                            <span className=" ml-[-20px] mt-[2px] text-xl">
                              <BsBoxArrowRight />
                            </span>

                            <Link to="/">
                              <p>Logout</p>
                            </Link>
                          </div>
                        </button>
                      </Menu.Item>
                    </div>
                  </Menu.Dropdown>
                </Menu>
              </div>
            </div>
          </nav>
        <main className="pt-[24px] pb-[50px] pe-[24px] bgColor flex flex-col">
          <div className=" mb-[24px]">
            <h1 className=" text-xl font-semibold ms-3 text-[#FF6F61]">Dashboard</h1>
          </div>
          <div className=" flex flex-col md:flex-row bgColor">
            {/* activities & meal */}
            <div className=" w-full md:w-2/3">
              <div className=" flex flex-col md:flex-row">
                {/* activities */}
                <div className=" w-full  md:w-1/2 px-3 mb-6">
                  <div className=" bgWhite rounded-xl ">
                    <div className=" flex  justify-between items-center p-7">
                      <p className=" font-semibold">Your activity</p>
                      <div className=" w-24">
                        <Select
                          defaultValue={"Weekly"}
                          classNames={{
                            input: "week-input",
                            dropdown: "home-dropdown",
                          }}
                          rightSection={
                            <FaAngleDown size="1rem" color="#948C9E" />
                          }
                          rightSectionWidth={30}
                          styles={{ dropdown: { top: "138px" } }}
                          data={["Weekly", "Daily", "Monthly"]}
                        />
                      </div>
                    </div>
                    <div className=" h-[275px]">
                      <HomeChart />
                    </div>
                  </div>
                </div>
                {/* meals */}
                <div className=" w-full md:w-1/2 px-3 mb-6">
                  <div className=" bgWhite rounded-xl p-7">
                    <div className=" flex  justify-between items-center ">
                      <p className=" font-semibold">Your meal</p>
                      <div className=" w-24">
                        <Select
                          defaultValue={"Weekly"}
                          classNames={{
                            input: "week-input",
                            dropdown: "home-dropdown",
                          }}
                          rightSection={
                            <FaAngleDown size="1rem" color="#948C9E" />
                          }
                          rightSectionWidth={30}
                          styles={{ dropdown: { top: "138px" } }}
                          data={["Weekly", "Daily", "Monthly"]}
                        />
                      </div>
                    </div>
                    <div className=" mt-6">
                      <div className=" flex justify-between items-center px-4 py-3  bgColor rounded-xl">
                        <div className=" flex">
                          <img src={meal1} alt="" />
                          <div className=" ms-3">
                            <p className=" font-semibold text-fs1">
                              Salmon Salad
                            </p>
                            <span className=" text-muted text-fs1 font-fw--2">
                              300 g
                            </span>
                          </div>
                        </div>
                        <p className=" text-muted text-fs1 font-fw--2">
                          175 cal
                        </p>
                      </div>
                      <div className=" flex justify-between items-center px-4 py-3 my-4 bgColor rounded-xl">
                        <div className=" flex">
                          <img src={meal2} alt="" />
                          <div className=" ms-3">
                            <p className=" font-semibold text-fs1">
                              Salmon Salad
                            </p>
                            <span className=" text-muted text-fs1 font-fw--2">
                              300 g
                            </span>
                          </div>
                        </div>
                        <p className=" text-muted text-fs1 font-fw--2">
                          175 cal
                        </p>
                      </div>
                      <div className=" flex justify-between items-center px-4 py-3 m bgColor rounded-xl">
                        <div className=" flex">
                          <img src={meal3} alt="" />
                          <div className=" ms-3">
                            <p className=" font-semibold text-fs1">
                              Salmon Salad
                            </p>
                            <span className=" text-muted text-fs1 font-fw--2">
                              300 g
                            </span>
                          </div>
                        </div>
                        <p className=" text-muted text-fs1 font-fw--2">
                          175 cal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* upgrade plan*/}
              <div className="  px-3 mb-6 md:mb-0">
                <div className=" bg-white rounded-xl flex flex-col md:flex-row items-center justify-between">
                  <div className=" p-4 md:p-7">
                    <p className=" head3">Upgrade your plan</p>
                    <p className=" font-normal text-fs1">
                      So how did the classical Latin become so
                    </p>
                    <div className=" mt-7 flex">
                      <button className=" px-7 me-4 py-3 bgPrimary hover-primary-btn text-white rounded-full text-sm">
                        Go Premium
                      </button>
                      <button className=" px-7 py-3 border upgrade-btn border-slate-600 rounded-full text-sm">
                        Try for free
                      </button>
                    </div>
                  </div>
                  {/* upgrade img */}
                  <div className=" px-4">
                    <img src={upgrade} alt="" />
                  </div>
                </div>
              </div>
              {/* Text cards */}
              <div className=" flex items-center px-3 mt-6 rounded flex-wrap">
                <div className=" w-1/2 md:w-1/4 pe-3 pb-3 md:pb-0">
                  <div className=" bg-white px-5 py-10 rounded-xl">
                    <div className=" flex items-center">
                      <div>
                        <img src={heatred} alt="" />
                      </div>
                      <div className=" ms-3">
                        <p className=" text-fs1 font-semibold">Text</p>
                        <span className=" text-fs1 font-semibold">
                          Num{" "}
                          <span className=" text-fs1 text-muted font-medium">
                            {" "}
                            /ber
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className=" h-[5px] bg-[#E9ECEF] rounded overflow-hidden mt-5">
                      <div className=" h-full bg-[#FF5668] w-2/3"></div>
                    </div>
                  </div>
                </div>
                <div className=" w-1/2 md:w-1/4 px-3 pb-3 md:pb-0">
                  <div className=" bg-white px-5 py-10 rounded-xl">
                    <div className=" flex items-center">
                      <div>
                        <img src={heatyellow} alt="" />
                      </div>
                      <div className=" ms-3">
                        <p className=" text-fs1 font-semibold">Text</p>
                        <span className=" text-fs1 font-semibold">
                          Num{" "}
                          <span className=" text-fs1 text-muted font-medium">
                            {" "}
                            /ber
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className=" h-[5px] bg-[#E9ECEF] rounded overflow-hidden mt-5">
                      <div className=" h-full bg-[#FFC405] w-2/3"></div>
                    </div>
                  </div>
                </div>
                <div className=" w-1/2 md:w-1/4 px-3 pt-3 md:pt-0">
                  <div className=" bg-white px-5 py-10 rounded-xl">
                    <div className=" flex items-center">
                      <div>
                        <img src={heatTeal} alt="" />
                      </div>
                      <div className=" ms-3">
                        <p className=" text-fs1 font-semibold">Text</p>
                        <span className=" text-fs1 font-semibold">
                          Num{" "}
                          <span className=" text-fs1 text-muted font-medium">
                            {" "}
                            /ber
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className=" h-[5px] bg-[#E9ECEF] rounded overflow-hidden mt-5">
                      <div className=" h-full bg-[#41D5E2] w-2/3"></div>
                    </div>
                  </div>
                </div>
                <div className=" w-1/2 md:w-1/4 ps-3 pt-3 md:pt-0">
                  <div className=" bg-white px-5 py-10 rounded-xl">
                    <div className=" flex items-center">
                      <div>
                        <img src={heatViolet} alt="" />
                      </div>
                      <div className=" ms-3">
                        <p className=" text-fs1 font-semibold">Text</p>
                        <span className=" text-fs1 font-semibold">
                          Num{" "}
                          <span className=" text-fs1 text-muted font-medium">
                            {" "}
                            /ber
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className=" h-[5px] bg-[#E9ECEF] rounded overflow-hidden mt-5">
                      <div className=" h-full bg-[#4D53E0] w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* user card */}
            <div className=" w-full md:w-1/3 px-3 my-10 md:mt-0">
              <div className=" bgWhite rounded-xl p-7">
                <div className=" flex items-center">
                  <img src={user1} alt="" className=" w-24 h-24 block me-5 " />
                  <div>
                    <p className=" font-semibold">Christina Karey</p>
                    <span className=" text-muted text-fs1">Brasil</span>
                  </div>
                </div>
                <div className=" flex justify-around mt-10">
                  <div>
                    <p className=" head1 font-semibold">63 kg</p>
                    <p className=" text-muted text-fs1">Weight</p>
                  </div>
                  <div>
                    <p className=" head1 font-semibold">175 cm</p>
                    <p className=" text-muted text-fs1">Height</p>
                  </div>
                  <div>
                    <p className=" head1 font-semibold">23 y.</p>
                    <p className=" text-muted text-fs1">age</p>
                  </div>
                </div>
                <div className=" flex justify-between items-center mt-14 mb-10">
                  <p className=" head1 font-semibold">Your Goals</p>
                  <div className=" w-24">
                    <Select
                      defaultValue={"Weekly"}
                      classNames={{
                        input: "week-input",
                        dropdown: "home-dropdown",
                      }}
                      rightSection={<FaAngleDown size="1rem" color="#948C9E" />}
                      rightSectionWidth={30}
                      styles={{ dropdown: { top: "138px" } }}
                      data={["Weekly", "Daily", "Monthly"]}
                    />
                  </div>
                </div>
                <div className=" mb-12">
                  <div className=" flex flex-col">
                    <div className=" flex justify-between items-center mb-3">
                      <p className=" text-fs1 font-semibold">Sleep</p>
                      <span className=" text-fs1 font-semibold">
                        92 <span className=" font-medium text-muted">/160</span>
                      </span>
                    </div>
                    <div className=" bg-[#E9ECEF] h-[6px] rounded-full overflow-hidden">
                      <div className=" w-2/4 bg-[#FF5668] h-full"></div>
                    </div>
                  </div>
                  <div className=" flex flex-col my-5">
                    <div className=" flex justify-between items-center mb-3">
                      <p className=" text-fs1 font-semibold">Sport</p>
                      <span className=" text-fs1 font-semibold">
                        40 <span className=" font-medium text-muted">/50</span>
                      </span>
                    </div>
                    <div className=" bg-[#E9ECEF] h-[6px] rounded-full overflow-hidden">
                      <div className=" w-3/4 bg-[#FFC405] h-full"></div>
                    </div>
                  </div>
                  <div className=" flex flex-col">
                    <div className=" flex justify-between items-center mb-3">
                      <p className=" text-fs1 font-semibold">Water</p>
                      <span className=" text-fs1 font-semibold">
                        25 <span className=" font-medium text-muted">/40</span>
                      </span>
                    </div>
                    <div className=" bg-[#E9ECEF] h-[6px] rounded-full overflow-hidden">
                      <div className=" w-1/4 bg-[#41D5E2] h-full"></div>
                    </div>
                  </div>
                </div>
                {/* Appointment */}
                <div>
                  <p className=" head1 font-semibold mb-4">Appointments</p>
                  <div className=" p-3 flex justify-evenly bgColor items-center mb-4">
                    <img src={gym} alt="" />
                    <div>
                      <p className=" text-fs1  font-semibold">
                        02.11 , 12:00 - 13:00
                      </p>
                      <p className=" text-fs1 text-muted">Yoga, Airplace Gym</p>
                    </div>
                    <div>
                      <input type="checkbox" className=" " />
                    </div>
                  </div>
                  <div className=" p-3 flex justify-evenly bgColor items-center ">
                    <img src={therapy} alt="" />
                    <div>
                      <p className=" text-fs1  font-semibold">
                        02.11 , 12:00 - 13:00
                      </p>
                      <p className=" text-fs1 text-muted">Yoga, Airplace Gym</p>
                    </div>
                    <div>
                      <input type="checkbox" className=" " />
                    </div>
                  </div>
                </div>
                {/* Download */}
                <div>
                  <div className=" p-3 flex justify-evenly bg-[#FF3046] items-center mt-16 rounded-xl">
                    <img src={statis} alt="" />
                    <div className=" text-white ms-2">
                      <p className=" head2">STATISTIC</p>
                      <p className=" text-fs1 ">Download Your Acitivity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* footer */}
        <div className=" text-end bgColor mt-auto">
          <p>
            2021 © Flatlogic. Hand-crafted & Made with{" "}
            <AiFillHeart className=" text-[#FF3046] inline-block" />
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
