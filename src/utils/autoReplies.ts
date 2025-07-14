type Reply = {
  id: string;
  text: string;
  user: "me" | "other";
};

const autoReplies: Reply[] = [
  { id: "1", text: "Olá! Como posso ajudar?", user: "other" },
  { id: "2", text: "Claro! Estou aqui para ajudar.", user: "other" },
  { id: "3", text: "Entendi, tem mais alguma dúvida!", user: "other" },
];

export function autoReply(): Promise<Reply> {
  //SELECIONA UMA RESPOSTA ALEATÓRIA.
  const reply = autoReplies[Math.floor(Math.random() * autoReplies.length)];

  //SIMULA UMA PROMISE COM 1S DE DELAY.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reply)
    }, 1000)
  });
};
