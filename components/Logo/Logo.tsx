import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './styles'

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Amparo</Text>
      <Image
        source={require("../../assets/images/hand.png")}
      />
    </View>
  )
}

export default Logo