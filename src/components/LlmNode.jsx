import React from "react";
import { Handle, Position } from "@xyflow/react";
import { GoDotFill } from "react-icons/go";
import { BiChip } from "react-icons/bi";
import LlmInput from "./LlmInput";
import { useChat } from "../Providers/ChatProvider";
function LlmNode() {
  const {
    model,
    apiBase,
    apiKey,
    maxTokens,
    temperature,
    handleModel,
    handleApiBase,
    handleApiKey,
    handleMaxTokens,
    handleTemperature,
  } = useChat();
  return (
    <div className="bg-white z-30 min-w-72 text-sm rounded-xl shadow-[0px_0px_10px_rgba(0,0,0,0.15)]">
      <Handle
        type="target"
        position={Position.Left}
        className="absolute border border-purple-500 bg-transparent size-2"
      />
      <div className="flex flex-col">
        <div className="flex justify-between items-center p-3 ">
          <div className="flex gap-2 items-center">
            <BiChip size="20" />
            <h3 className="font-semibold">LLM Engine</h3>
          </div>
          <GoDotFill className="text-green-600" />
        </div>
        <div className="bg-blue-50 p-2 text-gray-500">
          Please fill in the details to connect to the OpenAI API
        </div>
        <div className="flex p-3 flex-col">
          <div className="flex p-1 flex-col">
            <label htmlFor="model" className="text-sm pb-2">
              Model Name
            </label>
            <select
              name="model"
              id=""
              value={model}
              onChange={(e) => handleModel(e)}
              className="border nodrag border-gray-400 rounded-md p-2"
            >
              <option value="gpt-3">GPT-3.5</option>
              <option value="gpt-4">GPT-4</option>
              <option value="gpt-4o">GPT-4o</option>
              <option value="gpt-4o Mini">GPT-4o Mini</option>
            </select>
          </div>
          <LlmInput
            label="OpenAI API Base"
            name="apiBase"
            value={apiBase}
            setValue={handleApiBase}
          />
          <LlmInput
            label="OpenAI Key"
            name="apiKey"
            value={apiKey}
            setValue={handleApiKey}
          />
          <LlmInput
            label="Max Tokens"
            name="tokens"
            value={maxTokens}
            setValue={handleMaxTokens}
          />
          <div className="flex p-1 flex-col">
            <label htmlFor="temp" className="text-sm pb-2">
              Temperature
            </label>
            <input
              type="number"
              name="temp"
              min={0}
              max={1}
              step={0.1}
              value={temperature}
              onChange={(e) => {
                if (Number(e.target.value) > 2 || Number(e.target.value) < 0) {
                  return;
                }
                handleTemperature(e);
              }}
              className="border nodrag border-gray-400 rounded-md p-2"
            />
          </div>
        </div>
        <div className="w-full py-8 px-3 flex justify-between text-xs text-gray-500">
          <p>Input</p>
          <p>Output</p>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        className="absolute border border-blue-500 bg-transparent size-2"
      />
    </div>
  );
}

export default LlmNode;
