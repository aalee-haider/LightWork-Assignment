import { CallDetail } from "@/components/CallDetails/CallDetails";
import CallSummary from "@/components/CallSummary/CallSummary";
import { CallTranscript } from "@/components/CallTranscript/CallTranscript";
import { UserDetailsCard } from "@/components/UserDetailCard/UserDetailCard";
import AiAssistantTemplate from "@/templates/AiAssistantTemplate/AiAssistantTemplate";
function AIAssistant() {
  return (
    <AiAssistantTemplate>
      <div className="w-full h-full flex">
        <div className="flex flex-col gap-[24px] flex-1 pr-[37px]">
          <div className="flex flex-col gap-[24px]">
            <p className="font-medium text-lg leading-[26px] text-black mt-[4px]">
              Call Detail
            </p>
            <CallDetail />
          </div>
          <div className="border p-4 rounded-2xl border-solid">
            <CallSummary />
            <hr className="mt-[24px] mb-[24px]" />
            <CallTranscript />
          </div>
        </div>

        <div className="w-[36%] bg-white p-[24px] pt-[12px] justify-center">
          <UserDetailsCard />
        </div>
      </div>
    </AiAssistantTemplate>
  );
}

export default AIAssistant;
