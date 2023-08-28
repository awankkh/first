import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  track: {
    height: 8,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#505059',
    marginBottom: 10, // Add margin to separate the progress bar from other content
  },
  progress: {
    height: 8,
    backgroundColor: 'white', // Use your theme color or any other color you prefer
    borderRadius: 8,
  },
});
