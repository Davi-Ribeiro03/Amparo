import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({children}:ContainerProps) => {
  return (
    <SafeAreaView style={styles.container}>
        {children}
    </SafeAreaView>
  )
}

export default Container