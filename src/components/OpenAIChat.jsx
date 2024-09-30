import { useChat } from "../Providers/ChatProvider";
import { toast } from "sonner";
import { IoPaperPlaneOutline } from "react-icons/io5";
import ChatIntro from "./ChatIntro";
import { useState } from "react";
import Markdown from "react-markdown";
// const API_BASE = "https://api.openai.com/v1/chat/completions";

function OpenAIChat() {
  const {
    apiKey,
    apiBase,
    maxTokens,
    temperature,
    inputQuery,
    handleInputQuery,
  } = useChat();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  async function fetchOpenAIResponse() {
    try {
      const res = await fetch(`${apiBase}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: model,
          messages: [{ role: "user", content: input }],
          max_tokens: maxTokens,
          temperature: temperature,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setOutput(data.choices[0].message.content);
      // setOutput(
      //   "The sun peeks, golden, bright, Over mountains, bathed in light.Sleepy clouds, in hues of rose, Slowly wake, as morning grows. Dewdrops gleam on grass so green, Birdsong fills the air, serene. A gentle breeze, a whispered sigh, As nature wakes beneath the sky. Hopeful heart, with joy you soar, A brand new day, to live once more"
      // );
      setInput("");
    } catch (error) {
      toast("Cant fetch response", {
        position: "top-right",
        className:
          "bg-red-500 flex gap-2 text-lg items-start text-white rounded-xl p-3",
        description: error.message,
      });
      console.error("Error:", error);
    }
  }

  const handleSubmit = (e) => {
    handleInputQuery(input);
    e.preventDefault();
    fetchOpenAIResponse();
  };

  return (
    <div className="w-full flex mt-10 overflow-auto flex-col flex-grow justify-between items-center">
      {output ? (
        <div className="flex text-lg flex-col gap-6 p-4 w-full">
          <div className="flex gap-10 items-start mx-10">
            <span className="rounded-full text-white px-3 py-1 border bg-[#b0b3fc]">
              S
            </span>
            <p className="">{inputQuery}</p>
          </div>
          <div className="flex gap-10 items-start w-fit mx-7 bg-gray-50 border rounded-3xl p-4">
            <span className="rounded-full bg-blue-100 p-1 text-sm mt-4">
              ✍
            </span>
            <Markdown className="leading-loose">{output}</Markdown>
          </div>
        </div>
      ) : (
        <ChatIntro />
      )}
      <form
        onSubmit={handleSubmit}
        className="w-[90%] border flex justify-center gap-3 shadow-[0px_0px_7px_rgba(0,0,0,0.12)] pr-4 rounded-xl overflow-hidden items-center"
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
  );
}

export default OpenAIChat;
