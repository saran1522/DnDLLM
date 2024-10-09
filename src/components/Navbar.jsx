import Run from "./Run";
import DeployButton from "./DeployButton";

function Navbar() {
  return (
    <nav className="p-3 z-20 flex justify-between shadow-[0px_0px_10px_rgba(0,0,0,0.1)] bg-white w-full ">
      <h3 className="font-bold text-green-600">OpenAGI</h3>
      <div className="flex gap-4">
        <DeployButton />
        <Run />
      </div>
    </nav>
  );
}

export default Navbar;
