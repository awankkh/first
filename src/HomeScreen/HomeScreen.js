import React, { useState } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { UNITS } from '../data/units';
import { subcategories } from '../data/constants';

export function HomeScreen({ navigation }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategories[0]);

  const navigateToUnit = (unitId) => {
    navigation.navigate('Unit', { unitId });
  };

  const renderSubcategoryContent = () => {
    const selectedUnits = UNITS.filter((unit) => unit.subcategory === selectedSubcategory);
    const rows = [];

    for (let i = 0; i < selectedUnits.length; i += 3) {
      const rowUnits = selectedUnits.slice(i, i + 3);
      const row = (
        <View style={styles.homeBoxRow} key={i}>
          {rowUnits.map((unit) => (
            <TouchableOpacity
              key={unit.id}
              style={styles.homeBox}
              onPress={() => navigateToUnit(unit.id)}
            >
              <Text style={styles.unitTitle}>{unit.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
      rows.push(row);
    }

    return <View style={styles.subcategoryContentContainer}>{rows}</View>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundTopBox} />
      <View style={styles.titleBox}>
        <ImageBackground
          source={require('../images/1.png')}
          style={styles.titleImage}
        />
        <Text style={styles.titleText}>خوش آمدید</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.subcategoryContainer}
      >
        {subcategories.map((subcategory) => (
          <TouchableOpacity
            key={subcategory}
            onPress={() => setSelectedSubcategory(subcategory)}
            style={[
              styles.subcategoryBox,
              selectedSubcategory === subcategory && styles.selectedSubcategoryBox,
            ]}
          >
            <Text
              style={[
                styles.subcategoryText,
                selectedSubcategory === subcategory && styles.selectedSubcategoryText,
              ]}
            >
              {subcategory}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.subcategoryLine} />
      <View style={styles.backgroundContainer}>
        {renderSubcategoryContent()}
      </View>
    </View>
  );
}
