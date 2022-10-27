import React, { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, TouchableOpacity } from "react-native";

export const Cau2 = (navigation) => {

    const movecomp = new Animated.Value(0)
    
    const move = () => {
        Animated.timing(movecomp, {
            toValue: 320,
            duration: 5000,
            useNativeDriver: false
          }).start();
    }

    return (
        <SafeAreaView>
            <View style={{justifyContent: 'center', height: 800}}>
                <Animated.Text style={{marginLeft: movecomp}}>Hello</Animated.Text>
                <TouchableOpacity style={{marginLeft: 140, marginTop: 100, backgroundColor: 'gray', width: 100, height: 50, justifyContent: 'center', alignItems: 'center'}} onPress={() => {
                    move()
                }}>
                    <Text style={{color: 'white', fontSize: 20}}>Move</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>   
    )
}