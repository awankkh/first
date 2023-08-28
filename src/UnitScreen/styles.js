import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        backgroundColor: '#29292E',
        padding: 0,
        borderRadius: 12,

      },
    topBox: {
        backgroundColor: '#3550DC',
        height: '10%', // Set the height to cover 20% of the screen
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

      }, 
    contentContainer: {
        paddingBottom: 20, // Add padding at the bottom to ensure space for the last item
    },
    unitBox: {
        padding: 90,
        margin: 10,
        marginTop: 50,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center', // Center both vertically and horizontally
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
      }, 
    normalText: {
        fontSize: 16,
        marginBottom: 10,
        color: 'black', // Customize normal text color
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
    image: {
        width: 350, // Adjust width and height to fit within the box
        height: 300,
        resizeMode: 'contain',
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
      mcqOptionText: {
        fontSize: 16,
        color: 'black',
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
    feedbackText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'red', // Customize the color for wrong feedback
      },
    finishButton: {
      margin: 5,
      minHeight: 56,
      maxHeight: 56,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00875F',
      borderRadius: 6,
      padding: 10,
      alignItems: 'center',
      marginTop: 20,
      marginRight: 16,
      marginLeft: 16,
      },
    finishButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      },
    nextButton: {
        margin: 5,
        minHeight: 56,
        maxHeight: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00875F',
        borderRadius: 6,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
        marginRight: 16,
        marginLeft: 16,

        },
    nextButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        },
    hidden: {
        display: 'none',
        },
    mcqOption: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        padding: 10,
        marginTop: 8,
        backgroundColor: 'white',
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
    remainingText: {
      color: 'white',
      fontSize: 16,
      marginTop: 5,
    },
    })