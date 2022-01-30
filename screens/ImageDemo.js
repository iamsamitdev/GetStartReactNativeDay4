import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ImageDemo = () => {
  return (
    <View style={styles.container}>
    
      <Image 
        source={require('../assets/images/samit.jpg')}
        resizeMode='cover' // 'cover', 'contain', 'stretch', 'center'
        style={styles.img}
      />

      <Image 
        source={require('../assets/images/bg1.jpg')}
        resizeMode='cover' // 'cover', 'contain', 'stretch', 'center'
        style={styles.img}
      />

      <Image 
        source={{uri:'https://www-file.huawei.com/-/media/corp2020/home/cbg/1221/2-p50-pro-m.jpg'}}
        resizeMode='cover' // 'cover', 'contain', 'stretch', 'center'
        style={styles.img}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 70,
  },
  items: {
    marginBottom: 20,
  },
  img: {
    width: 140,
    height: 140,
    borderWidth: 1,
    borderColor: 'red',
  },
})

export default ImageDemo