//styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F8F3E2',
    padding: 0,
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
  unitBoxesContainer: {
    flex: 1, // Take up the remaining space
    marginTop: '20%', // Adjust this value as needed
  },
  scrollView: {
    marginTop: '0%', // Adjust this to create space for the top box
    marginBottom: '25%',
  },

  contentContainer: {
    paddingBottom: 20, // Add padding at the bottom to ensure space for the last item
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
  unitBox: {
    padding: 90,
    margin: 10,
    marginTop: 50,
    backgroundColor: 'white',
    justifyContent: 'center', // Center both vertically and horizontally
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },  
  topBox: {
    backgroundColor: '#3763FF',
    height: '10%', // Set the height to cover 20% of the screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350, // Adjust width and height to fit within the box
    height: 300,
    resizeMode: 'contain',
  },
   imageTitle: {
    fontSize: 18,
    fontWeight: 'light',
    writingDirection: 'rtl',
    textAlign: 'auto', // Center align the caption
    width: '100%', // Take up the full width
    marginBottom: 20,
    marginTop: -20,
  },  
  mcqQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    width: '100%', // Take up the full width
  },
  mcqOption: {
    fontSize: 16,
    marginBottom: 5,
  },
  mcqOptionBox: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
    backgroundColor: 'white',
  },
  selectedOptionBox: {
    backgroundColor: 'yellow', // Highlight selected option
  },
  correctOptionBox: {
    backgroundColor: 'green', // Highlight correct option
  },
  incorrectOptionBox: {
    backgroundColor: 'red', // Highlight incorrect option
  },
  mcqOptionText: {
    fontSize: 16,
    color: 'black',
  },
  chapterRowContainer: {
    flexDirection: 'row', // Display boxes in a row
    justifyContent: 'space-between', // Add space between boxes
    paddingHorizontal: 20, // Add horizontal padding to the row
  },
  feedbackText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'red', // Customize the color for wrong feedback
  },
  correctText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  incorrectText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'pink',
  },
  
  mcqOption: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
    backgroundColor: 'white',
  },
  
  selectedOptionBox: {
    backgroundColor: 'yellow', // Highlight selected option
  },
  correctOptionBox: {
    backgroundColor: 'green', // Highlight correct option
  },
  incorrectOptionBox: {
    backgroundColor: 'red', // Highlight incorrect option
  },
  mcqOptionText: {
    fontSize: 16,
    color: 'black',
  },
  
  normalText: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black', // Customize normal text color
  },
 nextButton: {
    margin: 5,
    backgroundColor: '#3763FF',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  hidden: {
    display: 'none',
  },
  finishButton: {
    margin: 5,
    backgroundColor: '#3763FF',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  finishButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  unitCategoriesContainer: {
    flexDirection: 'row', // Arrange boxes in a row
    justifyContent: 'space-between', // Add space between boxes
    paddingHorizontal: 20, // Add horizontal padding
    marginTop: 20, // Adjust the value as needed
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
  selectedSubcategoryBox: {
    backgroundColor: '#3763FF',
  },
  subcategoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  subcategoryContentContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  subcategoryLine: {
    borderBottomWidth: 2,
    borderColor: '#007AFF',
    alignSelf: 'center',
    width: '80%',
    marginTop: 5,
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
});
