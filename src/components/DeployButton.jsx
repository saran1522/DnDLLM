import { useState } from "react";
import { useModelDetails } from "../Contexts/LLMModelContext";
import { IoCloseOutline } from "react-icons/io5";

function DeployButton() {
  const [showModal, setShowModal] = useState(false);
  const {
    handleDeployedModels,
    handleDeleteDeployedModel,
    deployedModels,
    success,
    currentModel,
  } = useModelDetails();
  return (
    <>
      {deployedModels.length > 0 ? (
        <button
          className={`${
            success ? "bg-red-600" : "bg-gray-500 opacity-50 cursor-not-allowed"
          } z-40 px-3 py-1 text-white text-sm rounded-md`}
          onClick={() => setShowModal(true)}
        >
          Undeploy
        </button>
      ) : (
        <button
          disabled={!success}
          className={`${
            success ? "bg-black" : "bg-gray-500 opacity-50 cursor-not-allowed"
          } z-40 text-white text-sm px-3 py-1 rounded-md`}
          onClick={() => handleDeployedModels()}
        >
          Deploy
        </button>
      )}
      {showModal && (
        <div
          className="bg-[#02020255] h-screen w-full z-50 fixed top-0 left-0 flex justify-center items-center"
          onClick={() => setShowModal(false)}
        >
          <div className="bg-white items-end rounded-xl p-4 flex flex-col">
            <IoCloseOutline
              className="cursor-pointer"
              onClick={() => setShowModal(false)}
            />
            <h3 className="font-semibold w-full mb-2">
              Are you sure you want to undeploy?
            </h3>
            <p>
              Undeploying will stop the app and make it unavailable to users
            </p>
            <button
              className="bg-red-500 w-fit mt-10 text-white px-3 py-1 rounded-md"
              onClick={() => handleDeleteDeployedModel(currentModel.id)}
            >
              Undeploy
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DeployButton;
