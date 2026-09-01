// src/app/dashboard.tsx

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Dashboard() {
  const destinations = [
    {
      id: 1,
      emoji: '🗼',
      city: 'Paris',
      country: 'França',
      rating: '4.8',
      price: 'R$ 4.200',
    },
    {
      id: 2,
      emoji: '🌴',
      city: 'Bali',
      country: 'Indonésia',
      rating: '4.9',
      price: 'R$ 5.800',
    },
    {
      id: 3,
      emoji: '⛰️',
      city: 'Machu Picchu',
      country: 'Peru',
      rating: '4.9',
      price: 'R$ 3.500',
    },
    {
      id: 4,
      emoji: '⛩️',
      city: 'Tóquio',
      country: 'Japão',
      rating: '4.7',
      price: 'R$ 6.900',
    },
    {
      id: 5,
      emoji: '🏛️',
      city: 'Santorini',
      country: 'Grécia',
      rating: '4.9',
      price: 'R$ 7.400',
    },
    {
      id: 6,
      emoji: '🌿',
      city: 'Amazônia',
      country: 'Brasil',
      rating: '4.6',
      price: 'R$ 2.200',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.greeting}>
            Olá, Noemi 👋
          </Text>

          <Text style={styles.title}>
            Para onde vamos hoje?
          </Text>

          {/* SEARCH */}
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Buscar destinos..."
              placeholderTextColor="#FFE0B2"
              style={styles.input}
            />
          </View>
        </View>

        {/* CONTENT */}
        <View style={styles.content}>
          {/* CATEGORIAS */}
          <Text style={styles.sectionTitle}>
            Categorias
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}
          >
            <TouchableOpacity
              style={[
                styles.categoryButton,
                styles.activeCategory,
              ]}
            >
              <Text style={styles.activeCategoryText}>
                Todos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>
                Praia
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>
                Montanha
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>
                Cidade
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>
                Natureza
              </Text>
            </TouchableOpacity>
          </ScrollView>

          {/* DESTINOS HEADER */}
          <View style={styles.destinationsHeader}>
            <Text style={styles.sectionTitle}>
              Destinos em alta
            </Text>

            <TouchableOpacity>
              <Text style={styles.viewAll}>
                Ver todos
              </Text>
            </TouchableOpacity>
          </View>

          {/* CARDS */}
          <View style={styles.cardsContainer}>
            {destinations.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
              >
                <Text style={styles.emoji}>
                  {item.emoji}
                </Text>

                <Text style={styles.city}>
                  {item.city}
                </Text>

                <Text style={styles.country}>
                  {item.country}
                </Text>

                <View style={styles.cardFooter}>
                  <Text style={styles.rating}>
                    ★ {item.rating}
                  </Text>

                  <Text style={styles.price}>
                    {item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },

  /* HEADER */

  header: {
    backgroundColor: '#E65100', // Laranja escuro principal
    paddingTop: 80, // Espaço ajustado para o menu do topo
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  greeting: {
    color: '#FFE0B2',
    fontSize: 14,
    marginBottom: 8,
  },

  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    width: '80%',
  },

  /* SEARCH */

  searchContainer: {
    backgroundColor: '#F57C00', // Laranja tom médio
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
  },

  input: {
    color: '#fff',
    fontSize: 16,
  },

  /* CONTENT */

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 15,
  },

  /* CATEGORIES */

  categoriesContainer: {
    marginBottom: 30,
  },

  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FFE0B2',
  },

  activeCategory: {
    backgroundColor: '#E65100', // Laranja escuro para a categoria ativa
    borderColor: '#E65100',
  },

  categoryText: {
    color: '#424242',
    fontWeight: '500',
  },

  activeCategoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  /* DESTINATION HEADER */

  destinationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  viewAll: {
    color: '#E65100', // Link em laranja
    fontWeight: '600',
  },

  /* CARDS */

  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#FFF3E0',
  },

  emoji: {
    fontSize: 55,
    textAlign: 'center',
    marginBottom: 25,
  },

  city: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },

  country: {
    color: '#777',
    marginBottom: 12,
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rating: {
    color: '#F39C12',
    fontWeight: 'bold',
  },

  price: {
    color: '#E65100', // Preço destacado em laranja
    fontWeight: 'bold',
  },
});