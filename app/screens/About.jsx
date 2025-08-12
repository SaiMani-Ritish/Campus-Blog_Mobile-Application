import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import Header from '../Header';

export default function About() {
  return (
    <View style={styles.container}>
    <Header/>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading}>About the App</Text>
        <Text style={styles.paragraph}>
          This project has been implemented and designed using the MERN stack including React Native, Express, Node.js, and MongoDB.
          The main purpose of this mobile app is to provide a social platform where users can interact with other students through features
          such as authentication, post creation, and real-time interactions.
        </Text>
        <Text style={styles.paragraph}>
          The target users are students currently studying or who have previously studied at City University of Seattle.
          This project demonstrates how we apply and practice the knowledge gained in this course to build a mobile application.
        </Text>

        <Text style={styles.subheading}>Meet the Team</Text>

        <View style={styles.member}>
          <Image source={require('../assets/images/Ritish.png')} style={styles.image} />
          <Text style={styles.name}>Sai Mani Ritish Upadhyayula</Text>
          <Text style={styles.role}>City University Student</Text>
        </View>

        <View style={styles.member}>
          <Image source={require('../assets/images/Sukhmani.png')} style={styles.image} />
          <Text style={styles.name}>Sukhmani Thukral</Text>
          <Text style={styles.role}>City University Student</Text>
        </View>

        <View style={styles.member}>
          <Image source={require('../assets/images/Yen.png')} style={styles.image} />
          <Text style={styles.name}>Yen Hai Tran</Text>
          <Text style={styles.role}>City University Student</Text>
        </View>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6fbff',
  },
  scrollContainer: {
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#1a365d',
    letterSpacing: 1,
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#3a4a5d',
    lineHeight: 28,
  },
  subheading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 36,
    marginBottom: 16,
    textAlign: 'center',
    color: '#1a365d',
    letterSpacing: 0.5,
  },
  member: {
    alignItems: 'center',
    marginBottom: 32,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#6da2ffff',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 2,
  },
  role: {
    fontSize: 15,
    color: '#7a8fa6'
  }
});