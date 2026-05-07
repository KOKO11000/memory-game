import { Link } from "react-router";
import Cards from "../compos/game/Cards";
import Timer from "../compos/game/Timer";
import { useGame } from "../hook/useGame";

export default function Game() {
  const { cards, clickCard, move } = useGame();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-10 pt-10">
      <p className="text-4xl font-extrabold font-sans ">
        Find the 2 cards that match
      </p>
      <div className="flex gap-6">
        <div>{<Timer />}</div>
        <Link
          className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-102"
          to={"/"}
        >
          Exit {"->"}{" "}
        </Link>
        <button
          onClick={() => window.location.reload()}
          className="text-3xl hover:animate-spin "
        >
          ↻
        </button>
      </div>
      <div className="font-bold text-3xl border rounded  shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)] bg-gray-400 px-3 py-1">
        {move}
      </div>

      <div className="w-90 h-screen items-center cursor-pointer border-2 p-2 mb-10 border-blue-900 bg-gradient-to-r from-blue-300 via-white to-blue-300 shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)]">
        <div className="grid grid-cols-5 grid-rows-4 justify-items-center gap-2 ">
          {cards.map((c, i) => (
            <Cards card={c} clickCard={() => clickCard(i)} />
          ))}
        </div>
      </div>
    </div>
  );
}
