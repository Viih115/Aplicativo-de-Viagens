import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";

const destinos = [
  {
    id: "1",
    nome: "Paris",
    pais: "França",
    preco: 8500,
    emoji: "🗼",
  },
  {
    id: "2",
    nome: "Bali",
    pais: "Indonésia",
    preco: 6500,
    emoji: "🌴",
  },
  {
    id: "3",
    nome: "Tóquio",
    pais: "Japão",
    preco: 12000,
    emoji: "⛩️",
  },
  {
    id: "4",
    nome: "Nova York",
    pais: "EUA",
    preco: 7800,
    emoji: "🗽",
  },
  {
    id: "5",
    nome: "Rio de Janeiro",
    pais: "Brasil",
    preco: 2800,
    emoji: "🏖️",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        Descubra o mundo
      </Text>

      <Text style={styles.title}>
        Para onde vamos? ✈️
      </Text>

      <FlatList
        data={destinos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/destino",
                params: {
                  nome: item.nome,
                  pais: item.pais,
                  preco: item.preco.toString(),
                  dias: "7",
                  categoria: "Turismo",
                },
              })
            }
          >
            <Text style={styles.emoji}>
              {item.emoji}
            </Text>

            <View>
              <Text style={styles.nome}>
                {item.nome}
              </Text>

              <Text style={styles.pais}>
                {item.pais}
              </Text>

              <Text style={styles.preco}>
                R$ {item.preco}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F0EE",
    padding: 20,
  },

  subtitle: {
    color: "#777",
    marginTop: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#E65A1C",
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  emoji: {
    fontSize: 40,
    marginRight: 15,
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
  },

  pais: {
    color: "#666",
  },

  preco: {
    color: "#E65A1C",
    fontWeight: "bold",
    marginTop: 5,
  },
});