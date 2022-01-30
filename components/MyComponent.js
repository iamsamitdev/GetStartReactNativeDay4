// rnfe
import { View, Text } from 'react-native'
import React from 'react'
import styles from '../themes/Style'


const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>This is my component</Text>
      <Text>Lorem, ipsum dolor sit amet consectetur adipisicing</Text>
      <Text>นี่คือคอมโพเนนต์ลูก</Text>
    </View>
  )
}

export default MyComponent