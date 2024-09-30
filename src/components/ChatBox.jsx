import ChatHeader from "./ChatHeader";
import OpenAIChat from "./OpenAIChat";

function ChatBox() {
  return (
    <div className="sticky z-20 items-center shadow-[0px_0px_5px_rgba(0,0,0,0.1)] pb-5 w-5/6 bg-white left-0 top-0 flex flex-col justify-between rounded-xl">
      <ChatHeader />
      <OpenAIChat />
    </div>
  );
}

export default ChatBox;
