import { styles } from "./styles";
import { Text } from "react-native";
import { useEffect, useState } from "react";

export function LoadingMessage() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <Text style={styles.text}>{dots}</Text>
  );
};