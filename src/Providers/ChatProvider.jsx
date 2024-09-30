import { createContext, useContext, useState } from "react";
import { toast } from "sonner";
import {
  IoCloseOutline,
  IoCloseCircleOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import { nanoid } from "nanoid";

const ChatContext = createContext();

function ChatProvider({ children }) {
  const [sampleInput, setSampleInput] = useState("");
  const [inputQuery, setInputQuery] = useState("");
  const [sampleOutput, setSampleOutput] = useState("");
  const [outputResponse, setOutputResponse] = useState("");
  const [model, setModel] = useState("gpt-3");
  const [apiBase, setApiBase] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [maxTokens, setMaxTokens] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [success, setSuccess] = useState(false);
  const [deployedModels, setDeployedModels] = useState([]);
  const [currentModel, setCurrentModel] = useState({});

  function handleSampleInput(e) {
    setSampleInput(e.target.value);
  }

  function handleInputQuery(value) {
    setInputQuery(value);
  }

  function handleModel(e) {
    setModel(e.target.value);
  }

  function handleApiBase(e) {
    setApiBase(e.target.value);
  }

  function handleApiKey(e) {
    setApiKey(e.target.value);
  }

  function handleMaxTokens(e) {
    setMaxTokens(e.target.value);
  }

  function handleTemperature(e) {
    setTemperature(e.target.value);
  }

  function handleSampleOutput(value) {
    setSampleOutput(value);
  }

  function handleOutputResponse(value) {
    setOutputResponse(value);
  }

  function handleSuccess() {
    setSuccess((prev) => !prev);
  }

  function handleDeployedModels() {
    const newModel = {
      id: nanoid(),
      model,
      apiBase,
      apiKey,
      maxTokens,
      temperature,
    };
    setDeployedModels((prev) => [...prev, newModel]);
    showSuccessToast(
      "Deployed successfully",
      "You can now chat with the AI Assistant!"
    );
    setCurrentModel(newModel);
  }

  function handleCurrentModel(id) {
    const model = deployedModels.find((model) => model.id === id);
    setCurrentModel(model);
  }

  function handleDeleteDeployedModel(id) {
    setDeployedModels((prev) => prev.filter((m) => m.id !== id));
  }

  function showErrorToast(description) {
    return toast("Error while running the flow", {
      description: description,
      cancel: {
        label: <IoCloseOutline />,
      },
      cancelButtonStyle: {
        color: "white",
        backgroundColor: "transparent",
        padding: "0",
      },
      icon: <IoCloseCircleOutline className="text-xl" />,
      className:
        "bg-red-500 flex gap-2 text-lg items-start text-white rounded-xl p-3",
      position: "top-right",
    });
  }

  function showSuccessToast(title, description) {
    return toast(title, {
      description: description,
      cancel: {
        label: <IoCloseOutline />,
      },
      cancelButtonStyle: {
        color: "white",
        backgroundColor: "transparent",
        padding: "0",
      },
      icon: <IoCheckmarkCircleOutline className="text-xl" />,
      className:
        "bg-green-500 flex gap-2 text-lg items-start text-white rounded-xl p-3",
      position: "top-right",
    });
  }

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
          messages: [{ role: "user", content: sampleInput }],
          max_tokens: maxTokens,
          temperature: temperature,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setSampleOutput(data.choices[0].message.content);
      return data.choices[0].message.content;
      // setSampleOutput("sample response");
      // return "sample response";
    } catch (error) {
      toast("Can't fetch response", {
        position: "top-right",
        className:
          "bg-red-500 flex gap-2 text-lg items-start text-white rounded-xl p-3",
        description: error.message,
      });
      console.error("Error:", error);
    }
  }

  async function handleRunModel(e) {
    e.preventDefault();
    if (!sampleInput) {
      showErrorToast("Please enter the input text before running the flow");
      return;
    }
    if (!model) {
      showErrorToast("Please select the model text before running the flow");
      return;
    }
    if (!apiBase) {
      showErrorToast("Please enter the API base before running the flow");
      return;
    }
    if (!apiKey) {
      showErrorToast("Please enter the API key before running the flow");
      return;
    }
    if (!maxTokens) {
      showErrorToast("Please enter the maxTokens before running the flow");
      return;
    }
    if (!temperature) {
      showErrorToast("Please select the temperature before running the flow");
      return;
    }
    const res = await fetchOpenAIResponse();
    setSuccess(true);
    if (res) {
      showSuccessToast(
        "Flow ran successfully",
        "Your workflow is ready to be deployed"
      );
    }
  }
  return (
    <ChatContext.Provider
      value={{
        sampleInput,
        sampleOutput,
        inputQuery,
        outputResponse,
        model,
        apiBase,
        apiKey,
        maxTokens,
        temperature,
        success,
        deployedModels,
        currentModel,
        handleSampleInput,
        handleSampleOutput,
        handleModel,
        handleApiBase,
        handleApiKey,
        handleMaxTokens,
        handleTemperature,
        handleCurrentModel,
        handleSuccess,
        handleRunModel,
        handleInputQuery,
        handleOutputResponse,
        handleDeployedModels,
        handleDeleteDeployedModel,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}

export { ChatProvider, useChat };
