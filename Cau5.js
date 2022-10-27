import React, { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";

export const Cau5 = (navigation) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      }).start();

    return (
        <SafeAreaView>
            <View style={{justifyContent: 'center', alignItems: 'center', height: 800}}>
                <Animated.View style={{height: 50, width: 50, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 20}}>1</Text>
                </Animated.View>
            </View>
        </SafeAreaView>   
    )
}