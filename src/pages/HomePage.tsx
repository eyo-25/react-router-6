import { atom, useAtom } from "jotai";
import { useCallback } from "react";

const priceAtom = atom(10000);

const multiplyPriceAtom = atom(
  (get) => get(priceAtom) * 2, // 다른 atom 참조를 안할 경우 초기값만 써도 됨
  (get, set, arg: number) => {
    set(priceAtom, get(priceAtom) * arg);
  }
);

export function HomePage() {
  const [mutiplyPrice, setMutiplyPrice] = useAtom(multiplyPriceAtom);
  const onMutiplyHandler = useCallback(
    () => setMutiplyPrice(2),
    [setMutiplyPrice]
  );

  return (
    <>
      <h1>{mutiplyPrice}</h1>
      <button onClick={onMutiplyHandler}>multifly</button>
    </>
  );
}
