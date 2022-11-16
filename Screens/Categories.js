import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import categories from "../config/categories";

const Categories = ({ onChange }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const handlePress = (id) => {
    setActiveCategoryId(id);
    onChange(id);
  };
  return (
    <FlatList
      horizontal={true}
      contentContainerStyle={{ marginVertical: 10 }}
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={() => handlePress(item.id)}
        >
          <Text
            style={[
              { color: "white", fontSize: 20 },
              activeCategoryId === item.id && { color: "#D17842" },
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
