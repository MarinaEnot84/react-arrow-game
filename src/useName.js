import { useDebugValue, useState } from "react";

export const useName = () => {
  const [name] = useState("");

  useDebugValue(name ? "Has name" : "No name");

  return name;
};
