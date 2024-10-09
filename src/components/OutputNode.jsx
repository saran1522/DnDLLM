import { LuFileOutput } from "react-icons/lu";
import NodeContent from "./NodeContent";
import { useModelDetails } from "../Contexts/LLMModelContext";
import Markdown from "react-markdown";

function OutputNode() {
  const { sampleOutput } = useModelDetails();
  return (
    <div className="min-w-72 max-w-72">
      <NodeContent
        title="Output"
        icon={LuFileOutput}
        description="Output will be shown here"
        lable="Output Response"
      >
        <label className="text-sm pb-2">Output</label>
        {!sampleOutput ? (
          <p className="text-gray-400 nodrag border border-gray-400 rounded-md p-2">
            Output will be shown here
          </p>
        ) : (
          <Markdown className="nodrag border border-gray-400 rounded-md p-2">
            {sampleOutput}
          </Markdown>
        )}
      </NodeContent>
    </div>
  );
}

export default OutputNode;
