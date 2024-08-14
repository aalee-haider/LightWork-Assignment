import { ExternalLinkIcon } from "@/assets/icons/ExternalLinkIcon";
import { MessageIcon } from "@/assets/icons/MessageIcon";
import { ProfilePlaceholderIcon } from "@/assets/icons/ProfilePlaceholderIcon";
import { Fragment } from "react/jsx-runtime";

const UserDetails = [
  {
    key: "Phone no.",
    value: "(208) 555-0112",
    icon: null,
  },
  {
    key: "Email",
    value: "debra.holt@example.com",
    icon: null,
  },
  {
    key: "Location",
    value: "Hidia Bark, London, UK",
    icon: (
      <span>
        <ExternalLinkIcon />
      </span>
    ),
  },
];

export const UserDetailsCard = () => {
  return (
    <div className="w-full !max-h-fit flex flex-col [background:#FFFFFF] shadow-[0px_4px_10px_rgba(119,153,168,0.15)] p-4 rounded-2xl">
      <h3 className="font-medium text-sm leading-5 text-[#2B2B2B] mb-6 m-0 p-0">
        Caller Details
      </h3>

      <div className="flex items-center mb-4">
        <div className="rounded-full w-12 h-12 bg-[#F3F4F6] flex items-center justify-center mr-2">
          <ProfilePlaceholderIcon />
        </div>
        <div>
          <h2 className="m-0 p-0 font-medium text-base leading-[26px] text-black">
            Holt Debra
          </h2>
          <p className="text-xs leading-4 text-gray-500">Caller #23</p>
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 mb-4">
        {UserDetails.map((detail) => (
          <Fragment key={detail.key}>
            <span className="text-xs leading-4 text-gray-500">
              {detail.key}
            </span>
            <span className="font-normal text-xs leading-4 flex">
              {detail.value}
              {detail?.icon && <span className="ml-2">{detail?.icon}</span>}
            </span>
          </Fragment>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-6">
        <div
          className="flex justify-center items-center border border-zinc-200 px-3 py-2 rounded-md border-solid;
  background: #ffffff"
        >
          <MessageIcon />
        </div>
        <div
          className="flex justify-center items-center border border-zinc-200 px-3 py-2 rounded-md border-solid;
  background: #ffffff font-medium text-sm leading-[17px] text-[#09090B]"
        >
          Visit Profile
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#E5E7EB]"></div>
    </div>
  );
};
