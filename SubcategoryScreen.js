import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { UNITS } from './units';
import { subcategories } from './constants';

export function SubcategoryScreen({ route }) {
  const { subcategory } = route.params;
  const subcategoryUnits = UNITS.filter((unit) => unit.subcategory === subcategory);
  const navigation = useNavigation();

  // ... (rest of the code)

  const renderUnitContent = (unit) => {
    // Render the content of each unit based on its type
    // ...

    return (
      <TouchableOpacity
        key={unit.id}
        style={styles.unitBox}
        onPress={() => navigation.navigate('Unit', { unitId: unit.id })}
      >
        {/* Render the unit content */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* ... (rest of the code) */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
          {subcategoryUnits.map((unit) => renderUnitContent(unit))}
        </View>
      </ScrollView>
    </View>
  );
}
