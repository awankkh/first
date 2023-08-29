import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
 container: {
      flexGrow: 1,
      backgroundColor: '#F8F8F8',
      padding:0,
      },
 subcategoryContentContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  homeBoxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  unitTitle: {
    fontSize: 16,
    textAlign: 'center', // Center the text within the box
  },
  homeBox: {
    flex: 1,
    padding: 20,
    margin: 10,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
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
    marginTop: 70,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#236FE2',
    height: '20%', // Set the height to cover 15% of the screen
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 10, height: 2 },


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
    backgroundColor: '#236FE2',
  },
  subcategoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',  
  },
  
  subcategoryLine: {
    borderBottomWidth: 2,
    borderColor: '#236FE2',
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
    borderColor: '#236FE2',
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
  backgroundTopBox: {
    position: 'absolute',
    backgroundColor: '#319FDD', // Set the desired color
    height: '20%', // Set the height to 20% of the screen height
    width: '100%', // Cover the entire width
    top: 0, // Align to the top
    zIndex: -1, // Place it behind other content
  },
  
})