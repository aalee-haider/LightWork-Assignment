import { BreadcrumbSlashIcon } from "@/assets/icons/BreadcrumbSlashIcon";
import { LeftArrowIcon } from "@/assets/icons/LeftArrowIcon";
import { Button } from "@/components/ui/button";

export default function HeaderAiAssistant() {
  return (
    <div className="flex gap-[24px] ml-[53px] mt-[12px] pl-[32px] pt-[24px] pb-[16px] items-center bg-white border-b-[1px] border-[#E5E7EB] border-solid">
      <Button
        variant="secondary"
        className="flex flex-row items-center justify-between  gap-1 px-2 py-1 h-[28px] rounded-3xl"
      >
        <LeftArrowIcon />
        <p className="font-medium text-sm leading-[14px] flex items-center text-center text-[#666D80]">
          Back
        </p>
      </Button>

      <div className="flex items-center gap-[6px]">
        <p className="font-normal text-sm leading-[17px] text-zinc-500">Home</p>
        <BreadcrumbSlashIcon />
        <p className="font-normal text-sm leading-[17px] text-zinc-500">
          AI Assistant
        </p>{" "}
        <BreadcrumbSlashIcon />
        <p className="font-normal text-sm leading-[17px] text-[#09090B]">
          Call Detail
        </p>
      </div>
    </div>
  );
}
