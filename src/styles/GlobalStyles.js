import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      paddingLeft: 8,
      marginTop: 20,
      borderRadius: 10,
    },
    error: {
      color: 'red',
      marginBottom: 12,
    },
    buttonstyle: {
    backgroundColor: '#3B4C9A',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop:10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  header:{
    fontWeight:'500',
    fontSize:20,
  },
  cardPadding:{
    padding:20,
  },
  verticalName:{
    fontWeight:'600',
    padding:2,
    // color:'#3B4C9A',
    // color:'black'
  },
  });

export default globalStyles;