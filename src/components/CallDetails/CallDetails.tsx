// import { Fragment } from "react/jsx-runtime";

import { CalendarIcon } from "@/assets/icons/CalendarIcon";
import { ClockIcon } from "@/assets/icons/ClockIcon";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";

const CallDetails = [
  {
    key: "Call Date",
    value: "20 Aug 2024, 01:46 PM",
    icon: <CalendarIcon />,
    asChip: false,
  },
  {
    key: "Call Duration",
    value: "03:45:34",
    icon: <ClockIcon />,
    asChip: false,
  },
  {
    key: "Call Reason",
    value: "General Message",
    icon: <PhoneIcon />,
    asChip: true,
  },
];

export const CallDetail = () => {
  return (
    <div className="w-full">
      <div className="w-full [background:#FFFFFF] shadow-[0px_4px_10px_rgba(119,153,168,0.15)] pt-6 pb-4 px-6 rounded-lg flex items-center justify-between space-x-8">
        {CallDetails.map((detail) => (
          <div className="flex flex-col flex-1" key={detail.key}>
            <span className="font-normal text-xs leading-4 text-gray-800 mb-2 flex gap-[8px]">
              {detail?.icon && <span>{detail.icon}</span>}
              {detail.key}
            </span>
            <span
              className={
                detail.asChip
                  ? "flex justify-center items-center [background:#E5E7EB] px-3 py-1.5 rounded-[96px] max-w-fit font-medium text-xs leading-4 text-gray-800"
                  : "font-medium text-sm leading-5 text-gray-800"
              }
            >
              {detail.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
