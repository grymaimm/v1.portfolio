import { useMemo } from "react";
import { Highlighter } from "../magicui/highlighter";

const getRandomColor = () => {
  return `hsl(${Math.floor(Math.random() * 360)}, 80%, 50%)`;
};

export const Highlight = ({ children }) => {
  const color = useMemo(() => getRandomColor(), []);

  return (
    <Highlighter action="underline" color={color} isView={true}>
      {children}
    </Highlighter>
  );
};
