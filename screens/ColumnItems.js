import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const ColumnItems = () => {

	const items = [
		'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten','Eleven'
	]

  return (
    <ScrollView sytle={{flex:1}}>
      <View style={styles.container}>
        {
          items.map((item, i) => {
            return (
              <View key={i} style={styles.items}>
                <Text>{item}</Text>
              </View>
            )
          })
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    flexDirection: 'column', // ค่าเริ่มต้นเป็นแบบ column อยู่แล้ว
    padding: 10
	},
	items: {
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    height: 60,
    marginBottom: 15,
		paddingLeft: 10
	},
	text: {

	}
})

export default ColumnItems
