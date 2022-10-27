import React, { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, TouchableOpacity } from "react-native";

export const Cau3 = (navigation) => {

    const movecomp = new Animated.Value(0)
    
    const move1 = () => {
        Animated.timing(movecomp, {
            toValue: 320,
            duration: 5000,
            useNativeDriver: false
          }).start();
    }
    const move2 = () => {
        Animated.timing(movecomp, {
            toValue: 320,
            duration: 5000,
            useNativeDriver: false
          }).stop();
    }
    const move3 = () => {
        movecomp.setValue(0)
    }

    return (
        <SafeAreaView>
            <View style={{justifyContent: 'center', height: 800}}>
                <Animated.Text style={{marginLeft: movecomp}}>Hello</Animated.Text>
                <TouchableOpacity style={{marginLeft: 140, marginTop: 100, backgroundColor: 'gray', width: 100, height: 50, justifyContent: 'center', alignItems: 'center'}} onPress={() => {
                    move1()
                }}>
                    <Text style={{color: 'white', fontSize: 20}}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 140, marginTop: 30, backgroundColor: 'gray', width: 100, height: 50, justifyContent: 'center', alignItems: 'center'}} onPress={() => {
                    move2()
                }}>
                    <Text style={{color: 'white', fontSize: 20}}>Stop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 140, marginTop: 30, backgroundColor: 'gray', width: 100, height: 50, justifyContent: 'center', alignItems: 'center'}} onPress={() => {
                    move3()
                }}>
                    <Text style={{color: 'white', fontSize: 20}}>Reset</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>   
    )
}