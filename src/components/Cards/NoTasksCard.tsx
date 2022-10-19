import { Image, StyleSheet, Text, View } from "react-native";

const check = require("../../../assets/big-check.png");

export function NoTasksCard() {
  return (
    <>
      <View style={styles.container}>
        <Image source={check} style={styles.image} />
        <Text style={styles.text}> Sem tasks </Text>
      </View>
      <Text style={styles.smallText}>Você é livre para aproveitar seu dia</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#266C8A",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    borderRadius: 4,
  },
  image: {
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  smallText: {
    width: 150,
    color: "white",
    fontSize: 14,
    alignSelf: "center",
    textAlign: "center",
    paddingVertical: 20,
  },
});
