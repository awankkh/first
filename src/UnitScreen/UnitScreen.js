//unitscreen.js
import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { styles } from './styles';
import { UNITS } from '../data/units';
import TrackPlayer from 'react-native-track-player';


export function UnitScreen({ route }) {
  const { unitId } = route.params;
  const unit = UNITS.find((u) => u.id === unitId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const navigation = useNavigation(); // Get navigation object

  const handleOptionPress = (optionIndex, index) => {
    setSelectedOption(optionIndex);

    if (optionIndex === unit.content[index].correctAnswer) {
      setFeedbackMessage('Correct!');
    } else {
      setFeedbackMessage('Wrong!');
    }
  };

  const handleNextPress = () => {
    setSelectedOption(null);
    setFeedbackMessage(null);
    setCurrentIndex(prevIndex => prevIndex + 1);
    correctSound.play();
  };

  const handleFinishPress = () => {
    navigation.navigate('Home'); // Navigate to home screen
  };
  const correctSound = new Sound('./sounds/correct.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('Error loading sound:', error);
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
      </View>
        <View style={styles.contentContainer}>
          {unit.content.map((item, index) => (
            <View key={index} style={[styles.unitBox, currentIndex === index ? null : styles.hidden]}>
              {item.type === 'text' && currentIndex === index && (
                <Text style={styles.normalText}>{item.text}</Text>
              )}
               {item.type === 'image' && currentIndex === index && (
                <View>
                  <Text style={styles.imageTitle}>{item.caption}</Text>
                  <Image source={item.source} style={styles.image} />
                </View>
              )}
              {item.type === 'mcq' && currentIndex === index && (
                <View>
                  <Text style={styles.mcqQuestion}>{item.question}</Text>
                  {item.options.map((option, optionIndex) => (
                    <TouchableOpacity
                      key={optionIndex}
                      style={[
                        styles.mcqOption,
                        selectedOption === optionIndex && styles.selectedOptionBox,
                        selectedOption === optionIndex &&
                          optionIndex === item.correctAnswer &&
                          styles.correctOptionBox,
                        selectedOption === optionIndex &&
                          optionIndex !== item.correctAnswer &&
                          styles.incorrectOptionBox,
                      ]}
                      onPress={() => handleOptionPress(optionIndex, index)}
                    >
                      <Text style={styles.mcqOptionText}>{option}</Text>
                    </TouchableOpacity>
                  ))}
                  {feedbackMessage && (
                    <Text style={styles.feedbackText}>{feedbackMessage}</Text>
                  )}
                </View>
              )}
            </View>
          ))}
          {currentIndex === unit.content.length - 1 ? ( // Display Finish button on the last box
            <TouchableOpacity style={styles.finishButton} onPress={handleFinishPress}>
              <Text style={styles.finishButtonText}>Finish</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNextPress}
              disabled={currentIndex === unit.content.length - 1}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
    </View>
  );
}
