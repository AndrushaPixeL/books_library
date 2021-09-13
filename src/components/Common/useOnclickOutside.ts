import { RefObject, useEffect } from "react";

type AnyEvent = MouseEvent | TouchEvent;

function useOnClickOutside(
  ref: RefObject<HTMLDivElement>,
  handler: (event: AnyEvent) => void
): void {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current;

      //@ts-ignore
      if (!el || el.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };

  }, [ref, handler]);
}

export default useOnClickOutside;
