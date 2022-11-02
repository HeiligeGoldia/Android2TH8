import React from 'react';
import {
  SafeAreaView,
  View,
  Animated,
  Easing,
  TouchableHighlight,
  Text,
} from 'react-native';

export class Cau7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotateValueHolder: new Animated.Value(0)
    };
  }
  componentDidMount = () => {
    this.startImageRotateFunction();
  }
  startImageRotateFunction = () => {
    Animated.loop(Animated.timing(this.state.rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    })).start();
  };

render(){
    return(
      <SafeAreaView>
        <View>
          <Animated.Image
            style={{
              width: 300,
              height: 300,
              alignSelf:"center",
              marginTop: 300,
              transform:
                [
                  {
                    rotate: this.state.rotateValueHolder.interpolate(
                        {
                          inputRange: [0, 1],
                          outputRange: ['0deg', '360deg'],
                        }
                      )
                  }
                ],
            }}
            source={require('./assets/circle.jpg')}
          />
        </View>
      </SafeAreaView>
    );
  }
}