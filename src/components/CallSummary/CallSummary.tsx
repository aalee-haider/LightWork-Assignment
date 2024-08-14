import { PlayIcon } from "@/assets/icons/PlayIcon";
import { SoundWave } from "@/assets/icons/SoundWave";

function CallSummary() {
  return (
    <div className="flex flex-col gap-[16px] ">
      <p className="font-medium text-sm leading-5 text-[#2B2B2B]">
        Call Summary
      </p>
      <div className="flex items-start p-2 rounded-lg bg-white">
        <p className="font-normal text-sm leading-[18px] text-gray-600">
          • Holt Debra said hello
        </p>
      </div>
      <div className="flex flex-col justify-center items-start p-4 rounded-lg bg-black gap-[16px]">
        <p className="font-medium text-sm leading-[17px] text-white">
          Call Recording
        </p>
        <div className="flex items-center gap-[12px] w-full">
          <PlayIcon color="#00000" />
          <SoundWave className={"flex-1"} />
          <p className="font-medium text-xs leading-4 text-white">03:05</p>
        </div>
      </div>
    </div>
  );
}

export default CallSummary;
