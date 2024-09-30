import { IoPaperPlaneOutline } from "react-icons/io5";
function ChatInput() {
  return (
    <div className="w-[90%] border flex justify-center gap-3 shadow-[0px_0px_7px_rgba(0,0,0,0.12)] pr-4 rounded-xl overflow-hidden items-center">
      <input
        type="text"
        className="w-[90%] p-5 flex-grow focus-visible:outline-none"
        placeholder="Type Something..."
      />
      <span className="p-2 rounded-lg bg-green-500 cursor-pointer text-white">
        <IoPaperPlaneOutline size={20} className="" />
      </span>
    </div>
  );
}

export default ChatInput;
