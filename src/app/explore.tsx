import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ExploreScreen() {
  const categorias = [
    "Praias",
    "Aventura",
    "Romântico",
    "Cultural",
    "Natureza",
    "Montanhas",
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🌍 Explorar Destinos</Text>

      <Text style={styles.subtitle}>
        Descubra lugares incríveis para sua próxima viagem.
      </Text>

      <Text style={styles.sectionTitle}>
        Categorias
      </Text>

      <View style={styles.categories}>
        {categorias.map((categoria) => (
          <TouchableOpacity
            key={categoria}
            style={styles.categoryButton}
          >
            <Text style={styles.categoryText}>
              {categoria}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>
        Destinos Recomendados
      </Text>

      <View style={styles.card}>
        <Text style={styles.destination}>
          🏝️ Bali
        </Text>

        <Text style={styles.description}>
          Praias paradisíacas e cultura única.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.destination}>
          🗼 Paris
        </Text>

        <Text style={styles.description}>
          A cidade do amor e da arte.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.destination}>
          ⛩️ Tóquio
        </Text>

        <Text style={styles.description}>
          Tecnologia e tradição em um só lugar.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.destination}>
          🏖️ Rio de Janeiro
        </Text>

        <Text style={styles.description}>
          Praias famosas e belas paisagens.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F0EE",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#E65A1C",
    marginBottom: 10,
  },

  subtitle: {
    color: "#666",
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 25,
  },

  categoryButton: {
    backgroundColor: "#E65A1C",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },

  categoryText: {
    color: "#FFF",
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },

  destination: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },

  description: {
    color: "#666",
  },
});