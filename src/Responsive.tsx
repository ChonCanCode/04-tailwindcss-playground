import { useState, useEffect } from "react";

export default function Responsive() {
  const [notDark, setNotDark] = useState(true);

  function darkMode() {
    return notDark ? "bg-white text-black" : "bg-black text-white";
  }

  // Toggle the dark class on <html> element
  useEffect(() => {
    const html = document.documentElement;
    if (notDark) {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }
  }, [notDark]);

  return (
    <>
      <div className="sm:bg-amber-200 md:bg-amber-700 text-center p-5">
        <p className="font-bold">I am using sm & md prefix</p>
      </div>

      <div className="max-[600px]:bg-blue-600 min-[320px]:text-center min-[320px]:bg-blue-400 p-5">
        <p className="font-bold">I am using arbitrary value</p>
      </div>

      <div className={`p-5 ${darkMode()}`}>
        {notDark ? "Light mode enabled!" : "Dark mode enabled!"}
      </div>

      <button
        onClick={() => setNotDark((prev) => !prev)}
        className="mt-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
      >
        Toggle Dark Mode
      </button>
    </>
  );
}
