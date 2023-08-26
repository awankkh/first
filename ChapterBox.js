import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export function ChapterBox({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.unitCategoryBox} onPress={onPress}>
      <Text style={styles.unitCategoryTitle}>{title}</Text>
    </TouchableOpacity>
  );
}
