import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button 
        title="Go to About"
        // onPress={()=>navigation.navigate("About")}
        onPress={()=>navigation.push("About")}
      />
      <Text></Text>
      <Button 
        title="Go to Contact"
        onPress={()=>navigation.replace("Contact")}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
