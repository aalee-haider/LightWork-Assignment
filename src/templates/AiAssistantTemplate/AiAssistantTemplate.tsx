import { ReactNode } from "react";
import HeaderAiAssistant from "@/components/HeaderAiAssistant/HeaderAiAssistant";
import Sidebar from "@/components/Sidebar/Sidebar";

interface AiAssistantTemplateProps {
  children?: ReactNode; // Type for children prop
}

export default function AiAssistantTemplate({
  children,
}: AiAssistantTemplateProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <HeaderAiAssistant />
        <main className="flex-1 pl-[40px]">{children}</main>
      </div>
    </div>
  );
}
