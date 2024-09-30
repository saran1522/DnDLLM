import { BiChip } from "react-icons/bi";
import { LuFileInput, LuFileOutput } from "react-icons/lu";
import SideBarElement from "./SideBarElement";

function Sidebar() {
  return (
    <div className="sticky text-sm z-20 p-3 h-[calc(100vh-80px)] bg-white left-0 top-0 flex w-fit flex-col gap-2 rounded-xl shadow-[0px_0px_10px_rgba(0,0,0,0.15)]">
      <h2 className="text-xl border-b pb-4">Components</h2>
      {/* <p className="text-sm text-gray-300">Drag and Drop</p> */}
      <p className="text-sm text-gray-400">Click on any Node to drop</p>
      <div className="flex flex-col gap-2">
        <SideBarElement icon={LuFileInput} text="input" type="inputType" />
        <SideBarElement icon={BiChip} text="LLM" type="llmType" />
        <SideBarElement icon={LuFileOutput} text="output" type="outputType" />
      </div>
    </div>
  );
}

export default Sidebar;
