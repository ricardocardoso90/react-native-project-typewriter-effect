import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { View, TextInput, FlatList, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { Message, MessageProps } from "@/components/Message";

type Feedback = {
  text: string;
  type: "loading" | "typing";
};

export function Home() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isMyTurn, setIsMyTurn] = useState(true);

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Message message={item} />}
        style={styles.messages}
      />

      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#C4C4C4"
        />

        <TouchableOpacity style={styles.button}>
          <Feather name="send" size={22} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};