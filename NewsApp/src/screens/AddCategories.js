import React, { useContext } from 'react';
import { Button, Card, Text } from 'react-native-paper';
import { View, Image, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import { cardData } from '../common/carousalCardData';
import { useNavigation } from '@react-navigation/native';
import { funCategory, industriesCategory } from '../common/categoriesData';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppContext } from '../common/context';
function AddCategoryScreen() {
  const navigation = useNavigation();
  const { user, addCategory } = useContext(AppContext);

  const handleCategoryPress = async (category) => {
    if (user) {
      await addCategory(category); // Make sure to use `await` as `addCategory` might be an asynchronous function
    } else {
      navigation.navigate('Login'); // Navigate to the login screen
    }
  };

  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search"
            style={styles.searchBar}
          />
        </View>
        <View style={styles.featuredContainer}><Text style={styles.headingText}>Featured</Text>
          <ScrollView contentContainerStyle={styles.cardScrollView} horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
            {cardData.map((card, index) => (
              <TouchableOpacity onPress={() => handleCategoryPress(card.category)}>
                <Card key={index} style={styles.cardContainer}>
              <ImageBackground style={styles.cardImage} resizeMode='cover' source={card.imageUrl}>
                <Text style={styles.cardTitle}>{card.category}</Text>
              </ImageBackground>
            </Card>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.industriesContainer}><Text style={styles.headingText}>Industries</Text>
          {industriesCategory.map((data, index) => (
            <TouchableOpacity onPress={() => handleCategoryPress(data.category)}>
              <View key={index} style={styles.industriesCategories}>
            <View style={styles.categoriesImage}><Image style={styles.image} source={data.imageUrl}/></View>
            <Text style={styles.categoriesText}>{data.category}</Text>
            <Text style={styles.addCategroy} >+</Text>
        </View>
            </TouchableOpacity>
          ))
          }
        </View>
        <View style={styles.funContainer}>
          <Text style={styles.headingText}>Fun</Text>
          {funCategory.map((data, index) => (
            <TouchableOpacity onPress={() => handleCategoryPress(data.category)}>
              <View key={index} style={styles.industriesCategories}>
            <View style={styles.categoriesImage}><Image style={styles.image} source={data.imageUrl} /></View>
            <Text style={styles.categoriesText}>{data.category}</Text>
        </View>
            </TouchableOpacity>
          ))
          }
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchContainer: {
    width: '100%',
    height: 60,
    marginTop: 10
  },
  searchBar: {
    backgroundColor: 'white'
  },
  cardScrollView: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredContainer: {
    width: '100%',
    height: 280,
    marginTop: 20,
    display: 'flex',
  },
  industriesContainer: {
    width: '100%',
    height: 500,
    marginTop: 15
  },
  funContainer: {
    width: '100%',
    height: 350,
    marginTop: 15
  },
  cardContainer: {
    width: 150,
    height: 230,
    marginLeft: 15,
    marginTop: 15
  },
  cardTitle: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 10,
  },
  cardImage: {
    alignItems: 'center',
    width: 150,
    height: 230,
    borderRadius: 10,
    overflow: 'hidden'
  },
  industriesCategories: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
    marginTop: 15
  },
  categoriesImage: {
    width: '15%',
    height: 50,
    marginLeft: 25,
    borderRadius: 15
  },
  categoriesText: {
    marginLeft: 50,
    fontWeight: '700',
    fontSize: 20
  },
  headingText: {
    marginLeft: 35,
    fontWeight: '900',
    fontSize: 15,
    color: 'tomato'
  },
  image: {
    width: '100%',
    height: 50,
    borderRadius: 15,
    overflow: 'hidden'
  },
  addCategroy: {
    width: 50,
    height: 20,
    fontWeight: '700',
    fontSize: 20,
    position: 'absolute', 
    right: 20
  }
});
export default AddCategoryScreen;