import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Man from "../components/Animated/Man";
function FavoritesScreen() {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ marginTop: 45 }}>
        <Man />
      </View>
      <View style={styles.centeredContent}>
        <Text style={styles.title1}>Personalize your Feedly</Text>
        <Text style={styles.title}>
          Keep with the topics, feeds, and trends that matter to you. All in one
          place.
        </Text>
      </View>
    </ScrollView>
  );
}
export default FavoritesScreen;


const styles = StyleSheet.create({
   centeredContent: {
    display: "flex",
    alignItems: "center",
    // marginTop: 290,
  },
  title1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "tomato",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
  },
});
