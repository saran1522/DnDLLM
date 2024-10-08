import { useCallback, useMemo, useState } from "react";
import InputNode from "../components/InputNode";
import LlmNode from "../components/LlmNode";
import OutputNode from "../components/OutputNode";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  ReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ChatIcon from "../components/ChatIcon";

const initialNodes = [
  {
    id: "1",
    type: "inputType",
    position: { x: 220, y: 100 },
  },
  {
    id: "2",
    type: "llmType",
    position: { x: 570, y: 60 },
  },
  {
    id: "3",
    type: "outputType",
    position: { x: 880, y: 100 },
  },
];

const initialEdges = [
  { id: "1-2", source: "1", target: "2", animated: true },
  { id: "2-3", source: "2", target: "3", animated: true },
];

function HomePage() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const nodeTypes = useMemo(
    () => ({ inputType: InputNode, outputType: OutputNode, llmType: LlmNode }),
    []
  );

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div className="h-screen z-0 w-full bg-white text-black overflow-hidden">
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          // fitView
        >
          <Background />
          <Controls />

          <Navbar />
          <div className=" p-4 flex justify-between items-center">
            <Sidebar />
          </div>
          <ChatIcon />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}

export default HomePage;
