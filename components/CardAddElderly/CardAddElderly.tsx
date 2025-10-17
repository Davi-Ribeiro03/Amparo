import { COLORS } from '@/styles/constants'
import React from 'react'
import { Image, Text, View } from 'react-native'

const CardAddElderly = () => {
  return (
    <View 
      style={{ width: '80%', height: 100, backgroundColor: 'white', borderRadius: 10,  justifyContent: 'center', alignItems: 'center', marginTop: 60, marginHorizontal: 'auto' }}>
      <View style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.lightBlue, borderRadius: '100%'}}>
        <Image
          source={require("../../assets/images/addElderly.png")}
        />
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 16, color: COLORS.gray, marginTop: 4}}>Adicionar idoso</Text>
    </View>
  )
}

export default CardAddElderly