import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const ArticleScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView>
      <View style={{ padding: 15 }}>
        <Image
          source={{ uri: article.image_url || 'https://via.placeholder.com/400' }}
          style={{ width: '100%', height: 300, resizeMode: 'cover' }}
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 15 }}>{article.title || 'No Title'}</Text>
        <Text style={{ marginTop: 10 }}>{article.description || 'No Description'}</Text>
        <Text style={{ marginTop: 10 }}>{`Author: ${article.creator && article.creator.length > 0 ? article.creator[0] : 'Unknown Author'}`}</Text>
        <Text style={{ marginTop: 10 }}>{`Source: ${article.source_id || 'Unknown Source'}`}</Text>
        <Text style={{ marginTop: 10 }}>{`Published Date: ${article.pubDate || 'Unknown Date'}`}</Text>
        <Text style={{ marginTop: 10 }}>{`Country: ${article.country ? article.country.join(', ') : 'Unknown Country'}`}</Text>
        <Text style={{ marginTop: 10 }}>{`Keywords: ${article.keywords ? article.keywords.join(', ') : 'No Keywords'}`}</Text>
        <Text style={{ marginTop: 10 }}>{article.content || 'No Content'}</Text>
      </View>
    </ScrollView>
  );
};

export default ArticleScreen;
