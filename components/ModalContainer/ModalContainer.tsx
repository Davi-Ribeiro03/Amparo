import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

const ModalContainer = ({children, show, setShow}:{children: React.ReactNode, show: boolean, setShow: Function}) => {
  return (
    <TouchableWithoutFeedback >
      <View style={{position:'absolute',width:'100vw', height: '100vh',flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.5)', display: show ? 'flex' : 'none', zIndex: 10}}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ModalContainer