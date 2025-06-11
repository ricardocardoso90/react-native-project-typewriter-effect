type Reply = {
  id: string
  text: string
  user: "me" | "other"
}

const autoReplies: Reply[] = [
  { id: "1", text: "Olá! Como posso ajudar?", user: "other" },
]

export function autoReply(): Promise<Reply> {
  // Seleciona uma resposta aleatória
  const reply = autoReplies[Math.floor(Math.random() * autoReplies.length)]

  // Simula uma Promise com 1s de delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reply)
    }, 1000)
  })
}
