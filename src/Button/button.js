import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = ({ title, ...rest }) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
