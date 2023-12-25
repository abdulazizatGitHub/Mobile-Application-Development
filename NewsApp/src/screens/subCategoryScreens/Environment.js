import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Linking } from 'react-native';

const YourComponent = ({route}) => {
    const { category } = route.params;
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2464e5a00a2f429c8c7b21c9ee3d4e2b' // Replace with your actual API endpoint
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === 'ok') {
          setNewsData(data.articles);
        } else {
          console.error('Error fetching news data:', data);
        }
      } catch (error) {
        console.error('Error fetching news data:', error.message);
      }
    };

    fetchNewsData();
  }, [category]); // Empty dependency array to run the effect only once

  const openLink = (url) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openLink(item.url)}>
      <View style={{ margin: 10, borderBottomWidth: 1, paddingBottom: 10 }}>
        <Image
          source={{ uri: item.urlToImage }}
          style={{ width: '100%', height: 200, resizeMode: 'cover' }}
        />
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>{item.title}</Text>
        <Text style={{ marginTop: 5 }}>{item.publishedAt}</Text>
        <Text style={{ marginTop: 5 }}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default YourComponent;
