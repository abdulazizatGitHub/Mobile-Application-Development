import React, { useContext } from "react";
import { Text, View, ScrollView, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../common/context";
import GreenBtn from "../components/Animated/GreenBtn";
import AddCategoryScreen from "./AddCategories";

function HomeScreen() {
  const navigation = useNavigation();
  const { user } = useContext(AppContext); // Get user data from the context

 if(user) {
  return (
    <ScrollView style={styles.scrollContainer}>
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
  return <Text>Please LogIn First...</Text>
 }
}

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  centeredContent: {
    display: "flex",
    alignItems: "center",
    marginTop: 290,
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
  addBtn: {
    display: "flex",
    marginLeft: 230,
    marginTop: 155,
  },
  loginMessage: {
    fontSize: 16,
    color: "tomato",
    textAlign: "center",
  },
});
