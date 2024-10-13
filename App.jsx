import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper'; // Assuming you're using react-native-paper for Card

const App = () => {
  const [productData, setProductData] = useState([]);

  // Fetch data from API
  const fetchData = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const response = await data.json();
      setProductData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Products</Text>
        {productData.map((product) => (
          // Return the JSX inside the map function
          <Card key={product.id} style={styles.card}>
            <Card.Content>
              <Card.Cover source={{ uri: product.image }} style={styles.image} />
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.content}>${product.price}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  text: {
    color: '#888',
    textAlign: 'center',
    fontSize: 20, // Changed to fontSize instead of fontWeight for size
    fontWeight: 'bold', // Added bold weight
    marginBottom: 20, // Space between the heading and the cards
  },
  container: {
    padding: 10,
  },
  card: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
  },
  image: {
    height: 200, // Set a height for the image
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    color: '#888',
  },
});

export default App;
