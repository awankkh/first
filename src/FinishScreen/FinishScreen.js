import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '../Button/button';
import Stars from '../stars/stars';
import { styles } from './styles';

const Finish = () => {
  const route = useRoute();
  const { points, total } = route.params;

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Stars />

      <View style={styles.message}>
        <Text style={styles.title}>مبارک ہو</Text>
        <Text style={styles.subtitle}>
          آپ کے {total} میں سے {points} سوال ٹھیک ہوئے ہیں
        </Text>
      </View>

      <Button title="دوبارہ سے شروع کریں" onPress={() => navigate('home')} />
    </View>
  );
};

export default Finish;
