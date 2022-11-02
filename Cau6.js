import React from 'react';
import {View, Text, StyleSheet, Animated, Image} from 'react-native';

export class Cau6 extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      amin: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.amin, {
          toValue: -1,
          duration: 100,
          delay: 800,
          useNativeDriver: false
        }),
        Animated.timing(this.state.amin, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false
        }),
        Animated.timing(this.state.amin, {
          toValue: -1,
          duration: 100,
          useNativeDriver: false
        }),
        Animated.timing(this.state.amin, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false
        }),
        Animated.timing(this.state.amin, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false
        }),
      ]),
    ).start();
  }

  render = () => {
    const rotation = this.state.amin.interpolate({
      inputRange: [-1, 1],
      outputRange: ['-10deg', '10deg'],
    });
    return (
      <View style={style.container}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            marginVertical: 100,
            color: 'red',
            fontWeight: 'bold',
          }}></Text>
        <Animated.View
          style={{alignSelf: 'center', transform: [{rotate: rotation}]}}>
          <Image
            source={require("./assets/bell_PNG10127.png")}
            style={{width: 200, height: 200}}></Image>
        </Animated.View>
      </View>
    );
  };
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});