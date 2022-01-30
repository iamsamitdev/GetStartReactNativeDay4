import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

const About = ({navigation}) => {
  return (
    <View>
      <Text>About Screen</Text>
      <Button 
        title="Back to Home"
        // onPress={()=>navigation.goBack()}
        onPress={()=>navigation.push("Home")}
      />
    </View>
  )
}

export default About

const styles = StyleSheet.create({})
