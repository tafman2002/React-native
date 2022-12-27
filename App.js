import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import SimpleForm from "./components/Form";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <SimpleForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    color: 'white',
    fontSize: 20,
  }
});
