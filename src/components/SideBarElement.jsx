import { IoIosMenu } from "react-icons/io";
import { nanoid } from "nanoid";
import { useReactFlow } from "@xyflow/react";
function SideBarElement({ icon: Icon, text, type, onDragStart }) {
  const { setNodes } = useReactFlow();

  function createNewNode() {
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: nanoid(),
        type: type,
        position: { x: 100, y: 300 },
      },
    ]);
  }
  return (
    <div
      className="flex z-40 gap-14 border border-gray-300 cursor-pointer p-2 rounded-lg items-center"
      onClick={createNewNode}
      onDragStart={(event) => onDragStart(event, "inputType")}
      draggable
    >
      <div className="flex gap-2 flex-1 items-center">
        <Icon />
        <p>{text}</p>
      </div>
      <IoIosMenu className="text-gray-400" />
    </div>
  );
}

export default SideBarElement;
