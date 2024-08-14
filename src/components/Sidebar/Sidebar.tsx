import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo_lightwork.svg";
import { SidebarHouseIcon } from "@/assets/icons/SidebarHouseIcon";
import { SidebarRanchIcon } from "@/assets/icons/SidebarRanchIcon";
import { SidebarPropertiesIcon } from "@/assets/icons/SidebarPropertiesIcon";
import { SidebarUserIcon } from "@/assets/icons/SidebarUserIcon";
import { SidebarKeyIcon } from "@/assets/icons/SidebarKeyIcon";
import { SidebarMessgesIcon } from "@/assets/icons/SidebarMessgesIcon";
import { SidebarPhoneIcon } from "@/assets/icons/SidebarPhoneIcon";
import { SidebarHammerIcon } from "@/assets/icons/SidebarHammerIcon";
import { SidebarSettingsIcon } from "@/assets/icons/SidebarSettingsIcon";
import { SidebarLogoutIcon } from "@/assets/icons/SidebarLogoutIcon";

const sidebarComponents = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <SidebarHouseIcon />,
  },
  {
    name: "Work Order",
    path: "/work-order",
    icon: <SidebarRanchIcon />,
  },
  {
    name: "Properties",
    path: "/properties",
    icon: <SidebarPropertiesIcon />,
  },
  {
    name: "Tenants",
    path: "/tenants",
    icon: <SidebarUserIcon />,
  },
  {
    name: "Compliance",
    path: "/compliance",
    icon: <SidebarKeyIcon />,
  },
  {
    name: "Messages",
    right: (
      <div className="flex flex-row items-center justify-center px-2 py-1 rounded-[100%] bg-[#22BCFF] font-medium text-xs leading-[18px] text-white">
        10
      </div>
    ),
    path: "/messages",
    icon: <SidebarMessgesIcon />,
  },
  {
    name: "AI Assistant",
    path: "/",
    icon: <SidebarPhoneIcon />,
  },
  {
    name: "Maintenance",
    path: "/maintenance",
    icon: <SidebarHammerIcon />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <SidebarSettingsIcon />,
  },
  {
    name: "Log Out",
    path: "/logout",
    icon: <SidebarLogoutIcon />,
  },
];

function Sidebar() {
  return (
    <div className="min-w-64 bg-white p-4 flex flex-col">
      <div className="mt-[24px] mb-[32px] pl-2">
        <img src={logo} alt="Light Work logo" />
      </div>

      {/* Sidebar Items */}
      <div className="flex flex-col space-y-2 flex-grow h-full">
        {sidebarComponents.map((item, index) => (
          <Link
            key={index}
            to={item.path} // Set the path for routing
            className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-md"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <span className="text-gray-700 text-sm font-medium">
              {item.name}
            </span>
            {item.right && <div>{item.right}</div>}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
