import * as React from 'react';
import { Button, Card, Text } from 'react-native-paper';
import { View, Image, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';

function AddCategoryScreen() {
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
          <ScrollView contentContainerStyle={styles.cardScrollView} horizontal={true} pagingEnabled={true}>
            <Card style={styles.cardContainer}>
              <ImageBackground style={styles.cardImage} resizeMode='cover' source={require('../../assets/images/electronics.jpg')}>
                <Text style={styles.cardTitle}>Electronics</Text>
              </ImageBackground>
            </Card>
            <Card style={styles.cardContainer}>
              <ImageBackground style={styles.cardImage} resizeMode='cover' source={require('../../assets/images/electronics.jpg')}>
                <Text style={styles.cardTitle}>Electronics</Text>
              </ImageBackground>
            </Card>
            <Card style={styles.cardContainer}>
              <ImageBackground style={styles.cardImage} resizeMode='cover' source={require('../../assets/images/electronics.jpg')}>
                <Text style={styles.cardTitle}>Electronics</Text>
              </ImageBackground>
            </Card>
            <Card style={styles.cardContainer}>
              <ImageBackground style={styles.cardImage} resizeMode='cover' source={require('../../assets/images/electronics.jpg')}>
                <Text style={styles.cardTitle}>Electronics</Text>
              </ImageBackground>
            </Card>
          </ScrollView>
        </View>
        <View style={styles.industriesContainer}><Text style={styles.headingText}>Industries</Text>
          <View style={styles.industriesCategories}>
              <View style={styles.categoriesImage}><Image style={{width: '100%'}} source={require('../../assets/images/news.png')} /></View>
              <Text style={styles.categoriesText}>Categories</Text>
          </View>
          <View style={styles.industriesCategories}>
              <View style={styles.categoriesImage}><Image style={{width: '100%'}} source={require('../../assets/images/news.png')} /></View>
              <Text style={styles.categoriesText}>Categories</Text>
          </View>
          <View style={styles.industriesCategories}>
              <View style={styles.categoriesImage}><Image style={{width: '100%'}} source={require('../../assets/images/news.png')} /></View>
              <Text style={styles.categoriesText}>Categories</Text>
          </View>
          <View style={styles.industriesCategories}>
              <View style={styles.categoriesImage}><Image style={{width: '100%'}} source={require('../../assets/images/news.png')} /></View>
              <Text style={styles.categoriesText}>Categories</Text>
          </View>
          <View style={styles.industriesCategories}>
              <View style={styles.categoriesImage}><Image style={{width: '100%'}} source={require('../../assets/images/news.png')} /></View>
              <Text style={styles.categoriesText}>Categories</Text>
          </View>
          <View style={styles.industriesCategories}>
              <View style={styles.categoriesImage}><Image style={{width: '100%'}} source={require('../../assets/images/news.png')} /></View>
              <Text style={styles.categoriesText}>Categories</Text>
          </View>
          <View style={styles.industriesCategories}>
              <View style={styles.categoriesImage}><Image style={{width: '100%'}} source={require('../../assets/images/news.png')} /></View>
              <Text style={styles.categoriesText}>Categories</Text>
          </View>
          <View style={styles.industriesCategories}>
              <View style={styles.categoriesImage}><Image style={{width: '100%'}} source={require('../../assets/images/news.png')} /></View>
              <Text style={styles.categoriesText}>Categories</Text>
          </View>
          <View style={styles.industriesCategories}>
              <View style={styles.categoriesImage}><Image style={{width: '100%'}} source={require('../../assets/images/news.png')} /></View>
              <Text style={styles.categoriesText}>Categories</Text>
          </View>
        </View>
        <View style={styles.trendsContainer}><Text style={styles.headingText}>Trends</Text></View>
        <View style={styles.skillsContainer}><Text style={styles.headingText}>Skills</Text></View>
        <View style={styles.funContainer}><Text style={styles.headingText}>Fun</Text></View>
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
    gap: 10
  },
  featuredContainer: {
    width: '100%',
    height: 270,
    marginTop: 20
  },
  industriesContainer: {
    width: '100%',
    height: 700,
    marginTop: 15
  },
  trendsContainer: {
    width: '100%',
    height: 500,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 15
  },
  skillsContainer: {
    width: '100%',
    height: 400,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 15
  },
  funContainer: {
    width: '100%',
    height: 500,
    borderWidth: 1,
    borderColor: 'black',
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
    marginLeft: 5,
    marginTop: 150
  },
  cardImage: {
    justifyContent: 'center',
    width: 150,
    height: 230,
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
    borderWidth: 2,
    borderColor: 'blue',
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
  }
});
export default AddCategoryScreen;