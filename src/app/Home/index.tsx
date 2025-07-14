import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { View, TextInput, FlatList, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { autoReply } from "@/utils/autoReplies";

import { typeWriteEffect } from "@/utils/typeWriteEffect";
import { LoadingMessage } from "@/components/LoadingMessage";
import { Message, MessageProps } from "@/components/Message";

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

    const timestamp = Date.now();
    setMessages((prev) => [
      ...prev,
      { id: timestamp.toString(), text: input, user: "me", timestamp }
    ]);

    setInput("");
    setIsMyTurn(false);
    setFeedback({ type: "loading", text: "" });

    const reply = await autoReply();
    setFeedback({ type: "typing", text: "" });

    typeWriteEffect({
      text: reply.text,
      onUpdate: (current) => setFeedback({ type: "typing", text: current }),
      onDone: () => {
        setMessages((prev) => [...prev, reply]);
        setFeedback(null);
        setIsMyTurn(true);
      },
    });
  };

  const displayMessages: MessageProps[] =
    feedback && feedback.type === "typing"
      ? [...messages,
      {
        id: Date.now().toString(),
        text: feedback.text,
        user: "other",
      }]
      : messages;

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMessages}
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