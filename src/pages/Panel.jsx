import React from "react";
import Logo from "../assets/logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BiBook } from "react-icons/bi";
import PanelHeader from "../components/PanelHeader";

const Panel = () => {

  
  const location = useLocation();

  return (
    <div className="w-full flex gap-8 bg-slate-100 p-4">
      <div className="w-[247px] h-[95vh] fixed z-20 rounded-2xl border-1 bg-white border-[#E7E8EA]">
        <div className="flex justify-center mb-8 items-center p-5">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="flex flex-col gap-6 p-3 px-6">
          <li>
            <Link
              to={"/"}
              className={`flex items-center gap-4 p-2 transition-all duration-100 ${
                location.pathname === "/"
                  ? "border-l-indigo-600 border-l-6 text-indigo-600"
                  : "text-black"
              }`}
            >
              <span className="text-2xl">
                <LuLayoutDashboard />
              </span>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-4 text-black p-2 rounded-lg">
              <span className="text-2xl">
                <BiBook />
              </span>
              <span>Surveys</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-4 text-black p-2 rounded-lg">
              <span className="text-2xl">
                <LuLayoutDashboard />
              </span>
              <span>Peap</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/support"}
              className={`flex items-center gap-4 p-2 transition-all duration-100 ${
                ["/support", "/plans"].includes(location.pathname) ? "border-l-indigo-600 border-l-6 text-indigo-600" : "text-black"
              }`}
            >
              <span className="text-2xl">
                <IoCallOutline />
              </span>
              <span>Instant Support</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="pl-[265px] relative flex flex-col gap-10">
        <PanelHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default Panel;
