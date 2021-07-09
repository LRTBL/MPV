import React from 'react';
import {View, StyleSheet, Image, Animated} from 'react-native';
import {PRI_COLOR} from '@theme/colors';

const SplashScreen = () => {
  const anim = React.useRef<Animated.Value>(new Animated.Value(1));

  React.useEffect(() => {
    // makes the sequence loop
    Animated.loop(
      // runs given animations in a sequence
      Animated.sequence([
        // increase size
        Animated.timing(anim.current, {
          toValue: 1.3,
          duration: 1500,
          useNativeDriver: false,
        }),
        // decrease size
        Animated.timing(anim.current, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{transform: [{scale: anim.current}]}}>
        <Image
          style={styles.splashImage}
          source={require('@assets/images/logo_ugel.png')}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRI_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: 140,
    height: 150,
  },
});

export default SplashScreen;
