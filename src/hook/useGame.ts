import { useEffect, useRef, useState } from "react";
import { useCard } from "./useCard";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export type Card = {
  number: number;
  image?: string;
  color?: string;
  faceUp: boolean;
  solved: boolean;
};

export const useGame = () => {
  const { deckCards } = useCard();
  const [clickCount, setClickCount] = useState<number>(0);
  const [move, setMove] = useState<number>(0);
  const navigate = useNavigate()

  const [cards, setCards] = useState<Card[]>(
    deckCards.map((card) => ({ number: card, faceUp: false, solved: false })),
  );

  function flipCard(index: number) {
    const newCards = [...cards];
    newCards[index].faceUp = true;
    setCards([...newCards]);
  }

  function clickCard(index: number) {
    const newClickCount = clickCount + 1;
    if (cards[index].faceUp || newClickCount > 2) return;
    setMove(move + 1);

    flipCard(index);
    setClickCount(newClickCount);

    if (newClickCount === 2) {
      const faceUp: Card[] = cards.filter((c) => c.faceUp && !c.solved);

      const matched = faceUp[0].number === faceUp[1].number;
      setTimeout(
        () => {
          setCards(
            cards.map((c) =>
              (matched && c.faceUp) || c.solved
                ? { ...c, faceUp: true, solved: true }
                : { ...c, faceUp: false },
            ),
          );
          setClickCount(0);
        },
        matched ? 1 : 1000,
      );
    }
  }

  useEffect(() => {
    const win = cards.filter((c) => c.solved).length === cards.length;

    if (win) {
      const score = move;

      const bestScores: number[] = JSON.parse(
        localStorage.getItem("bestScores") || "[]",
      );

      bestScores.push(score);

      bestScores.sort((a, b) => a - b);

      const topScores = bestScores.slice(0, 5);

      localStorage.setItem("bestScores", JSON.stringify(topScores));

      Swal.fire({
        title: "🏆 New High Score!",
        html: `
    <p>You solved the game in <b>${move}</b> moves</p>
  `,
        icon: "success",
        background: "#111827",
        color: "#fff",
        confirmButtonColor: "#ef4444",
        
      });
      navigate("/")
    }
  }, [cards]);

  return { cards, clickCard, move };
};
