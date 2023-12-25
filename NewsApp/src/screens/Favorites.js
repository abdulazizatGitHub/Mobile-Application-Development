import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
import Man from "../components/Animated/Man";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../common/context";

function FavoritesScreen() {
  const navigation = useNavigation();
  const { user } = useContext(AppContext);

  // Check if the user is logged in
  if (user) {
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
  } else {
    // User is not logged in, show a different view or nothing
    return <Text>Please Login First...</Text>;
  }
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  centeredContent: {
    display: "flex",
    alignItems: "center",
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
  additionalContent: {
    marginTop: 20,
    alignItems: "center",
  },
});
