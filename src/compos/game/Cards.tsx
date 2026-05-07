import type { Card } from "../../hook/useGame";

type Props = {
  card: Card;
  clickCard: () => void;
};

export default function Cards({ card, clickCard }: Props) {
  return (
    <div>
      <div
        onClick={clickCard}
        className={`${card.solved ? "bg-red-400 cursor-not-allowed w-20 h-20 rounded justify-center items-center flex text-2xl z-10 font-bold shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)]" : "bg-blue-500 w-20 h-20 rounded justify-center items-center flex text-2xl font-bold cursor-pointer shadow-lg border-blue-600 shadow-[5px 2px 0] hover:bg-blue-700 shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)]"} `}
      >
        {card.faceUp ? card.number : "?"}
      </div>
    </div>
  );
}
