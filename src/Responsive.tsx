export default function Responsive() {
  return (
    <>
      <div className="sm:bg-amber-200 md:bg-amber-700 text-center p-5">
        <p className="font-bold">I am using sm & md prefix</p>
      </div>

      <div className="max-[600px]:bg-blue-600 min-[320px]:text-center min-[320px]:bg-blue-400 p-5">
        <p className="font-bold">I am using arbitrary value</p>
      </div>
    </>
  );
}
