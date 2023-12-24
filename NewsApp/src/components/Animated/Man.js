import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { Button, Text, TouchableOpacity, View } from "react-native";

export default function Man() {
 
  return (
    <View>
      <LottieView
        
          style={{ height: 250  ,display:'flex',justifyContent:'center',
        alignSelf:'center'}}
          source={require('../../../assets/Animation/floating_man.json')}
          loop={true} 
          autoPlay={true} 
        />
    </View>
  );
}
