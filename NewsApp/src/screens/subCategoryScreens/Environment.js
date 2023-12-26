import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const News = ({ route }) => {
  const { category } = route.params;
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  const fetchNewsData = async () => {
    try {
      const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_35058e2fa09da1e781886c1470c3cba09fd4b&q=all%20type%20news&country=cn,pk,ru,ae,gb&language=en&category=${category}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === 'success') {
        setNewsData(data.results);
      } else {
        console.error('Error fetching news data:', data);
      }
    } catch (error) {
      console.error('Error fetching news data:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Implement a delay function
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // Fetch data with a delay
  const fetchDataWithDelay = async () => {
    await delay(1000); // Wait for 1 second (adjust as needed)
    await fetchNewsData();
  };

  useEffect(() => {
    fetchDataWithDelay();
  }, []);

  const openLink = (url) => {
    Linking.openURL(url);
  };

  const navigateToArticle = (article) => {
    navigation.navigate('articleScreen', { article });
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

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (newsData.length === 0) {
    return (
      <View style={styles.noNewsContainer}>
        <Text>No news available for today.</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.article_id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  articleContainer: {
    margin: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noNewsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default News;
