import * as React from "react";
import {Text,View,ScrollView,StyleSheet,TouchableOpacity,Button} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import for navigation
import GreenBtn from "../components/Animated/GreenBtn";
import AddCategoryScreen from "./AddCategories";
function HomeScreen() {
  const navigation = useNavigation();
 
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.centeredContent}>
        <Text style={styles.title1}>Personalize your Feedly</Text>
        <Text style={styles.title}>
          Keep with the topics, feeds, and trends that matter to you. All in one
          place.
        </Text>
      </View>
      <View style={styles.addBtn}>
          <GreenBtn>
            
      <Button onPress={() => navigation.navigate(AddCategoryScreen)}/>
            </GreenBtn> 
       
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1, // Make ScrollView fill the entire height
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
});
