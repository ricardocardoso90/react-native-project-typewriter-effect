import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { View, TextInput, FlatList, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { Message, MessageProps } from "@/components/Message";
import { LoadingMessage } from "@/components/LoadingMessage";

type Feedback = {
  text: string;
  type: "loading" | "typing";
};

export function Home() {
  const [input, setInput] = useState("");
  const [isMyTurn, setIsMyTurn] = useState(true);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [feedback, setFeedback] = useState<null | Feedback>(null);

  async function sendMessage() {
    if (!input.trim()) return;

    setMessages((prev) => {
      return (
        [...prev, { id: Date.now().toString(), text: input, user: "me" }]
      );
    });

    setInput("");
    setIsMyTurn(false);
    setFeedback({ type: "loading", text: "" });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Message message={item} />}
        style={styles.messages}
        ListFooterComponent={() => feedback?.type === "loading" ? <LoadingMessage /> : null}
      />

      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#C4C4C4"
        />

        <TouchableOpacity style={styles.button} onPress={sendMessage}>
          <Feather name="send" size={22} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};