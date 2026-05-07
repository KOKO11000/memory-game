import { Link } from "react-router";

export default function HomeComps() {
  const scores = JSON.parse(localStorage.getItem("bestScores") || "[]");
  const bestScore = Math.min(...scores);
  const [first, ...otherScores] = scores;
  // const [] = otherScores;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-center mb-8 text-red-800 animate-bounce animated">
        Welcome To Memory Game
      </h1>
      <p className="md:text-xl mt-4 mb-8 text-gray-600 text-sm lg:text-3xl">
        Click the button below to start playing!
      </p>
      <Link
        to="/game"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Game
      </Link>
      <div className="text-2xl border-b-2 border-black font-mono pt-5 font-bold">
        Best Score:
        <span className="font-extrabold  text-orange-400">{bestScore}</span>
      </div>
      {otherScores.map((s: number, i = 1) => (
        <div className="text-2xl border-b-2 border-black font-mono pt-5 font-bold">
          {i + 2} score:
          <span className="font-extrabold text-slate-600">{s}</span>
        </div>
      ))}
    </div>
  );
}
