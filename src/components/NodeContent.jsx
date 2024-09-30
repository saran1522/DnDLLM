import { Handle, Position } from "@xyflow/react";
import { GoDotFill } from "react-icons/go";
function NodeContent({ title, icon: Icon, description, label, children }) {
  return (
    <div className="bg-white text-sm rounded-xl shadow-[0px_0px_10px_rgba(0,0,0,0.15)]">
      <div className="flex flex-col">
        <div className="flex justify-between items-center p-3 ">
          <div className="flex gap-2 items-center">
            <Icon />
            <h3 className="font-semibold">{title}</h3>
          </div>
          <GoDotFill className="text-green-600" />
        </div>
        <div className="bg-blue-50 p-2 text-gray-500">{description}</div>
        <div className="flex p-3 flex-col">{children}</div>
        <div
          className={`w-full py-8 px-3 flex text-xs text-gray-500 ${
            title === "Input" ? "justify-end" : ""
          }`}
        >
          LLM Engine
        </div>
      </div>
      {title === "Input" ? (
        <Handle
          type="source"
          position={Position.Right}
          id="a"
          className="absolute top-52 border border-purple-500 bg-transparent size-2"
        />
      ) : (
        <Handle
          type="target"
          position={Position.Left}
          id="a"
          className="absolute top-52 border border-blue-500 bg-transparent size-2"
        />
      )}
    </div>
  );
}

export default NodeContent;
