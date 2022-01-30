import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyComponent from './components/MyComponent';

const App = () => {

  const textTitle = {
    fontWeight: 'bold',
    fontSize: 24,
  }

  const textPlain = {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 50,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    textAlign:'center'
  }

  return (
    <View style={styles.container}>
      <Text style={{color: 'blue', fontSize: 30}}>Hello World</Text>
      <Text style={textTitle}>ยินดีต้อนรับ</Text>
      <Text style={textPlain}>เข้าสู่การใช้งาน React Native</Text>
      <Text style={[styles.textTitle, textPlain, {marginBottom:40}]}>Hello Every one</Text>
      <MyComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    padding: 20,
    paddingTop: 30,
  },
  textTitle: {
    color: 'blue',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom:15
  }
})

export default App
