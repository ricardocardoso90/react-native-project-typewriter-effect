import { Text, View } from "react-native"

import { styles } from "./styles"

type MessageProps = {
  id: string
  text: string
  user: "me" | "other"
};

function Message({ message }: { message: MessageProps }) {
  return (
    <View
      style={[styles.message, message.user === "me" ? styles.me : styles.other]}
    >
      <Text style={styles.text}>{message.text}</Text>
    </View>
  )
};

export { MessageProps, Message };
