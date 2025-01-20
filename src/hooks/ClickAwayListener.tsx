import { useEffect, RefObject } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: () => void,
  excludeRef?: RefObject<HTMLElement>
) => {
  useEffect(()=> {
    const listener = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if(!ref.current || ref.current.contains(target)) return;
      if(excludeRef?.current && excludeRef.current.contains(target)){
        return handler();
      }
    }


    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    }
  }, [ref, handler, excludeRef]);

};
