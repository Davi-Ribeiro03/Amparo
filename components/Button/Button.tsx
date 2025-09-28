import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface ButtonProps {
  children: React.ReactNode,
  act: () => void
}

const Button = ({children,act}:ButtonProps) => {
  return (
      <TouchableOpacity style={styles.button} onPress={act}>
        <Text style={styles.text}>
          {children}
        </Text>
      </TouchableOpacity>
  )
}

export default Button