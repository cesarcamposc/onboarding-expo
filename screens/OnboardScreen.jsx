import { Image, StyleSheet, Text, View } from 'react-native'

import LottieView from 'lottie-react-native';
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react'
import { useNavigation } from 'expo-router';

const OnboardScreen = () => {
    
    const navigation = useNavigation();
     
    const handleDone = () => {
        navigation.navigate('Home');    
    }
        
    
  return (
    <View style={styles.container}>
      <Onboarding
        onDone = {handleDone}
        onSkip = {handleDone}
        pages={[
          {
            backgroundColor: "#d4f34aff",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/Animation1.json")}
                  style={{ height: 300, width: 300 }}
                  autoPlay
                  loop
                />
                ,
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },

          {
            backgroundColor: "#4ad7f3ff",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/firstproject.json")}
                  style={{ height: 300, width: 300 }}
                  autoPlay
                  loop
                />
                ,
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },

          {
            backgroundColor: "#ff3c42ff",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/secondproject.json")}
                  style={{ height: 300, width: 300 }}
                  autoPlay
                  loop
                />
                ,
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </View>
  );
}

export default OnboardScreen

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})