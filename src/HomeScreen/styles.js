import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
 container: {
      flexGrow: 1,
      backgroundColor: '#F8F3E2',
      padding: 0,
      },
 subcategoryContentContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  homeBox: {
    padding: 20,
    margin: 10,
    marginTop: 10,
    backgroundColor: 'white',
    justifyContent: 'center', // Center both vertically and horizontally
    alignItems: 'left',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  titleBox: {
    backgroundColor: '#3763FF',
    height: '20%', // Set the height to cover 15% of the screen
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    bottom: -74,
    right: -110,
  },
  titleImage: {
    width: 160, // Adjust the width and height as needed
    height: 160,
    position: 'absolute', // This is the key change
    left: 0, // Position the image on the left side
    top: 20,
  },
  selectedSubcategoryBox: {
    backgroundColor: '#3763FF',
  },
  subcategoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  
  subcategoryLine: {
    borderBottomWidth: 2,
    borderColor: '#007AFF',
    alignSelf: 'center',
    width: '80%',
    marginTop: 5,
  },
  subcategoryContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
    paddingHorizontal: 5,
  },
  subcategoryBox: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#3763FF',
    borderRadius: 20,
    marginRight: 10,
  },
  backgroundContainer: {
    flex: 100,
    position: 'relative',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute', // Position the background image absolutely
    top: 100,
    left: 10,
    right: 60,
    bottom: 0,
  },
 
})