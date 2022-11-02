import React, {useEffect} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';

export const Cau5 = () => {
  const startValue = new Animated.Value(0);
  const startValue2 = new Animated.Value(1);
  const startValue3 = new Animated.Value(2);
  const endValue = 150;
  const endValue2 = -150;
  const duration = 5000;
 

  useEffect(() => {
    Animated.timing(startValue, {
      toValue: endValue,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [startValue, endValue, duration]);

  useEffect(() => {
   setTimeout(() => {
    
    Animated.timing(startValue2, {
      toValue: endValue2,
      duration: duration,
      useNativeDriver: true,
    }).start();
}, 5000);
  }, [startValue2, endValue2, duration]);

  useEffect(() => {
    setTimeout(() => {
     
     Animated.timing(startValue3, {
       toValue: endValue,
       duration: duration,
       useNativeDriver: true,
     }).start();
 }, 10000);
   }, [startValue3, endValue, duration]);
 

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            transform: [
              {
                translateX: startValue,
              },
            ],
          },
        ]}
      ><Text style={{color: 'white'}}>1</Text></Animated.View>
      <Animated.View
        style={[
          styles.square2,
          {
            transform: [
              {
                translateY: startValue2,
              },
            ],
          },
        ]}
      ><Text style={{color: 'white'}}>2</Text></Animated.View>
       <Animated.View
        style={[
          styles.square3,
          {
            transform: [
              {
                translateY: startValue3,
                
              },
            ],
          },
        ]}
      ><Text style={{color: 'white'}}>3</Text></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    height: 50,
    width: 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  square2: {
    height: 50,
    width: 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  square3: {
    height: 50,
    width: 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
});