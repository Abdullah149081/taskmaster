import {
  SquaresPlusIcon,
  Cog6ToothIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/solid";

import logo from "../../assets/image/logo.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sticky top-0 h-screen border-r-2 border-secondary/20">
      <div className="flex h-full flex-col items-center gap-5 py-5">
        <img src={logo} alt="logo" />
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer rounded-2xl bg-primary p-2 text-white"
              : "group cursor-pointer rounded-2xl p-2 text-secondary/40 transition-all hover:bg-primary"
          }
        >
          <SquaresPlusIcon className="h-7 w-7 group-hover:text-white" />
        </NavLink>
        <NavLink
          to="/archive"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer rounded-2xl bg-primary p-2 text-white"
              : "group cursor-pointer rounded-2xl p-2 text-secondary/40 transition-all hover:bg-primary"
          }
        >
          <ArchiveBoxIcon className="h-7 w-7 group-hover:text-white" />
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer rounded-2xl bg-primary p-2 text-white"
              : "group cursor-pointer rounded-2xl p-2 text-secondary/40 transition-all hover:bg-primary"
          }
        >
          <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer rounded-2xl bg-primary p-2 text-white"
              : "group cursor-pointer rounded-2xl p-2 text-secondary/40 transition-all hover:bg-primary"
          }
        >
          <Cog6ToothIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "mt-auto cursor-pointer rounded-2xl bg-primary p-2 text-white"
              : "group mt-auto cursor-pointer rounded-2xl p-2 text-secondary/40 transition-all  hover:bg-primary"
          }
        >
          <UserCircleIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
