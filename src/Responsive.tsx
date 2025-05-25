import { useState, useEffect } from "react";

export default function Responsive() {
  const [isDark, setNotDark] = useState(true);

  function darkMode() {
    return isDark ? "bg-white text-black" : "bg-black text-white";
  }

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("darkmode");
    } else {
      html.classList.add("darkmode");
    }
  }, [isDark]);

  return (
    <>
      <div className="sm:bg-amber-200 md:bg-amber-700 text-center p-5">
        <p className="font-bold">I am using sm & md prefix</p>
      </div>

      <div className="max-[600px]:bg-blue-600 min-[320px]:text-center min-[320px]:bg-blue-400 p-5">
        <p className="font-bold">I am using arbitrary value</p>
      </div>

      <div className={`p-5 ${darkMode()}`}>
        {isDark ? "Light mode enabled!" : "Dark mode enabled!"}
      </div>

      <button
        onClick={() => setNotDark((istrue) => !istrue)}
        className="mt-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
      >
        Toggle Dark Mode
      </button>
    </>
  );
}
