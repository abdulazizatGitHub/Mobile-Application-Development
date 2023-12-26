import React, { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import { AppContext } from "../common/context";
import GreenBtn from "../components/Animated/GreenBtn";
import AddCategoryScreen from "./AddCategories";

const HomeScreen = () => {
  const { user, userPreferences } = useContext(AppContext);
  const navigation = useNavigation(); // Initialize useNavigation hook

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Set loading to false after a brief delay (simulating API request)
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay); // Cleanup the timer on component unmount
  }, [userPreferences]);

  const navigateToArticle = (item) => {
    // Navigate to the ArticleScreen with the selected article data
    navigation.navigate('Article', { article: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToArticle(item)}>
      <View style={styles.articleContainer}>
        <Image
          source={{ uri: item.image_url || 'https://via.placeholder.com/200' }}
          style={{ width: '20%', height: 80, resizeMode: 'cover' }}
        />
        <View style={{ flex: 1 }}>
          <Text numberOfLines={2} style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>{item.title || 'No Title'}</Text>
          <Text numberOfLines={1} style={{ marginTop: 5 }}>{item.description || 'No Description'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (user) {
    if (userPreferences && userPreferences.length > 0) {
      return (
        <FlatList
          style={styles.scrollContainer}
          data={userPreferences}
          keyExtractor={(item) => item.category}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.title}>News for {item.category}:</Text>
              {/* Render news data for the category */}
              <FlatList
                data={item.data}
                renderItem={renderItem}
                keyExtractor={(item) => item.article_id}
              />
            </View>
          )}
        />
      );
    } else {
      return (
        <View style={styles.centeredContent}>
          <Text style={styles.title1}>No preferences yet.</Text>
          <Text style={styles.title1}>Personalize your Feedly</Text>
          <Text style={styles.title}>
            Keep with the topics, feeds, and trends that matter to you. All in one place.
          </Text>
        </View>
      );
    }
  } else {
    return <Text>Please LogIn First...</Text>;
  }
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  articleContainer: {
    margin: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
  },
  noNewsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  }
});
