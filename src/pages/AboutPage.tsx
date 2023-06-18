import { atom, useAtomValue, useAtom } from "jotai";

const priceAtom = atom(10000);
const discountAtom = atom(0.2); //20프로 할인률

// priceAtom에서 계산된 값으로 생성
const dublePriceAtom = atom((get) => get(priceAtom) * 2);
const discountPriceAtom = atom(
  (get) => get(priceAtom) * (1 - get(discountAtom))
);

export function AboutPage() {
  const [price, setPrice] = useAtom(priceAtom); //10000
  const dublePrice = useAtomValue(dublePriceAtom); // 20000
  const discountPrice = useAtomValue(discountPriceAtom); // 8000

  const onAddHandler = () => {
    setPrice((price) => price + 500);
  };
  return (
    <>
      <h1>{price}</h1>
      <button onClick={onAddHandler}>add</button>
      <h1>{dublePrice}</h1>
      <h1>{discountPrice}</h1>
    </>
  );
}
