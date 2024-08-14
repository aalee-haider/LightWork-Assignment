export const CallTranscript = () => {
  return (
    <div className="w-full">
      <h3 className="m-0 p-0 font-medium text-sm text-[#09090B] mb-6">
        Call Transcript
      </h3>
      <div className="flex flex-col">
        <div className="flex self-end  font-normal text-sm leading-[18px] text-gray-600 w-fit max-w-[51%] flex-col">
          <p className="mb-1 [background:#FFFFFF] px-3 py-2 rounded-[16px_16px_0px_16px] border-solid border-[#DEE0E3]">
            Hello, thank you for calling LightWork. I am the firm’s virtual
            assistant. How can I assist you today?
          </p>
          <p className="text-[10px] leading-[14px] text-right text-gray-600 opacity-[0.66]">
            AI Assistant - 11:51 AM
          </p>
        </div>

        <div className="flex flex-col mb-[42px]">
          <p className="[background:#E5E7EB] px-3 py-2 rounded-[16px_16px_16px_0px] max-w-[51%] w-fit mb-1">
            Hello
          </p>
          <p className="text-[10px] leading-[14px] text-left text-gray-600 opacity-[0.66]">
            Holt Debra - 11:51 AM
          </p>
        </div>

        <div className="flex self-end font-normal text-sm leading-[18px] text-gray-600 w-fit max-w-[51%] flex-col">
          <p className="mb-1 [background:#FFFFFF] px-3 py-2 rounded-[16px_16px_0px_16px] border-solid border-[#DEE0E3]">
            Hi there!
          </p>
          <p className="text-[10px] leading-[14px] text-right text-gray-600 opacity-[0.66]">
            AI Assistant - 11:51 AM
          </p>
        </div>
      </div>
    </div>
  );
};
