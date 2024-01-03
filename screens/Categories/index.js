import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native";

const Categories = ({
  navigation
}) => {
  const categories = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration", "furniture", "tops", "womens-dresses", "womens-shoes", "mens-shirts", "mens-shoes", "mens-watches", "womens-watches", "womens-bags", "womens-jewellery", "sunglasses", "automotive", "motorcycle", "lighting"];
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        {categories.map((category, index) => <TouchableOpacity key={index} style={styles.listItem} onPress={() => navigation.navigate("Category", {
        category
      })}>
            <Text style={styles.listItemText}>{category}</Text>
          </TouchableOpacity>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf9f9"
  },
  listItem: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  listItemText: {
    fontSize: 18,
    color: "#333"
  }
});
export default Categories;