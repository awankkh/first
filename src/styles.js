//styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  unitBoxesContainer: {
    flex: 1, // Take up the remaining space
    marginTop: '20%', // Adjust this value as needed
  },
  

 
  chapterRow: {
    flexDirection: 'row', // Arrange items in a row
    justifyContent: 'space-between', // Add space between items
    marginBottom: -20,
    margin: 30,
    marginTop: 40,
  },
  chapterBox: {
    width: 100,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    borderRadius: 20,
  },  
  chapterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  
  
  
   
  
  
  mcqOptionBox: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
    backgroundColor: 'white',
  },
  
 
 
  
  chapterRowContainer: {
    flexDirection: 'row', // Display boxes in a row
    justifyContent: 'space-between', // Add space between boxes
    paddingHorizontal: 20, // Add horizontal padding to the row
  },
  
  
  
  
  

  
 
 

  

  unitCategoriesContainer: {
    flexDirection: 'row', // Arrange boxes in a row
    justifyContent: 'space-between', // Add space between boxes
    paddingHorizontal: 20, // Add horizontal padding
    marginTop: 20, // Adjust the value as needed
  },
  
 
});
