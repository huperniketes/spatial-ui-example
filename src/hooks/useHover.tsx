import { useRef, useState } from "react";

let globalHoverCount = 0;

type UseHoverProps = {
  disablePointer?: boolean;
};

export function useHover({ disablePointer }: UseHoverProps = {}) {
  const hoverCountRef = useRef(0);
  const [hovered, setHovered] = useState(false);

  const hoverProps = {
    onPointerEnter: () => {
      if (hoverCountRef.current === 0) setHovered(true);
      hoverCountRef.current++;
      if (disablePointer) return;
      if (globalHoverCount === 0) document.body.style.cursor = "pointer";
      globalHoverCount++;
    },
    onPointerLeave: () => {
      hoverCountRef.current--;
      if (hoverCountRef.current === 0) setHovered(false);
      if (disablePointer) return;
      globalHoverCount--;
      if (globalHoverCount === 0) document.body.style.cursor = "auto";
    },
  };

  return [hovered, hoverProps] as const;
}
