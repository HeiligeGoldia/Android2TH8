import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet, Text } from "react-native";
export function Cau4() {
  const startValue = new Animated.Value(0);
  const endValue = 280;
  const duration = 3000;
  useEffect(() => {
    Animated.timing(startValue, {
      toValue: endValue,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [startValue, endValue, duration]);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      useNativeDriver: true,
      duration: 3000,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            opacity: fadeAnim,
          },
        ]}
      >
      </Animated.View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            transform: [
                {
                  translateX: startValue,
                },
              ],
          },
        ]}
      >
        <Text style={{fontSize: 20}}>This is Text</Text>
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  square: {
    height: 100,
    width: 100,
    backgroundColor: "gray",
    marginLeft: 150
  },
});