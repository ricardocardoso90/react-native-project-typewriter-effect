import { useState } from "react"
import { View, TextInput, FlatList, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"

import { Message, MessageProps } from "@/components/Message"

import { styles } from "./styles"

type Feedback = {
  type: "loading" | "typing"
  text: string
}

export function Home() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<MessageProps[]>([
    { id: "1", text: "Oi, tudo bem?", user: "me" },
    { id: "2", text: "Oi, tudo bem?", user: "other" },
  ])

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
  )
}
