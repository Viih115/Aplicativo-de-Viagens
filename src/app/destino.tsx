import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function Destino() {
  const { nome, pais, preco, dias, categoria } =
    useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>← Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{nome}</Text>
      </View>

      {/* Imagem principal */}
      <Image
  source={{
    uri: "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltcfc6b43976428fbc/6809096142b2cad8807c3cee/BCC-2025-EXPLORER-BALI-BEACHES-HEADER_MOBILE.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart"
  }}
  style={styles.image}
/>

      {/* Indicador */}
      <View style={styles.dots}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* Informações */}
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.nome}>🌴 {nome}</Text>

          <View style={styles.rating}>
            <Text style={styles.ratingText}>⭐ 4.8</Text>
          </View>
        </View>

        <Text style={styles.location}>
          📍 {pais} - Ásia
        </Text>

        <View style={styles.tags}>
          <View style={styles.tagOrange}>
            <Text style={styles.tagText}>
              💰 R$ {preco}
            </Text>
          </View>

          <View style={styles.tagOrange}>
            <Text style={styles.tagText}>
              ⏰ {dias} dias
            </Text>
          </View>

          <View style={styles.tagBorder}>
            <Text style={styles.tagBorderText}>
              {categoria}
            </Text>
          </View>
        </View>

        {/* Sobre */}
        <Text style={styles.sectionTitle}>
          Sobre o destino
        </Text>

        <Text style={styles.description}>
          Ilha dos deuses, Bali combina praias
          paradisíacas, templos ancestrais e
          terraços de arroz deslumbrantes.
          O espírito balinês de harmonia é
          contagiante e transformador.
        </Text>

        {/* Pontos turísticos */}
        <Text style={styles.sectionTitle}>
          🗺️ Pontos turísticos
        </Text>

        <View style={styles.place}>
          <Text>• Templo Tanah Lot</Text>
        </View>

        <View style={styles.place}>
          <Text>• Ubud</Text>
        </View>

        <View style={styles.place}>
          <Text>• Seminyak Beach</Text>
        </View>

        <View style={styles.place}>
          <Text>• Tegallalang</Text>
        </View>

        {/* Botão */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            ✈ Adicionar à viagem
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F0EE",
  },

  header: {
    backgroundColor: "#E65A1C",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },

  backButton: {
    marginBottom: 10,
  },

  backText: {
    color: "#FFF",
    fontWeight: "600",
  },

  title: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "bold",
  },

  image: {
    width: "100%",
    height: 250,
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: "#CCC",
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: "#E65A1C",
  },

  infoContainer: {
    padding: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  nome: {
    fontSize: 30,
    fontWeight: "bold",
  },

  rating: {
    backgroundColor: "#F39C12",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },

  ratingText: {
    color: "#FFF",
    fontWeight: "bold",
  },

  location: {
    marginTop: 5,
    color: "#666",
  },

  tags: {
    flexDirection: "row",
    marginTop: 15,
    gap: 10,
    flexWrap: "wrap",
  },

  tagOrange: {
    backgroundColor: "#E67E22",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },

  tagText: {
    color: "#FFF",
    fontWeight: "600",
  },

  tagBorder: {
    borderWidth: 1,
    borderColor: "#E65A1C",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },

  tagBorderText: {
    color: "#E65A1C",
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
  },

  description: {
    color: "#666",
    lineHeight: 22,
  },

  place: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#E65A1C",
    padding: 18,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 30,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});