import React, { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";

export const Cau1 = (navigation) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      }).start();

    return (
        <SafeAreaView>
            <View style={{justifyContent: 'center', alignItems: 'center', height: 800}}>
                <Animated.Text style={{opacity: fadeAnim}}>Hello</Animated.Text>
            </View>
        </SafeAreaView>   
    )
}