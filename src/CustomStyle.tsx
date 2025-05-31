export default function CustomStyle() {
  return (
    <>
      <h1>Custome Style</h1>
      <div className="flex-col">
        <p>In-line tyle</p>
        <p className="card">Tailwind config</p>
        <div>
          <h1>Check box style</h1>
          <label>
            <input type="checkbox" className="m-1" checked />
            Browser default
          </label>
          <label>
            <input type="checkbox" className="accent-pink-400 m-1" checked />
            Accent style
          </label>
        </div>
        <h1>Fluid Texts</h1>
        <div>
          <h3 className="sm:text-7xl text-2xl text-piggy">
            Text 2 size adjustment
          </h3>
          <h1 className="text-[min(10vw,70px)]">Fluid text</h1>
        </div>
      </div>
      <h1>File</h1>
      <div>
        <label className="my-4 block">
          <input type="file" className="" />
        </label>
      </div>
      <h1>Highlight</h1>
      <div className="selection:bg-amber-700 selection:text-amber-50">
        <h3>Highlight me</h3>
      </div>

      <h1>Less JS</h1>
      <div>
        <details></details>
      </div>
    </>
  );
}
