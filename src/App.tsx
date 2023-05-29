function App() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-neutral-500 text-neutral-50">
      <nav className="flex h-10 w-full flex-row items-center justify-between">
        <div className="px-2">💡</div>
        <div className="px-2 text-5xl text-neutral-300">&#8801;</div>
      </nav>
      <div>
        <span className="text-3xl text-neutral-100">
          <span>FAIR | Aware</span>
        </span>
      </div>
      <div className="text-[#D8D8D8]">
        Your first step in making your data{" "}
        <span className="text-indigo-950">Findable</span>
      </div>
    </main>
  );
}

export default App;
