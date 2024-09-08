export default function Navbar() {
  return (
    <div className="flex justify-between flex-shrink-1 flex-wrap">
      <div className="text-xl px-4 py-2">My Logo</div>
      <div className="flex gap-3 text-xl">
        <div className="px-4 py-2">Home</div>
        <div className="px-4 py-2">About Me</div>
        <div className="px-4 py-2">Services</div>
        <div className="px-4 py-2">Projects</div>
        <div className="px-4 py-2">Contact</div>
        <button className="bg-orange-500 text-white rounded px-4 py-2 hover:bg-orange-400 transition-colors duration-300">
          Download CV
        </button>
      </div>
    </div>
  );
}
