import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#37343A",
    paddingVertical: 52,
    paddingHorizontal: 24,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  input: {
    flex: 1,
    height: 42,
    backgroundColor: "#454248",
    color: "#FFF",
    borderRadius: 8,
    padding: 8,
  },
  messages: {
    flex: 1,
    marginBottom: 10,
  },
  button: {
    height: 42,
    width: 42,
    backgroundColor: "#454248",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
})
