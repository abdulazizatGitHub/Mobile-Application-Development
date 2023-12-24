import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import {TouchableOpacity, View } from "react-native";

export default function GreenBtn() {
  const lottieRef = useRef(null); // Create a ref to control the Lottie animation

  const handleAnimationClick = () => {
    if (lottieRef.current) {
      lottieRef.current.play(); // Play the animation when clicked
    }
  };

  useEffect(() => {
    // Optional: Play the animation automatically when the component mounts
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={handleAnimationClick}>
        <LottieView
          ref={lottieRef} // Assign the ref to the LottieView component
          style={{ height: 120 }}
          source={require("../../../assets/Animation/Add-new.json")}
          loop={false} // Set loop to false to play the animation only once
          autoPlay={false} // Disable automatic playback on mount
          // Trigger animation when pressed
        />
      </TouchableOpacity>
    </View>
  );
}
