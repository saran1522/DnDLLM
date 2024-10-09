import { useModelDetails } from "../Contexts/LLMModelContext";
import { toast } from "sonner";
import { IoPaperPlaneOutline } from "react-icons/io5";
import ChatIntro from "./ChatIntro";
import { useState } from "react";
import Markdown from "react-markdown";
import Groq from "groq-sdk";

function AIChat() {
  const {
    apiKey,
    temperature,
    inputQuery,
    handleInputQuery,
    newChat,
    handleNewChat,
    model,
  } = useModelDetails();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  async function getResponse() {
    const groq = new Groq({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true,
    });

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: input,
          },
        ],
        model: model,
        temperature: Number(temperature),
      });
      setOutput(chatCompletion.choices[0]?.message?.content);
    } catch (error) {
      toast("Can't fetch response", {
        position: "top-right",
        className:
          "bg-red-500 flex gap-2 h-72 overflow-auto text-lg items-start text-white rounded-xl p-3",
        description: error.message,
      });
      console.error("Error:", error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInputQuery(input);
    setInput("");
    handleNewChat(false);
    getResponse();
  };

  return (
    <div className="w-full h-4/5 max-h-full flex flex-col justify-between gap-0 items-center">
      {!newChat && output ? (
        <div className="flex max-w-full  h-3/4 max-h-3/4 overflow-auto text-lg flex-col gap-6 p-4 w-full">
          <div className="flex gap-10 items-start mx-10">
            <span className="rounded-full text-white px-3 py-1 border bg-[#b0b3fc]">
              S
            </span>
            <p className="">{inputQuery}</p>
          </div>
          {output && (
            <div className="flex gap-10 items-start w-fit mx-7 bg-gray-50 border rounded-3xl p-4">
              <span className="rounded-full bg-blue-100 p-1 text-sm mt-4">
                ✍
              </span>
              <Markdown className="leading-loose">{output}</Markdown>
            </div>
          )}
        </div>
      ) : (
        <ChatIntro />
      )}
      <div className="h-1/4 w-full pt-2">
        <form
          onSubmit={handleSubmit}
          className="w-[90%]  border flex mx-auto justify-center gap-3 shadow-[0px_0px_7px_rgba(0,0,0,0.12)] pr-4 rounded-xl overflow-hidden items-center"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-[90%] p-5 flex-grow focus-visible:outline-none"
            placeholder="Type Something..."
          />
          <button className="p-2 rounded-lg bg-green-500 cursor-pointer text-white">
            <IoPaperPlaneOutline size={20} className="" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default AIChat;
