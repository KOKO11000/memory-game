
const AMOUNT_CARDS: number = 10;
const CARDS: number[] = [];
for (let i: number = 1; i <= AMOUNT_CARDS; i++) {
  CARDS.push(i);
}

export const useCard = () => {
  function shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);

      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;
  }

  return { deckCards: shuffle([...CARDS, ...CARDS]) };
};
