import "./index.css";

function App() {
  return (
    <>
      <div className=" flex flex-col items-center justify-between border-amber-400 border-2 space-y-6 p-5 mt-2">
        <h1 className="">I am flexbox</h1>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-orange-500"></div>
        <div className="h-16 w-16 rounded-full bg-green-500"></div>
      </div>

      <div className="grid border-2 border-amber-500 grid-cols-4">
        <h1>I am grid</h1>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-orange-500"></div>
        <div className="h-16 w-16 rounded-full bg-green-500"></div>
      </div>
    </>
  );
}

export default App;
