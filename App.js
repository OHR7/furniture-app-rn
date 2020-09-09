import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View , 
  ImageBackground, 
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TextInput
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

export default function App() {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.header}>
        <View style={styles.headerBar}>
          <ImageBackground 
            style={styles.profileAvatar}
            imageStyle={{borderRadius: 20}}
            source={{uri: 'https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508_1280.jpg'}}
          ></ImageBackground>
          <FontAwesome name='bars' color='white' size={40}></FontAwesome>
        </View>
        <View>
          <Text style={styles.headerTitle}>Hello, Omar</Text>
          <Text style={styles.headerSubTitle}>What do you want to buy?</Text>
        </View>
        <View style={styles.searchContainer} >
          <FontAwesome name='search' color='#f1c40f' size={16}></FontAwesome>
          <TextInput 
            style={{marginLeft: 5}}
            placeholderTextColor='grey'
            placeholder='Search'
          >
          </TextInput>
        </View>
      </View>
      <View style={styles.mainContent}>
        <View>
          <ScrollView 
            style={styles.categoryBar} 
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            <ImageBackground 
              style={styles.categoryAvatar}
              source={{uri: 'https://www.iconfinder.com/data/icons/business-410/60/business-yellow-036-filing-cabinet-512.png'}}
            ></ImageBackground>
            <ImageBackground 
              style={styles.categoryAvatar}
              source={{uri: 'https://www.iconfinder.com/data/icons/business-410/60/business-yellow-036-filing-cabinet-512.png'}}
            ></ImageBackground>
            <ImageBackground 
              style={styles.categoryAvatar}
              source={{uri: 'https://www.iconfinder.com/data/icons/business-410/60/business-yellow-036-filing-cabinet-512.png'}}
            ></ImageBackground>
            <ImageBackground 
              style={styles.categoryAvatar}
              source={{uri: 'https://www.iconfinder.com/data/icons/business-410/60/business-yellow-036-filing-cabinet-512.png'}}
            ></ImageBackground>
            <ImageBackground 
              style={styles.categoryAvatar}
              source={{uri: 'https://www.iconfinder.com/data/icons/business-410/60/business-yellow-036-filing-cabinet-512.png'}}
            ></ImageBackground>
            <ImageBackground 
              style={styles.categoryAvatar}
              source={{uri: 'https://www.iconfinder.com/data/icons/business-410/60/business-yellow-036-filing-cabinet-512.png'}}
            ></ImageBackground>
          </ScrollView>
        </View>
        <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.cardsContainer}
        >
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image
                  style={styles.cardImage}
                  source={{uri: 'data:image/jpeg;base64,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'}}
              ></Image>
            </View>
            <View style={{flex: 1}}>
              <View style={styles.cardTitle}>
                <Text>Furniture</Text>
                <View style={styles.likeBtn}>
                  <FontAwesome name='heart' color='red' size={20}></FontAwesome>
                </View>
              </View>
              <Text style={styles.cardDescription}>Furniture description is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Text>
              <View style={styles.cardButtons}>
                <View style={styles.cardButtonPrice}>
                  <Text style={styles.buttonText}>$250</Text>
                </View>
                <View style={styles.cardButtonCart}>
                  <Text style={styles.buttonText}>Add to cart</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image
                  style={styles.cardImage}
                  source={{uri: 'data:image/jpeg;base64,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'}}
              ></Image>
            </View>
            <View style={{flex: 1}}>
              <View style={styles.cardTitle}>
                <Text>Furniture</Text>
                <View style={styles.likeBtn}>
                  <FontAwesome name='heart' color='red' size={20}></FontAwesome>
                </View>
              </View>
              <Text style={styles.cardDescription}>Furniture description is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Text>
              <View style={styles.cardButtons}>
                <View style={styles.cardButtonPrice}>
                  <Text style={styles.buttonText}>$250</Text>
                </View>
                <View style={styles.cardButtonCart}>
                  <Text style={styles.buttonText}>Add to cart</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.navigation}>
          <FontAwesome name='home' color='#f1c40f' size={35}></FontAwesome>
          <FontAwesome name='clock-o' color='grey' size={35}></FontAwesome>
          <FontAwesome name='shopping-cart' color='grey' size={35}></FontAwesome>
          <FontAwesome name='user' color='grey' size={35}></FontAwesome>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: '#f1c40f',
  },
  header: {
    height: 220,
    paddingHorizontal: 10,
    zIndex: 2
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  headerSubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileAvatar: {
    width: 40,
    height: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 5,
    position: 'relative',
    top: 50,
    zIndex: 2
  },
  searchText: {
    color: 'grey',
    marginLeft: 10
  },
  mainContent: {
    backgroundColor: '#ecf0f1',
    flex: 1
  },
  categoryBar: {
    backgroundColor: 'white',
    marginTop: 50,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexGrow: 0
  },
  categoryAvatar: {
    width: 60,
    height: 60,
    marginRight: 30
  },
  cardsContainer: {
    marginTop: 30,
  },
  cardContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardImageContainer: {
    padding: 10
  },
  cardImage: {
    width: 150,
    height: 120,
    resizeMode: 'contain',
  },
  cardTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginRight: 10
  },
  likeBtn: {
    width: 30,
    padding: 5,
    flex: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'grey',
    shadowOffset: {
      width: 2,
      height: 5
    },
    shadowOpacity: 0.40,
    shadowRadius: 3,
    elevation: 5,
  },
  cardDescription: {
    color: '#bdc3c7',
    marginRight: 10,
    marginBottom: 10
  },
  cardButtons: {
    flexDirection: 'row'
  },
  cardButtonPrice: {
    backgroundColor: '#f39c12',
    padding: 10,
    flex: 1
  },
  cardButtonCart: {
    backgroundColor: '#f1c40f',
    padding: 10,
    flex: 2
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10, 
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width
  }
});
