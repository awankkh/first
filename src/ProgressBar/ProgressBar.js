import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { styles } from './styles'; // Import the styles for the ProgressBar

export function ProgressBar({ total, current }) {
  const percentage = Math.round((current / total) * 100);

  const sharedProgress = useSharedValue(percentage);

  const styleAnimated = useAnimatedStyle(() => ({
    width: `${sharedProgress.value}%`,
  }));

  useEffect(() => {
    sharedProgress.value = withTiming(percentage);
  }, [current]);

  return (
    <View style={styles.track}>
      <Animated.View style={[styles.progress, styleAnimated]} />
    </View>
  );
}
