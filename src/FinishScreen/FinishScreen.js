import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '../Button/button';
import Stars from '../stars/stars';
import { styles } from './styles';

export function FinishScreen () {
  const route = useRoute();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Stars />

      <View style={styles.message}>
        <Text style={styles.title}>مبارک ہو</Text>
        
      </View>

      <Button title="دوبارہ سے شروع کریں" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

