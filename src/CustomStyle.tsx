export default function CustomStyle() {
  return (
    <>
      <h1>Custome Style</h1>
      <div className="flex-center">
        <p>In-line tyle</p>
        <p className="card">Tailwind config</p>
        <div>
          <label>
            <input type="checkbox" className="accent-pink-400" checked />
            Browser default
          </label>
        </div>
      </div>
    </>
  );
}
